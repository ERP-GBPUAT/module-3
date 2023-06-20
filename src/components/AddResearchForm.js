import React, { useEffect, useState } from "react";
import ResearchForm from "./Miscellaneous/ResearchForm";
// import HeaderDash from "../Miscellaneous/HeaderDash";
import CardProfile from "./Miscellaneous/CardProfile";
import NavbarDash from "./DashboardComponents/NavbarDash";
import { useNavigate } from "react-router-dom";
// import { loadavg } from "os";

const AddResearchForm = ({ btnData, routeTo }) => {
  const navigate = useNavigate()
  const [research, setResearch] = React.useState({
    researchTitle: "",
    researchType: "",
    journalISBNNo: "",
    authorsName: "",
    journalName: "",
    publishedYear: "",
    volNo: "",
    pageNo: "",
    researchLink: "",
  });
  const [data,setData] = useState({})
  const [laoding,setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    setData(JSON.parse(localStorage.getItem('data')));
    setLoading(false)
  }, [])
  console.log("researchData",data);

  const handleChange = (e) => {
    setResearch({ ...research, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(research);
    try {
      const res = await fetch(
        "http://localhost:8080/facultyResearch/addResearch",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "token": localStorage.getItem("token"),
          },
          body: JSON.stringify(research),
        }
      );
      const json = await res.json();
      if(json.msg==="success"){
        navigate(`/facultyResearch/${json?.data?.FacultyId}/${json?.data?.id}`)
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>{
      laoding?<div>Loading...</div>:
    
      <div className="main-content">
        <NavbarDash />
        <div className="container-fluid mt-4">
          <div className="row">
            <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
              <CardProfile user={data.user} faculty={data.faculty} />
            </div>
            <div className="col-xl-8 order-xl-1">
              <ResearchForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                research={research}
                setResearch={setResearch}
              />
            </div>
          </div>
        </div>
      </div>}
      {/* <HeaderDash btnDaata={btnData} routeTo={routeTo} inputDisabled={inputDisabled} handleInputDisabled={handleInputDisabled} /> */}
    </>
  );
};

export default AddResearchForm;
