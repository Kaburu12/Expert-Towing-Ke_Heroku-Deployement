import { useEffect, useState } from "react";
import VehicleList from "./VehicleList";
import Search from "./Search";
import RequestPage from "./RequestPage";
import RequestForm from "./RequestForm";
// import {Link} from "react-router-dom";

function VehiclePage() {
  const [vehicles, setVehicles] = useState([]);
  const[requests,setRequests] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/vehicles")
      .then((r) => r.json())
      .then((vehiclesArray) => {
        setVehicles(vehiclesArray);
      });
  }, []);

  useEffect(() => {
    fetch("/requests")
      .then((r) => r.json())
      .then((requestsArray) => {
        setRequests(requestsArray);
      });
  }, []);


  function handleAddRequest(newRequest) {
    // const updatedRequestsArray = [...requests, newRequest];
    setRequests( [...requests, newRequest]);
  }

  function handleDeleteRequest(id) {
    const updatedRequestsArray = requests.filter((request)=>request.id !== id);
    setRequests(updatedRequestsArray);
  }

  function handleUpdateVehicle(updatedVehicle) {
    const updatedVehiclesArray = vehicles.map((vehicle) => {
      return vehicle.id === updatedVehicle.id ? updatedVehicle : vehicle;
    });
    setVehicles(updatedVehiclesArray);
  }

  const displayedVehicles=vehicles.filter((vehicle) => {
    return vehicle.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <main> 
      <div className="search-requestform">
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <RequestForm onAddRequest={handleAddRequest}/>
      </div>
      <div className="vehicle-request">
      <VehicleList
        vehicles={displayedVehicles}
        onUpdateVehicle={handleUpdateVehicle}
      />
      <RequestPage
      requests={requests}
      onAddRequest={handleAddRequest}
      OnDeleteRequest={handleDeleteRequest}
      />
      </div>
      <footer>
        <h4>Contact Us : <span id="icons"> 📞</span> 0796225100</h4>
        <h4>Email : <span id="icons">📧</span> @infor.expert-towing.co.ke</h4>
        <h3>Deisgn by Michael Kaburu</h3>
      </footer>
    </main>
  );
}

export default VehiclePage;
