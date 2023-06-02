import React, { useState } from "react";
import "./HomePage.css";
import SortIcon from "../Images/icons8-funnel-50.png";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [faculties,setFaculties] = useState([]);
  const [error,setError] = useState()

  const [data3,setdata3]=useState("")
  const [loading, setLoading] = React.useState(false);
  const [resType, setResType] = useState("All");
  const [searchName, setSearchName] = useState("");

  const fetchAllFaculties=async()=>{
    setLoading(true)
    const res = await fetch('http://localhost:8080/facultyResearch/getAllResearch',{
      method:"GET",
      headers:{
        "Content-type":"application/json"
      }
    })
    console.log(res,"tyui")
    const json = await res.json();
    if(json.msg==="success"){
      setFaculties(json.data);
      console.log(json.data);
      setLoading(false)
    }
    else{
      setError(json.error)
    }
  }
const navigate=useNavigate()
  React.useEffect(() => {
    fetchAllFaculties()
  }, [])
  const handleSearch = (e) => {
    setSearchName(e.target.value);
  };
  const HandleSearchBtn =(faculties,searchName) => {
    
    const x=faculties.filter((n) =>searchName.length>0? n.username.toLowerCase().includes(searchName.toLowerCase()):faculties)
    return x;
  }
  const [data1, setData1] = useState([])
  const [data2,setData2]=useState([])
 
  const send = (e) => {
    if (e.target.checked)
      setData1([...data1, e.target.name])
    else {
      setData1(data1.filter((c) => c != e.target.name))
    }

  }
  const send1 = (e) => {
    if (e.target.checked)
    setData2([...data2, e.target.name])
  else {
    setData2(data2.filter((c) => c != e.target.name))
  }

    
  }
  const branch = (products, branch) => {
    const branchdata = products.filter((c) => branch.length > 0 ? branch.includes(c.Faculty.department) : products
    )
    return branchdata
  }
  const designation = (products, desigination) => {
    const designationdata = products.filter((c) => desigination.length > 0 ? desigination.includes(c.designation) : products

    )
    return designationdata
  }

const reasrctype=(products,rt)=>{
  let researchdata
  if(rt==="All")
  {
    researchdata=products
  }
  else{
 researchdata=products.filter((c)=>rt.length>0?c.researchType===rt:products)
  }
return researchdata
}

const branch1=branch(faculties,data1)
const desigination1=designation(branch1,data2)
const research=reasrctype(desigination1,data3)
const search =HandleSearchBtn(research,searchName)

  if(loading){
    return <div>Loading....</div>
  }
  else if(error){
    return <div>{error}</div>
  }
  return (
    <div className="homepage">
      <div className="heading">Faculty Research details Management System</div>
      <div className="navbarSelect">
        <ul className="options">
          <li
            className={`option1 ${resType === "All" ? "active" : ""}`}
            onClick={() => {
             setResType("All");
              setdata3("All")
            }}
          >
            All
          </li>
          <li
            className={`option1 ${resType === "Bks" ? "active" : ""}`}
            onClick={() => {
             setResType("Bks");
              setdata3("Books")
            }}
          >
            Books
          </li>
          <li
            className={`option1 ${resType == "BkChp" ? "active" : ""}`}
            onClick={() => {
             setResType("BkChp");
              setdata3("Book Chapter")
            }}
          >
            Book Chapter
          </li>
          <li
            className={`option1 ${resType == "Jou" ? "active" : ""}`}
            onClick={() => {
             setResType("Jou");
              setdata3("Journal")
            }}
          >
            Jounral
          </li>
          <li
            className={`option1 ${resType == "Conppr" ? "active" : ""}`}
            onClick={() => {
             setResType("Conppr");
              setdata3("conferencePaper")
            }}
          >
            Conference Paper
          </li>
          <li
            className={`option1 ${resType == "Pat" ? "active" : ""}`}
            onClick={() => {
             setResType("Pat");
              setdata3("Patents")
            }}
          >
            Patents
          </li>
        </ul>
      </div>
      <div className="searchBox">
        <div className="searchInput">
          <input
            type="text"
            onChange={handleSearch}
            value={searchName}
            placeholder="Search faculty name"
          />
         </div>
      </div>
      <div className="mainBox">
        <div className="tableBox">
          {!loading ? <table className="table">
            <tr>
              <th>Faculty Name</th>
              <th>Designation</th>
              <th>Department</th>
              <th>Research Type</th>
              <th>Research topic</th>
              <th>Year Published</th>
            </tr>
            {search?.map((row) => {
              return (
                <>
          <tr className="hometr" key={row._id} onClick={()=>navigate(`facultyResearch/${row?.Faculty?.id}/${row.id}`)}>
                  <td>{row.Faculty?.User?.name}</td>
                  <td>{row.Faculty?.designation}</td>
                  <td>{row.Faculty?.department}</td>
                  <td>{row.researchType}</td>
                  <td>{row.researchTitle}</td>
                  <td>{row.publishedYear}</td>
                </tr>
                </>
              );
            })}
          </table> : "Loading"}
        </div>
        <div className="filterBox">
          <div className="filterHead">
            <img className="searchicon" src={SortIcon} />
            Filter
          </div>
          <div className="filterData">
            <div className="filterTypes">
              <div className="filterTypeHead">Departments</div>
              <ul className="filterList">
                <li><input type="checkbox" name="Information technology" onChange={(e) => send(e)} /> Information technology</li>
                <li><input type="checkbox" name="Mechanical engineering" onChange={(e) => send(e)} /> Mechanical engineering</li>
                <li><input type="checkbox" name="Civil engineering" onChange={(e) => send(e)} /> Civil engineering</li>
                <li><input type="checkbox" name="Electrical engineering" onChange={(e) => send(e)} />Electrical engineering</li>
                <li><input type="checkbox" name="Agriculture engineering" onChange={(e) => send(e)} /> Agriculture engineering</li>
                <li><input type="checkbox" name="Computer engineering" onChange={(e) => send(e)} /> Computer engineering</li>
                <li><input type="checkbox" name="Electronics engineering" onChange={(e) => send(e)} /> Electronics engineering</li>
                <li><input type="checkbox" name="Production engineering" onChange={(e) => send(e)} /> Industrial engineering</li>
              </ul>
            </div>
            <div className="filterTypes">
              <div className="filterTypeHead">Designation</div>
              <ul className="filterList">
                <li><input type="checkbox" name="AssociateProfessor" onChange={(e) => send1(e)} />AssociateProfessor</li>
                <li><input type="checkbox" name="Asst.Professor" onChange={(e) => send1(e)} />Asst.Professor</li>
                <li><input type="checkbox" name="Professor" onChange={(e) => send1(e)} />Professor</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
