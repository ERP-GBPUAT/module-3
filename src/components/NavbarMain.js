import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import gbpu from "../Images/gbpu.png";
import styles from "./Navbar.module.css";
import person from "../Images/icons8-person-64.png";

const NavbarMain = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openMenu,setOpenMenu] = React.useState(false);
  const handleMenu = ()=>{
    setOpenMenu(!openMenu)
  }
  const handleProfile = () => {
    const user = JSON.parse(localStorage.getItem('data'))
    if(user.faculty){
      navigate(`/facultyDashboard/${user?.faculty?.id}`);
    }
    setOpenMenu(false)
  };
  const handleLogout=()=>{
    localStorage.removeItem("data")
    localStorage.removeItem("token")
    setOpenMenu(false)
  }
  return (
    <>
      
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <img className={styles.navbarImg} src={gbpu} alt="GBPUAT" />
            <Link to={`/`}>
              Govind Ballabh Pant University of Agriculture and Technology
            </Link>
          </div>
          <div className={styles.authBtn}>
            {!localStorage.getItem("token") ? (
              <Link to="/login" className={styles.btn}>
                Login
              </Link>
            ) : (
              <></>
            )}
            {localStorage.getItem("token") ? (
              <div className={styles.profileBox}>
                <div onClick={handleMenu} className={styles.profileIcon}>
                  <img src={person} alt="" />
                </div>
                {openMenu?<div className={styles.toggleMenu}>
                  <div className={styles.menuLogindetail}>Signed in as <b>Udit</b> </div>
                  <div onClick={handleProfile} className={styles.menuOption}>Profile</div>
                  <div className={styles.menuOption} onClick={handleLogout}>Logout</div>
                </div>:<></>}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
    </>
  );
};

export default NavbarMain;
