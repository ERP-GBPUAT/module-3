import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select"

const ResearchForm = ({ handleSubmit, handleChange, research,setResearch }) => {

  const [user,setUser] = useState({})
  const [researchType,setResearchType] = useState()
  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem('data')))
  },[])
  const handleResChange = (researchType)=>{
    setResearchType(researchType)
    setResearch({...research,researchType:researchType.value})
  }
  const types = [
    {value:"Book",label:"Book"},
    {value:"Books",label:"Books"},
    {value:"Book chapter published",label:"Book chapter published"},
    {value:"Journal published",label:"Journal published"},
    {value:"Patents",label:"Patents"},
    {value:"Publication in International conferences",label:"Publication in International conferences"},
    {value:"Publication in International journals",label:"Publication in International journals"},
    {value:"Conferences",label:"Conferences"},
    {value:"Conferences published",label:"Conferences published"},
  ]
  return (
    <div className="card bg-secondary shadow">
      <div className="card-header bg-white border-0">
        <div className="row align-items-center">
          <div className="col-8">
            <h3 className="mb-0 text-oliveGreen">Add Research</h3>
          </div>
          <div className="col-4 text-right">
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-sm btn-primary"
            >
              Add Research
            </button>
            {/* <Link className="btn btn-sm btn-primary" to={`/facultyResearches/${user.faculty?.id}`}>Cancel</Link> */}
          </div>
        </div>
      </div>
      <div className="card-body">
        <form>
          <div className="">
            <h6 className="heading-small text-darkOliveGreen mb-4">
              Research information
            </h6>
          </div>
          <div className="pl-lg-4">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group focused">
                  <label className="form-control-label" htmlFor="input-title">
                    Research title
                  </label>
                  <input
                    name="researchTitle"
                    disabled={false}
                    onChange={handleChange}
                    type="text"
                    id="input-title"
                    className="form-control form-control-alternative"
                    placeholder="Research Title"
                    value={research.researchTitle}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label
                    className="form-control-label"
                    htmlFor="input-journalNo"
                  >
                    Journal ISBN No.
                  </label>
                  <input
                    name="journalISBNNo"
                    disabled={false}
                    onChange={handleChange}
                    type="text"
                    id="input-journalNo"
                    className="form-control form-control-alternative"
                    value={research.journalISBNNo}
                    placeholder="Jorunal ISBN No."
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group focused">
                  <label className="form-control-label" htmlFor="input-type">
                    Research Type
                  </label>
                  <Select
                    name="researchType"
                    options={types}
                    onChange={handleResChange}
                    type="text"
                    id="input-type"
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        border: "none",
                        boxShadow:"none",
                        padding:"0",
                        margin:"0"
                        
                      }),
                    }}
                    className="form-control form-control-select form-control-alternative"
                    placeholder="Research Type"
                    value={researchType}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group focused">
                  <label
                    className="form-control-label"
                    htmlFor="input-author-name"
                  >
                    Other Authors Name
                  </label>
                  <input
                    name="authorsName"
                    disabled={false}
                    onChange={handleChange}
                    type="text"
                    id="input-author-name"
                    className="form-control form-control-alternative"
                    placeholder="All Authors Name"
                    value={research.authorsName}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <h6 className="heading-small text-darkOliveGreen mb-4">
            Other information
          </h6>
          <div className="pl-lg-4">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group focused">
                  <label
                    className="form-control-label"
                    htmlFor="input-journal-name"
                  >
                    Journal Name
                  </label>
                  <input
                    name="journalName"
                    disabled={false}
                    onChange={handleChange}
                    type="text"
                    id="input-journal-name"
                    className="form-control form-control-alternative"
                    placeholder="Journal Name"
                    value={research.journalName}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-control-label" htmlFor="input-year">
                    Published Year
                  </label>
                  <input
                    name={"publishedYear"}
                    disabled={false}
                    onChange={handleChange}
                    type="text"
                    id="input-year"
                    className="form-control form-control-alternative"
                    value={research.publishedYear}
                    placeholder={"Published Year"}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group focused">
                  <label className="form-control-label" htmlFor="input-volume">
                    Volume No.
                  </label>
                  <input
                    name="volNo"
                    disabled={false}
                    onChange={handleChange}
                    type="text"
                    id="input-volume"
                    className="form-control form-control-alternative"
                    placeholder={"Voulme Number"}
                    value={research.volNo}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group focused">
                  <label className="form-control-label" htmlFor="input-page">
                    Page No.
                  </label>
                  <input
                    name="pageNo"
                    disabled={false}
                    onChange={handleChange}
                    type="text"
                    id="input-page"
                    className="form-control form-control-alternative"
                    placeholder={"Page No."}
                    value={research.pageNo}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <h6 className="heading-small text-darkOliveGreen mb-4">
            Research Link
          </h6>
          <div className="pl-lg-4">
            <div className="form-group focused">
              <label className="form-control-label" htmlFor="input-link">
                Link
              </label>
              <input
                name="researchLink"
                disabled={false}
                onChange={handleChange}
                id="input-link"
                className="form-control form-control-alternative"
                placeholder="Research Link"
                value={research.researchLink}
                type="text"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResearchForm;