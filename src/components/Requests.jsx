import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addRequest } from "../utils/requestsSlice";
import { useEffect } from "react";
import RequestsCard from "./RequestsCard";


const Requests = () => {
  const requests =  useSelector(store => store.requests);
  const dispatch = useDispatch();

  const getRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/recieved" , {
        withCredentials: true
      });
      console.log(res);
      dispatch(addRequest(res.data.data));
    } catch (err) {
        console.log(err?.response?.data);
    }
  }
  useEffect(() => {
    getRequests();
  }, []);

  if (!requests) {
    return;
  }
  if (requests.length === 0) {
    return <h1 className="flex text-3xl text-red-500 font-bold justify-center my-10">No requests exists</h1>
  }
  return (
    <>
        {requests && (
            <div className="flex flex-col items-center gap-6 my-10">
                <h1 className="text-2xl font-bold text-yellow-500">Connection Requests</h1>
                {requests.map((request) => (
                    <RequestsCard key={request._id} request={request}/>
                ))}
            </div>
        )}
    </>
  )
}

export default Requests