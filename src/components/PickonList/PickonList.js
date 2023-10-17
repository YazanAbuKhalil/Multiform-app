import PickonItem from "../PickonItem/PickonItem";
import "./PickonList.css";

export default function PickonList({ pickaddList, picksOptions, handleSelectOptions, subsicriptionType }) {
  return (
    <div className="pickadd-list-container">
      {pickaddList.map((item, index) => {
        return (
          <PickonItem
            item={item}
            num={index + 1}
            key={index + 1}
            picksOptions={picksOptions}
            handleSelectOptions={handleSelectOptions}
            subsicriptionType={subsicriptionType}
          />
        );
      })}
    </div>
  );
}
