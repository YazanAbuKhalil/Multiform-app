import "./App.css";
import MultiForm from "../MultiForm/MultiForm";
import MultiFormMain from "../MultiFormMain/MultiFormMain";
import { useState } from "react";
import ResultsTable from "../ResultsTable/ResultsTable";

export default function App() {
  const usersForms = JSON.parse(localStorage.getItem("usersForms"));
  console.log(usersForms);
  if (!usersForms) localStorage.setItem("usersForms", JSON.stringify([]));

  const [isFinish, setIsFinish] = useState(false);

  const handleRestartForm = () => {
    setTimeout(() => {
      setIsFinish(!isFinish);
    }, 5000);
  };

  return (
    // <ResultsTable />
    <div className="app">
      {isFinish ? (
        <MultiFormMain key={0} handleRestartForm={handleRestartForm} />
      ) : (
        <MultiFormMain key={1} handleRestartForm={handleRestartForm} />
      )}
    </div>
  );
}
