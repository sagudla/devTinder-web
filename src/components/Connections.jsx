import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionsSlice";
import ConnectionsCard from "./ConnectionsCard";


const Connections = () => {
  const connections =  useSelector(state => state.connections);
  const dispatch = useDispatch();

  const getConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections" , {
        withCredentials: true
      });
      dispatch(addConnection(res.data));
    } catch (err) {
        console.log(err?.response?.data);
    }
  }
  useEffect(() => {
    getConnections();
  }, []);
  if (!connections) {
    return;
  }
  if (connections.length === 0) {
    return <h1 className="flex text-3xl text-red-500 font-bold justify-center my-10">No connections exists</h1>
  }
return (
  <>
    {connections && (
      <div className="flex flex-col items-center gap-6 my-10">
        <h1 className="text-2xl font-bold text-yellow-500">Connections</h1>
        {connections.map((connection) => (
          <ConnectionsCard key={connection._id} connection={connection}/>
        ))}
      </div>
    )}
  </>
);

}

export default Connections