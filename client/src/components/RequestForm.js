import { useState } from "react";

function RequestForm({ onAddRequest }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [user_id, setUserId] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    
const requestData={ 
    name: name,
    location: location,
    phone: phone,
    user_id: user_id,
};
    fetch("/requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((r) => r.json())
      .then((newRequest) => onAddRequest(newRequest));
  }

  return (
    <div className="request-form">
      <h2>Make a New Towing Request</h2>
      <form id="request-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="location"
          placeholder="Your Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone_number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
         <input
          type="text"
          name="user_id"
          placeholder="user_Code"
          value={user_id}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button type="submit">Make a Request</button>
      </form>
    </div>
  );
}

export default RequestForm;
