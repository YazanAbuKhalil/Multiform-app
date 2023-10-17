import "./PickonItem.css";

export default function PickonItem({
  item,
  num,
  picksOptions,
  handleSelectOptions,
  subsicriptionType,
}) {
  return (
    <div className="pick-on-item">
      <div className="pick-on-item__details">
        <input
          type="checkBox"
          id={num}
          checked={picksOptions[`op${num}`]}
          onChange={() => handleSelectOptions(`op${num}`)}
        ></input>
        <label htmlFor={num}>
          <p className="pick-on-item__details-service">{item.serviceName}</p>
          <p className="pick-on-item__details-description">
            {item.description}
          </p>
        </label>
      </div>

      <p className="pick-on-item__cost">
        {subsicriptionType === "monthly"
          ? `+$${item.costMonthly}/mo`
          : `+$${item.costYearly}/yr`}
      </p>
    </div>
  );
}
