function RequestCard({ request, onDeleteRequest}) {
    const { id, name,location,phone,user_id } = request;
  
    function handleDeleteClick() {
      fetch(`/requests/${request.id}`, {
        method: "DELETE",
      }).then((r) => {
        if (r.ok) {
          onDeleteRequest(id);
        }
      });
    }
  
  
    return ( <div>
      <div className="request-card">
        <h4> Vehicle Type: <span>{name}</span> </h4>
        <h4>Location: <span>{location}</span> </h4>
        <h4>Phone.No: <span>{phone}</span> </h4>
        <h4>user_id: <span>{user_id}</span> </h4>
        <button onClick={handleDeleteClick}>Cancel Request</button>
      </div>
           </div>
      
    );
  }
  
  export default RequestCard;
  