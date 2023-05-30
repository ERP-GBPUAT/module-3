import React from "react";
import ResearchForm from "./Miscellaneous/ResearchForm";
// import HeaderDash from "../Miscellaneous/HeaderDash";
import CardProfile from "./Miscellaneous/CardProfile";
import NavbarDash from "./DashboardComponents/NavbarDash";

const AddResearchForm = ({ btnData, routeTo }) => {
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
  const [inputDisabled, setInputDisabled] = React.useState(true);

  const handleInputDisabled = (edit) => {
    if (edit) {
      setInputDisabled(false);
    } else {
      setInputDisabled(true);
    }
  };

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
            token: localStorage.getItem("token"),
          },
          body: JSON.stringify(research),
        }
      );
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="main-content">
        <NavbarDash />
        <div className="container-fluid mt-4">
          <div className="row">
            <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
              <CardProfile />
            </div>
            <div className="col-xl-8 order-xl-1">
              <ResearchForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                research={research}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <HeaderDash btnDaata={btnData} routeTo={routeTo} inputDisabled={inputDisabled} handleInputDisabled={handleInputDisabled} /> */}
    </>
  );
};

export default AddResearchForm;
