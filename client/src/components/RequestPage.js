import RequestList from "./RequestList";

const RequestPage = ({requests,onDeleteRequest,onAddRequest}) => {
    
    return (
         <div>
              <RequestList
               requests={requests}
               onAddRequest={onAddRequest}
               OnDeleteRequest={onDeleteRequest}
                />
        </div>)
      
}
 
export default RequestPage;