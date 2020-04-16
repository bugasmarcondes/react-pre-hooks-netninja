import React from "react";
import Ninjas from "./Ninjas";

function App() {
  return (
    <div className="App">
      <h1>My first React app!</h1>
      <p>Welcome :)</p>
      <Ninjas name="Ryu" age="30" belt="Black" />
      <Ninjas name="Yoshi" age="30" belt="Green" />
    </div>
  );
}

export default App;
