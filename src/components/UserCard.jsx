import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { deleteUserFromFeed } from "../utils/feedSlice";

const UserCard = ({user}) => {
    const {firstName, lastName, gender, age, photoUrl, about} = user;
    const dispatch = useDispatch();
    const handleSendRequest = async (status, userId) => {
        try {
            await axios.post(BASE_URL + "/request/send/" + status + "/" + userId, {}, {
                withCredentials: true
            });
            dispatch(deleteUserFromFeed(userId));
        } catch (err) {
            //error handling
        }
    }
  return (
    <div>
        <div className="card bg-base-300 w-96 shadow-sm">
        <figure>
            <img src={photoUrl}/>
        </figure>
        <div className="card-body">
            <h2 className="card-title">{firstName + " " + lastName}</h2>
            {age && gender &&
              <p>{age + "," + gender}</p>
            }
            <p>{about}</p>
            <div className="card-actions justify-center">
            <button className="btn btn-secondary" onClick={() => handleSendRequest("ignored", user._id)}>Ignore</button>
            <button className="btn btn-primary" onClick={() => handleSendRequest("interested", user._id)}>Send Request</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default UserCard