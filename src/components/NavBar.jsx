import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";
import { deleteuser } from "../utils/userSlice";

const NavBar = () => {
  const user = useSelector(state => state.user);
  const dispatch =  useDispatch();
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, {
        withCredentials: true
      });
      dispatch(deleteuser());
      navigate("/login");
    } catch(err) {
      console.log(err.message);
    }
  }
  return (
     <div className="navbar bg-base-200 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Dev Tinder</a>
        </div>
        {user &&
          <div className="flex gap-2">
            <div>{user.firstName}</div>
            <div className="dropdown dropdown-end mx-4">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoUrl || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
                </div>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li>
                  <Link  to="/profile" className="justify-between">
                    Profile
                  </Link>
                </li>
                <li><Link to="/feed">Feed</Link></li>
                <li><a onClick={logout}>Logout</a></li>
              </ul>
            </div>
          </div>
        }
      </div>
  )
}

export default NavBar