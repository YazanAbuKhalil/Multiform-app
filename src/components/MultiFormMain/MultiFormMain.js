import Sidebar from "../SideBar/Sidebar.js";
import MultiForm from "../MultiForm/MultiForm.js";
import "./MultiFormMain.css";
import { useState } from "react";
import Login from "../Login/Login.js";

export default function MultiFormMain({ handleRestartForm }) {
  const [currentPage, setCurrrentPage] = useState(1);
  const [isLoginClicked, setIsLoginClicked] = useState(false);

  const handlePageNavigation = (pageNumber) => {
    setCurrrentPage(pageNumber);
  };

  const handleBack = () => {
    setCurrrentPage(currentPage - 1);
  };

  const handleLoginPage = (isLogin) => {
    setIsLoginClicked(isLogin);
  };

  return (
    isLoginClicked ? (
      <Login handleLoginPage={handleLoginPage}/>
    ) : (
      <div className="main-container">
        <Sidebar currentPage={currentPage} handleLoginPage={handleLoginPage} />

        <MultiForm
          currentPage={currentPage}
          handlePageNavigation={handlePageNavigation}
          handleBack={handleBack}
          handleRestartForm={handleRestartForm}
        />
      </div>
    )
  );
}
