import "./MultiForm.css";
import PersonalInfoForm from "../PersonalInfoForm/PersonalInfoForm";
import { useState } from "react";
import SelectPlanForm from "../SelectPlanForm/SelectPlanForm";
import PickAddOnForm from "../PickAddOnForm/PickAddOnForm";
import Summery from "../Summery/Summery";
import SuccessConfirm from "../SuccessConfirm/SuccessConfirm";

export default function MultiForm({ currentPage, handlePageNavigation, handleBack, handleRestartForm }) {
  const [currentUser, setCurrentUser] = useState({});
  const [users, setUsers] = useState([]);
  const [subsicriptionType, setSubsicriptionType] = useState("monthly");

  const handleAddUser = () => {
    if (users.length === 0) setUsers(users.push(currentUser))
    else  setUsers(users => [...users, currentUser]);

  }


  return (
    <div className="form-container">
      <PersonalInfoForm
        currentUser={currentUser}
        currentPage={currentPage}
        handlePageNavigation={handlePageNavigation}
      />

      <SelectPlanForm
        currentUser={currentUser}
        currentPage={currentPage}
        handlePageNavigation={handlePageNavigation}
        handleBack = {handleBack}
        subsicriptionType = {subsicriptionType}
        setSubsicriptionType = {setSubsicriptionType}
      />

      <PickAddOnForm
        currentUser={currentUser}
        currentPage={currentPage}
        handlePageNavigation={handlePageNavigation}
        handleBack = {handleBack}
        subsicriptionType = {subsicriptionType}
        setSubsicriptionType = {setSubsicriptionType}
      />

      <Summery
        currentUser={currentUser}
        currentPage={currentPage}
        handlePageNavigation={handlePageNavigation}
        handleBack = {handleBack}
        users = {users}
        handleAddUser = {handleAddUser}
        handleRestartForm={handleRestartForm}
      />

      <SuccessConfirm  currentPage={currentPage}/>
    </div>
  );
}
