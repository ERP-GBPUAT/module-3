import React from "react";
import { Link,useLocation } from "react-router-dom";

const HeaderDash = ({inputDisabled,handleInputDisabled,btnData,routeTo}) => {
  const location = useLocation()
  
  return (
    <>
      <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center imageStyle">
        {/* <!-- Mask --> */}
        <span className="mask bg-gradient-default opacity-8"></span>
        {/* <!-- Header container --> */}
        <div className="container-fluid d-flex align-items-center">
          <div className="row">
            <div className="col-lg-7 col-md-10">
              <h1 className="display-2 text-white">Hello Jesse</h1>
              <p className="text-white mt-0 mb-5">
                This is your profile page. You can see the progress you've made
                with your work and manage your projects or researches
              </p>
              {inputDisabled ? <Link to={routeTo} onClick={() => {if(location.pathname==="/facultyDashboard"){handleInputDisabled(true)}}} className="btn btn-info ">
                      {btnData}
                    </Link> :
                      <></>}
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default HeaderDash;
