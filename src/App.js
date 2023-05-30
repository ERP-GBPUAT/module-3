import React, { useEffect, useState, useReducer, useRef } from "react";
import styles from "./App.module.css";
import Navbar from "./components/NavbarMain";
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import Notestate from "./context/Notestate";
import HomePage from "./components/HomePage";
import FacultyProfile from "./components/FacultyProfile";
import ResearchDetails from "./components/ResearchDetails";
import AllResearchList from "./components/AllResearchList";
import AddResearchForm from "./components/AddResearchForm";
function App() {
  const message = useRef();
  const [token, setToken] = useState(false);
  const [search, setSearch] = React.useState(false);
  const getUserData = (id) => {
    console.log(id);
    setSearch(true);
  };
  useEffect(() => {
    // let Msg = document.getElementById("message");
    const recMsg = (e) => {
      e.preventDefault()
      if (localStorage.getItem("token") && localStorage.getItem('token')!=undefined) return;
      console.log("data", e.data);
      if (!e.data.token) {
        return
      }
      localStorage.setItem("token", e.data.token);
      localStorage.setItem("data", e.data.user);
    };
    window.addEventListener("message", recMsg);
    return () => {
      window.removeEventListener("message", recMsg);
    };
  }, []);
  

  return (
    <BrowserRouter>
      <Notestate>
        <div className={styles.App}>
          {/* <div ref={message} id="message"></div> */}
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<HomePage getUserData={getUserData} />}
            ></Route>
            <Route path="/facultyDashboard/:facultyId" element={<FacultyProfile />} />
            <Route path="/facultyResearch/:facultyId/:researchId" element={<ResearchDetails />} />
            <Route path="/addResearch" element={<AddResearchForm />} />
            <Route path="/facultyResearches/:facultyId" element={<AllResearchList />} />
          </Routes>
        </div>
      </Notestate>
    </BrowserRouter>
  );
}

export default App;
