import axios from "axios";
import { BASE_URL } from "../utils/constants";
import UserCard from "./UserCard"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";

const Feed = () => {
  const feed = useSelector((state) => state.feed);
  const dispatch = useDispatch();
  const getFeed = async () => {
    try {
      if (feed) {
        return;
      }
      const response = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true
      });
      dispatch(addFeed(response.data));
    } catch(err) {
      console.log(err?.response?.data);
    }
  }
  useEffect(() => {
    getFeed();
  }, []);
  return (
    <div>
      {feed &&
        <div className="flex my-10">
          { feed.map((user) => (
            <div key={user._id} className="mx-10">
              <UserCard user={user}/>
            </div>
          ))}
        </div>
      }
    </div>
  )
}

export default Feed