import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeRequest } from "../utils/requestsSlice";

const RequestsCard = ({request}) => {
    const user = request.fromUserId;
    const dispatch = useDispatch();
    const reviewRequest = async (status, id) => {
        try {
            await axios.post(BASE_URL + "/request/review/" + status + "/" + id, {}, {
                withCredentials: true
            });
            dispatch(removeRequest(id));
        } catch(err) {
            //error handling
        }
    }
  return (
    <div className="card card-side bg-base-100 shadow-sm w-full max-w-2xl" >
        <figure className="w-40 shrink-0">
            <img
            src={
                user.photoUrl 
            }
            alt={`${user.firstName} ${user.lastName}`}
            className="h-full w-full object-cover"
            />
        </figure>
        <div className="card-body">
            <h2 className="card-title">
            {user.firstName} {user.lastName}
            </h2>
            <p>{user.about}</p>
            <div className="card-actions justify-center">
                <button className="btn btn-primary" onClick={() => reviewRequest("accepted", request._id)}>Accept</button>
                <button className="btn btn-secondary" onClick={() => reviewRequest("rejected", request._id)}>Reject</button>
            </div>
        </div>
    </div>
  )
}

export default RequestsCard