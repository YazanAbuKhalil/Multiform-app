import { useState } from "react";
import "./SubsicriptionItem.css";

export default function SubsicriptionItem({
  item,
  toggleValue,
  selectedPlan,
  handlePLanSelect,
  subsicriptionType,
}) {
  const isSelectedPlan = selectedPlan === item.id;

  return (
    <div
      className={`subsicription-item ${isSelectedPlan && "active-plan"}`}
      onClick={() => handlePLanSelect(item.id)}
    >
      <div className={`subsicription-item__label`} htmlFor={item.id}>
        <img src={item.logo} alt="suvsicription logo"></img>
        <div>
          <p className="subsicription-item__label-type">{item.type}</p>
          <p className="subsicription-item__label-cost">
            {toggleValue
              ? "$" + item.subsicription * 10 + "/yr"
              : "$" + item.subsicription + "/mo"}
          </p>
          {toggleValue && (
          <span className="subsicription-item__label-freemonths">
            2 months free
          </span>
        )}
        </div>


      </div>

    </div>
  );
}
