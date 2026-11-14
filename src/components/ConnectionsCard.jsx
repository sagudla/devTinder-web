
const ConnectionsCard = ({connection}) => {
  return (
      <div className="card card-side bg-base-100 shadow-sm w-full max-w-2xl" >
          <figure className="w-40 shrink-0">
            <img
              src={
                connection.photoUrl 
              }
              alt={`${connection.firstName} ${connection.lastName}`}
              className="h-full w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {connection.firstName} {connection.lastName}
            </h2>
            <p>{connection.about}</p>
          </div>
      </div>
  )
}

export default ConnectionsCard