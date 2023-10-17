import "./ServiceSummery.css";

export default function ServiceSummery({
  service,
  monthlyCost,
  yearlyCost,
  subsicriptionType,
}) {
  return (
    <div className="service">
      <p className="service__name">{service}</p>
      <p className="service__cost">
        {subsicriptionType === "monthly"
          ? `+$${monthlyCost}/mo`
          : `+$${yearlyCost}/yr`}
      </p>
    </div>
  );
}
