import React from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Notestate from "./context/Notestate";
import HomePage from "./components/HomePage";
import FacultyProfile from "./components/FacultyProfile";
import ResearchDetails from "./components/ResearchDetails";
import AllResearchList from "./components/AllResearchList";
function App() {
  const [faculty,setFaculty] = React.useState({});
  const [search,setSearch] = React.useState(false)
  const getUserData=(id)=>{
    console.log(id);
    setSearch(true)
  }

  return (
    <BrowserRouter>
      <Notestate>
        <div className={styles.App}>
          <Routes>
            <Route path="/" element={<HomePage getUserData={getUserData} />}></Route>
            <Route path="/facultyDashboard" element={<FacultyProfile  />} />
            <Route path="/facultyResearch/:id" element={<ResearchDetails/>} />
            <Route path="/addResearch" element={<FacultyProfile  />} />
            <Route path="/facultyResearches" element={<FacultyProfile  />} />
          </Routes>
        </div>
      </Notestate>
    </BrowserRouter>
  );
}

export default App;
