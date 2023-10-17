import "./TabList.css";
import Tab from "../Tab/Tab.js";

const tabsTitles = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];
export default function TabList({ currentPage }) {
  return (
    <ul className="tab-list">
      {tabsTitles.map((title, index) => {
        return (
          <Tab
            title={title}
            num={index + 1}
            key={index}
            currentPage={currentPage}
          />
        );
      })}
    </ul>
  );
}
