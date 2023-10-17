import "./SelectPlanForm.css";
import { useState } from "react";
import SubsicriptionItem from "../SubsicriptionItem/SubsicriptionItem";
import ToggleButton from "../ToggleButton/ToggleButton";
import Button from "../Button/Button";
import FormHeader from "../FormHeader/FormHeader";
// import logo1 from "../../assets/images/icon-arcade.svg"
const plansSubsicriptions = [
  {
    id: 1,
    logo: "assets/images/icon-arcade.svg",
    type: "Arcade",
    subsicription: 9,
  },

  {
    id: 2,
    logo: "assets/images/icon-advanced.svg",
    type: "Advanced",
    subsicription: 12,
  },
  {
    id: 3,
    logo: "assets/images/icon-pro.svg",
    type: "Pro",
    subsicription: 15,
  },
];
export default function SelectPlanForm({
  currentUser,
  currentPage,
  handlePageNavigation,
  handleBack,
  subsicriptionType,
  setSubsicriptionType
  
}) {
  const [toggleValue, setToggleValue] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleToggle = () => {
    setToggleValue(!toggleValue);
    subsicriptionType === "monthly" ? setSubsicriptionType("yearly") : setSubsicriptionType("monthly");
  };

  const handlePLanSelect = (id) => {
    setSelectedPlan(id);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedPlan) return;

    const selectedPlandata = plansSubsicriptions.find(
      (plan) => plan.id === selectedPlan
    );

    currentUser.subsicriptionPlan = selectedPlandata;
    currentUser.subsicriptionPlan.subsicriptionType = subsicriptionType;

    handlePageNavigation(currentPage + 1);
    console.log(currentUser);
  };

  return (
    currentPage === 2 && (
      <div className="select-plan">

        <FormHeader
          title={"Select your plan"}
          description={"You have the option of monthly or yearly billing"}
        />

        <div className="select-plan__form" onSubmit={handleSubmit}>
          <div className="select-plan__form-options">
            {plansSubsicriptions.map((item, index) => {
              return (
                <SubsicriptionItem
                  item={item}
                  key={index}
                  toggleValue={toggleValue}
                  selectedPlan={selectedPlan}
                  subsicriptionType= {subsicriptionType}
                  handlePLanSelect={handlePLanSelect}
                />
              );
            })}
          </div>

          <ToggleButton toggleValue={toggleValue} handleToggle={handleToggle} />

          <div className="select-plan__form-buttons">
            <Button
              color="hsl(231, 11%, 63%)"
              onClick={handleBack}
              className="back"
            >
              Go Back
            </Button>
            <Button
              onClick={handleSubmit}
              backgroundColor="hsl(213, 96%, 18%)"
              color="#fff"
              className="next"
            >
              Next Step
            </Button>
          </div>
        </div>
      </div>
    )
  );
}
