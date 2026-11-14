import { useState } from "react"
import axios from 'axios';
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async () => {
    try {
      const response = await axios.post(BASE_URL + "/login", {
        email, password
      }, 
      {
        withCredentials: true
      });
      dispatch(addUser(response.data));
      return navigate("/");
    } catch(err) {
      setError(err?.response?.data);
      console.log("Error:" + err.message);
    }
  }
  const signUp = async () => {
    try {
      const response = await axios.post(BASE_URL + "/signup", {
        firstName, lastName, email, password
      }, {withCredentials: true});
      dispatch(addUser(response.data));
      return navigate("/profile");
    } catch(err) {
      //error handling
    }
  }
  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">{isLogin ? "Login" : "Sign Up"}</h2>
          <div className="justify-center">
            {!isLogin && (
              <>
              <fieldset className="fieldset my-2">
                <legend className="fieldset-legend">First Name</legend>
                <input type="text" id="email" className="input w-full my-1" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
              </fieldset><fieldset className="fieldset">
                  <legend className="fieldset-legend">Last Name</legend>
                  <input type="text" id="password" className="input w-full my-1" value={lastName} onChange={(event) => setLastName(event.target.value)} />
                </fieldset>
              </>
            )}
            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">Email</legend>
              <input type="text" id="email" className="input w-full my-1" value={email} onChange={(event) => setEmail(event.currentTarget.value)}/>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input type="password" id="password" className="input w-full my-1" value={password} onChange={(event) => setPassword(event.currentTarget.value)}/>
            </fieldset>
          </div>
          {error && (
            <p className="text-red-500">{error}</p>
          )}
          <div className="card-actions justify-center my-2">
            <button className="btn btn-primary" onClick={isLogin ? login : signUp}>{isLogin ? "Login" : "Sign Up"}</button>
          </div>
          <p className="m-auto my-2 cursor-pointer" onClick={() => setIsLogin((value) => !value)}> {isLogin ? "New user? Signup here" : "Existing user? Login here"}</p>
        </div>
      </div>
    </div>
  )
}

export default Login