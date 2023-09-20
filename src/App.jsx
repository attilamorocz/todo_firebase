import React from "react";
import "./App.css";
import { Home } from "./components/Home";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <div>
        <Home />
      </div>
    </UserProvider>
  );
};

export default App;
