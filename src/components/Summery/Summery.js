import FormHeader from "../FormHeader/FormHeader";
import "./Summery.css";
import ServiceSummery from "../ServiceSummery/ServiceSummery";
import Button from "../Button/Button";


export default function Summery({
  currentUser,
  currentPage,
  handlePageNavigation,
  handleBack,
  users,
  handleAddUser,
  handleRestartForm
}) {
  const subsicriptionBundle = currentUser.subsicriptionPlan?.type;
  const subsicriptionType = currentUser.subsicriptionPlan?.subsicriptionType;
  const subsicriptionFees = currentUser.subsicriptionPlan?.subsicription;

  const picksOnServices = currentUser.pickedonList;

  const totalPrice = () => {
    const total =
      subsicriptionType === "monthly"
        ? subsicriptionFees +
          picksOnServices.reduce((acc, service) => acc + service.costMonthly, 0)
        : subsicriptionFees * 10 +
          picksOnServices.reduce((acc, service) => acc + service.costYearly, 0);
    return total;
  };

  

  const handleSubmit = () => {
    currentUser.totalPrice = totalPrice();
    
    handleAddUser();
    
    const usersForms = JSON.parse(localStorage.getItem("usersForms")) || [];
    usersForms.push(currentUser);
    console.log(users);
    localStorage.setItem("usersForms",JSON.stringify (usersForms));

    handlePageNavigation(5);
    handleRestartForm();
  
  }
  return (
    currentPage === 4 && (
      <div>
        <div className="summery">
          <FormHeader
            title={"Finishing up"}
            description={"Double check everything looks OK before confirming."}
          />

          <div className="summery__container">
            <div className="summery__container-subsicription">
              <p className="summery__container-subsicription-type">
                {subsicriptionBundle + ` (${subsicriptionType})`}
              </p>
              <p className="summery__container-subsicription-cost">{`$${
                subsicriptionType === "monthly"
                  ? subsicriptionFees + "/mo"
                  : subsicriptionFees * 10 + "/yr"
              }`}</p>
            </div>

            <div className="summery__container-services">
              {picksOnServices.map((service, index) => {
                return (
                  <ServiceSummery
                    service={service.serviceName}
                    monthlyCost={service.costMonthly}
                    yearlyCost={service.costYearly}
                    subsicriptionType={subsicriptionType}
                    key={index}
                  />
                );
              })}
            </div>

            <div className="summery__container-total">
              <p className="lbl-total">
                Total{" "}
                {`(per ${subsicriptionType === "monthly" ? "month" : "year"})`}
              </p>
              <p className="total-price">
                +${totalPrice()}{" "}
                {subsicriptionType === "monthly" ? "/mo" : "/yr"}
              </p>
            </div>

            <div className="summery__container-buttons">
              <Button
                color="hsl(231, 11%, 63%)"
                onClick={handleBack}
              >
                Go Back
              </Button>
              <Button
              onClick = {handleSubmit}
                backgroundColor="hsl(243, 100%, 62%)"
                color="#fff"
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
