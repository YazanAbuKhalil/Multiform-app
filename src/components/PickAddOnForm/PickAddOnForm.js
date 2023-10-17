import "./PickAddOnForm.css";
import PickonList from "../PickonList/PickonList";
import Button from "../Button/Button";
import { useState } from "react";
import FormHeader from "../FormHeader/FormHeader";

const pickaddList = [
  {
    serviceName: "Online Service",
    description: "Access to multiplayer games",
    costMonthly: 1,
    costYearly: 10,
  },
  {
    serviceName: "Larger storage",
    description: "Extra 1TB of cloud save",
    costMonthly: 2,
    costYearly: 20,
  },
  {
    serviceName: "Customizable profile",
    description: "Custom theme on your profile",
    costMonthly: 2,
    costYearly: 20,
  },
];

export default function PickAddOnForm({
  currentUser,
  currentPage,
  handlePageNavigation,
  handleBack,
  subsicriptionType,

}) {
  const [picksOptions, setPicksOptions] = useState({
    op1: false,
    op2: false,
    op3: false,
  });

  const handleSelectOptions = (option) => {
    setPicksOptions({ ...picksOptions, [option]: !picksOptions[option] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!picksOptions.op1 && !picksOptions.op2 && !picksOptions.op3) return;

    currentUser.pickedonList = [];
    picksOptions.op1 && currentUser.pickedonList.push(pickaddList[0]);
    picksOptions.op2 && currentUser.pickedonList.push(pickaddList[1]);
    picksOptions.op3 && currentUser.pickedonList.push(pickaddList[2]);


    handlePageNavigation(currentPage + 1)
    console.log(picksOptions);
    console.log(currentUser);
  };


  return (
    currentPage === 3 && (
      <div className="pickadd-on">

        <FormHeader title={"Pick add-ons"}  description={"Add-ons help enhance your gaming experience"} />

        <form className="pickadd-on__form" onSubmit={handleSubmit}>
          <PickonList
            pickaddList={pickaddList}
            picksOptions={picksOptions}
            handleSelectOptions={handleSelectOptions}
            subsicriptionType = {subsicriptionType}
          />
          <div className="pickadd-on__form-buttons">
            <Button type="button" color="hsl(231, 11%, 63%)" onClick={handleBack}>
              Go Back
            </Button>
            <Button
              type="submit"
              backgroundColor="hsl(213, 96%, 18%)"
              color="#fff"
            >
              Next Step
            </Button>
          </div>
        </form>
      </div>
    )
  );
}
