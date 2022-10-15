import VehicleCard from "./VehicleCard";

function VehicleList({ vehicles,onUpdateVehicle}) {
  return (
    <div id="vehicle-list">
       <h2>Different Vehicle Categories Listed With Towing Price Charges 
        According To Damage Rate <span id="veh-list">( Cars, SUVs, Trucks,Tractors & Buses)</span> </h2>
      <div className="cards-container">
         <ul className="cards">
      {vehicles.map((vehicle) => {
        return (
          <VehicleCard
            key={vehicle.id}
            vehicle={vehicle}
            onUpdateVehicle={onUpdateVehicle}
          />
        );
      })}
    </ul>
    </div>
    </div>
    
 
  );
}

export default VehicleList;