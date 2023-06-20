import React, { useEffect, useReducer, useRef, useState } from "react";
// import HeaderDash from "./Miscellaneous/HeaderDash";
import CardProfile from "./Miscellaneous/CardProfile";
import ResearchList from "./Miscellaneous/ResearchList";
// import ResearchDash from "./Miscellaneous/ResearchDash";
import NavbarDash from "./DashboardComponents/NavbarDash";
import { useNavigate, useParams } from "react-router-dom";
import PrintComponent from "./Miscellaneous/PrintComponent";
import { useReactToPrint } from "react-to-print";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_BEGIN":
      return { ...state, loading: true };
    case "FETCH_R_SUCCESS":
      return { ...state, loading: false, researches: action.payload };
    case "FETCH_F_SUCCESS":
      return { ...state, loading: false, faculty: action.payload };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
  }
};

const AllResearchList = ({ btnData, routeTo }) => {
  const {facultyId}=useParams()
  const navigate = useNavigate()
  const [{ loading, error, researches,faculty }, dispatch] = useReducer(reducer, {
    loading: true,
    error: "",
    researches: [],
    faculty:{},
  });
  useEffect(() => {
    const fetchAllResearch = async () => {
      dispatch({ type: "FETCH_BEGIN" });
      try {
        const res = await fetch(`http://localhost:8080/facultyResearch/getFacultyResearch/${facultyId}`, {
          method: "GET",
          header: {
            "Content-type": "application/json",
          },
        });
        const json = await res.json();
        // console.log("json",json);
        if(json.msg==="success"){
          dispatch({ type: "FETCH_R_SUCCESS", payload: json.data });
          // console.log("researches",loading);
        }
        else{
          dispatch({ type: "FETCH_FAIL", payload: json.error });
          console.log(json.error);
        }
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: error });
      }
    };
    const fetchFaculty = async (facultyId) => {
      dispatch({ type: "FETCH_BEGIN" });
      try {
        const res = await fetch(
          `http://localhost:8080/faculty/getFaculty/${facultyId}`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        const json = await res.json();
        // console.log(json);
        if (json.msg === "success") {
          dispatch({ type: "FETCH_F_SUCCESS", payload: json.data });
        } else if (json.msg === "failure") {
          dispatch({ type: "FETCH_FAIL", payload: json.error });
        }
      } catch (error) {
        console.log(error);
        dispatch({ type: "FETCH_FAIL", payload: error.msg });
      }
    };
    fetchFaculty(facultyId);
    fetchAllResearch();
  }, []);
  const handleOpenResearch=(id)=>{
    navigate(`/facultyResearch/${facultyId}/${id}`)
  }
  // const [print,setPrint] =useState(false)
  const printRef = useRef()
  const handlePrint=useReactToPrint({
    content:()=>printRef.current
  })


  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (<>
        <div className="main-content">
          <NavbarDash />
          <div>
            {/* <HeaderDash btnData={showResearch?"Back to Research":btnData} routeTo={showResearch?"/facultyResearches":routeTo} inputDisabled={inputDisabled} handleInputDisabled={handleInputDisabled} /> */}
            <div className="container-fluid mt-4">
              <div className="row">
                <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
                  <CardProfile user={faculty?.User} faculty={faculty} />
                </div>
                <div className="col-xl-8 order-xl-1">
                  <ResearchList researches={researches} handlePrint={handlePrint} handleOpenResearch={handleOpenResearch} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{display:"none"}}><PrintComponent ref={printRef} username={faculty?.User?.name} researches={researches} /></div>
        </>
      )}
    </>
  );
};

export default AllResearchList;
