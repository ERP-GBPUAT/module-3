import React from 'react'
import HeaderDash from '../Miscellaneous/HeaderDash'
import UserDetails from '../Miscellaneous/UserDetails'
import CardProfile from "../Miscellaneous/CardProfile";
import { useLocation } from 'react-router-dom';
import AddResearchForm from './AddResearchForm';

const MainDashboard = ({btnData,routeTo}) => {
    const location = useLocation()
    const [inputDisabled, setInputDisabled] = React.useState(true);
    const handleChange = () => {
        console.log("hi");
    };
    const handleInputDisabled = (edit) => {
        if (edit) {
            setInputDisabled(false);
        } else {
            setInputDisabled(true);
        }
    }
    return (
        <>
            {/* <HeaderDash btnData={btnData} routeTo={routeTo} inputDisabled={inputDisabled} handleInputDisabled={handleInputDisabled} /> */}
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
                        <CardProfile />
                    </div>
                    <div className="col-xl-8 order-xl-1">
                        <UserDetails inputDisabled={inputDisabled} handleChange={handleChange} handleInputDisabled={handleInputDisabled} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainDashboard