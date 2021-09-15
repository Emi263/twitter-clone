import "./styles/App.css";
import React from "react";
import Sidebar from "./components/Sidebar";
import Posts from "./components/Posts";
import Trends from "./components/Trends";
import LogIn from "./components/LogIn";
import { GlobalContext } from "./store/GlobalProvider";

function App() {
  const { user } = React.useContext(GlobalContext);

  return (
    <>
      {user ? (
        <>
          <div className="App">
            <Sidebar />
            <Posts />
            <Trends />
          </div>
        </>
      ) : (
        <LogIn />
      )}
    </>
  );
}

export default App;
