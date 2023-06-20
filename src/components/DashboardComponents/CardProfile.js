import React from "react";

const CardProfile = ({user,faculty}) => {
    const handleChange=()=>{
        console.log("hi");
    }
    const capitalizeFirst = str => {
      if(!str) return;
      return str.charAt(0).toUpperCase() + str.slice(1);
    };
  return (
    <div className="card card-profile shadow mt-12">
      <div className="row justify-content-center">
        <div className="col-lg-3 order-lg-2">
          <div className="card-profile-image mt--3">
            <a href="#">
              <img
                src="https://rcpsg.ac.uk/images/jch-optimize/ng/images_people_default.webp"
                className="rounded-circle"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
        <div className="d-flex justify-content-between">
          <a href="#" className="btn btn-sm btn-info mr-4">
            Connect
          </a>
          <a href="#" className="btn btn-sm btn-default float-right">
            Message
          </a>
        </div>
      </div>
      <div className="card-body pt-0 pt-md-4">
        <div className="text-center">
          <h3>

            {/* todo name and age from api */}
            {capitalizeFirst(user?.name)}<span className="font-weight-light">, ({faculty?.id})</span>
          </h3>
          <div className="h5 font-weight-300">

            {/* todo addreess from api */}
            <i className="ni location_pin mr-2">{user?.email}</i>
          </div>
          <div className="h5 mt-4">

            {/* todo desgination from api */}
            <i className="ni business_briefcase-24 mr-2"></i>{faculty?.designation} -
            Department of {faculty?.department}
          </div>
          <div>

            {/* todo deaprtment form api */}
            <i className="ni education_hat mr-2"></i>
            +91 {user?.phoneNo}
          </div>
          <hr className="my-4" />
          {faculty?.wardenOfHostel?<div>
            
            {/* todo deaprtment form api */}
            <i className="ni education_hat mr-2"></i>
            Warden of {faculty.wardenOfHostel}
          </div>:<></>}
          {faculty?.hodOfDepartment?<div>
            
            {/* todo deaprtment form api */}
            <i className="ni education_hat mr-2"></i>
            Head of Department - {faculty.hodOfDepartment}
          </div>:<></>}
          {faculty?.deanOfCollege?<div>
            
            {/* todo deaprtment form api */}
            <i className="ni education_hat mr-2"></i>
            Dean of College - {faculty.deanOfCollege}
          </div>:<></>}
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
