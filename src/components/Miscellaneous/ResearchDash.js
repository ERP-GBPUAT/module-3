import React, { useEffect } from "react";
import { Link } from "react-router-dom";


const ResearchDash = ({ research,setShowResearch }) => {
  return (
    <>
      <div className="card bg-secondary shadow">
        <div className="card-header bg-white border-0">
          <div className="row align-items-center">
            <div className="col-8">
              <h3 className="mb-0 text-oliveGreen">Research</h3>
            </div>
            <div className="col-4 text-right">
            <Link to={"/addResearch"} className="btn btn-sm btn-primary">
              Add new research
            </Link>
            <Link className="btn btn-sm btn-primary" onClick={()=>setShowResearch(false)}>
              Back
            </Link>
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
                    <label
                      className="form-control-label"
                      htmlFor="input-username"
                    >
                      Research title
                    </label>
                    <input
                      disabled={true}
                      type="text"
                      id="input-username"
                      className="form-control form-control-alternative"
                      placeholder="Username"
                      value="lucky.jesse"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label
                      className="form-control-label"
                      htmlFor="input-email"
                    >
                      Journal ISBN No.
                    </label>
                    <input
                      disabled={true}
                      // onChange={handleChange}
                      type="email"
                      id="input-email"
                      className="form-control form-control-alternative"
                      value="jesse@gmail.com"
                      placeholder="jesse@example.com"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label
                      className="form-control-label"
                      htmlFor="input-first-name"
                    >
                      Research Type
                    </label>
                    <input
                      disabled={true}
                      // onChange={handleChange}
                      type="text"
                      id="input-first-name"
                      className="form-control form-control-alternative"
                      placeholder="First name"
                      value="Lucky"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label
                      className="form-control-label"
                      htmlFor="input-last-name"
                    >
                      Author's Name
                    </label>
                    <input
                      disabled={true}
                      // onChange={handleChange}
                      type="text"
                      id="input-last-name"
                      className="form-control form-control-alternative"
                      placeholder="Last name"
                      value="Jesse"
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
                      htmlFor="input-username"
                    >
                      Journal Name
                    </label>
                    <input
                      disabled={true}
                      // onChange={handleChange}
                      type="text"
                      id="input-username"
                      className="form-control form-control-alternative"
                      placeholder="Username"
                      value="lucky.jesse"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label
                      className="form-control-label"
                      htmlFor="input-email"
                    >
                      Published Year
                    </label>
                    <input
                      disabled={true}
                      // onChange={handleChange}
                      type="email"
                      id="input-email"
                      className="form-control form-control-alternative"
                      value="jesse@gmail.com"
                      placeholder="jesse@example.com"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label
                      className="form-control-label"
                      htmlFor="input-first-name"
                    >
                      Volume No.
                    </label>
                    <input
                      disabled={true}
                      // onChange={handleChange}
                      type="text"
                      id="input-first-name"
                      className="form-control form-control-alternative"
                      placeholder="First name"
                      value="Lucky"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label
                      className="form-control-label"
                      htmlFor="input-last-name"
                    >
                      Page No.
                    </label>
                    <input
                      disabled={true}
                      // onChange={handleChange}
                      type="text"
                      id="input-last-name"
                      className="form-control form-control-alternative"
                      placeholder="Last name"
                      value="Jesse"
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
                <label
                  className="form-control-label"
                  htmlFor="input-research"
                >
                  Link
                </label>
                <input
                  disabled={true}
                  // onChange={handleChange}
                  id="input-research"
                  className="form-control form-control-alternative"
                  placeholder="Research Intrests"
                  value="Network security and Database"
                  type="text"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResearchDash;
