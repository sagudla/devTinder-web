import NavBar from "./NavBar"
import Footer from "./Footer"
import { Outlet, useNavigate } from "react-router"
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
const Body = () => {
  const user = useSelector((state) => state.user);
  const dispatch =  useDispatch();
  const navigate = useNavigate();
  const getProfie = async () => {
      if (user) {
        return;
      }
      try {
        const response = await axios.get(BASE_URL + "/profile/view", {
          withCredentials: true
        });
        dispatch(addUser(response.data));
      } catch(err) {
          if (err?.status === 401) {
            return navigate("/login");
          }
          console.log(err.response.data);
      }
  };
  useEffect(() => {
    getProfie();
  }, []);
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Body