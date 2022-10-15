import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";

function App() {
  const [user, setUser] = useState(null);
 
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <main>
        {user ? (
          <Routes>
            <Route path="/" element={ <Home user={user}/>}/> 
          </Routes>
        ) : (
          <Routes>
            <Route path="/signup" element={ <SignUp setUser={setUser} />}/>
            <Route path="/login" element={   <Login setUser={setUser} />}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
        )}
      </main>
    </div>
  );
}

export default App;
