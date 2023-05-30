import React, { useEffect, useReducer } from "react";
import NavbarDash from "./DashboardComponents/NavbarDash";
import ResearchDash from "./Miscellaneous/ResearchDash";
import { useParams } from "react-router-dom";
import CardProfile from "./Miscellaneous/CardProfile";
// import { faculties } from "./jsonData";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_BEGIN":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, research: action.payload };
    case "FAIL":
      return { ...state, loading: false, error: action.payload };
  }
};

const ResearchDetails = () => {
  const { facultyId,researchId } = useParams();
  const [{ loading, error, research }, dispatch] = useReducer(reducer, {
    loading: true,
    error: "",
    research: {},
  });
  // const [loading,setLoading] = React.useState(false);
  console.log(facultyId,"researchID",researchId);

  useEffect(() => {
    const fetchresearch = async () => {
      dispatch({ type: "FETCH_BEGIN" });
      try {
        const res = await fetch(
          "http://localhost:8080/facultyResearch/getResearch",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ researchId: researchId }),
          }
        );
        const json = await res.json();
        if(json.msg==="success"){
          dispatch({ type: "FETCH_SUCCESS", payload: json.data });
          console.log(json.data);
        }
        else {
          dispatch({type:"FETCH_FAIL",payload:json.error})
        }
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: error });
        console.log(error);
      }
    };
    fetchresearch();
  }, []);
  // const fetchresearch=async()=>{
  // setLoading(true)
  // try {
  //   const res=await fetch("")
  //   const data= await res.json()
  //   setResearch(data)
  //   setLoading(false)
  // } catch (error) {
  //   console.log(error);
  // }
  // }

  // const filterdatauser=()=>{
  //   const x=faculties.filter((c)=>c._id==id)
  // setResearch(x)
  // }

  // console.log(research);
  //   useEffect(()=>{
  // filterdatauser()
  //   },[])
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="main-content">
        <NavbarDash />
        <div className="container-fluid mt-4">
          <div className="row">
            <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
              <CardProfile user={research?.Faculty?.User} faculty={research?.Faculty} />
            </div>
            <div className="col-xl-8 order-xl-1">
              <ResearchDash research={research} />
            </div>
          </div>
        </div>
      </div>
        // <div className="main-content">
        //   <NavbarDash />

        //   <ResearchDash research={research} />
        // </div>
      )}
    </>
  );
};

export default ResearchDetails;
