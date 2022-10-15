import RequestCard from "./RequestCard";

function RequestList({requests,onDeleteRequest}) {

    return (
      <div>
        <div className="requestheader-cont">
          <div className="request-header">
          <h3>Updated Requests</h3>
          </div>
        </div>
         <ul className="card-container">
        {requests.map((request) => {
          return (
            <RequestCard
              key={request.id}
              request={request}
              onDeleteRequest={onDeleteRequest}
            />
          );
        })}
      </ul>
      </div>
     
    );
  }
 
export default RequestList