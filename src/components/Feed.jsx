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
      <div className="flex justify-center my-10">
        <UserCard user={feed[0]}/>
      </div>
      }
    </div>
  )
}

export default Feed