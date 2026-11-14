import { useState } from "react"
import axios from 'axios';
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("apple@gmail.com");
  const [password, setPassword] = useState("Apple@12345");
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
      return navigate("/feed");
    } catch(err) {
      console.log("Error:" + err.message);
    }
  }
  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div className="justify-center">
            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">Email</legend>
              <input type="text" id="email" className="input w-full my-1" value={email} onChange={(event) => setEmail(event.currentTarget.value)}/>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input type="password" id="password" className="input w-full my-1" value={password} onChange={(event) => setPassword(event.currentTarget.value)}/>
            </fieldset>
          </div>
          <div className="card-actions justify-center m-2">
            <button className="btn btn-primary" onClick={login}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login