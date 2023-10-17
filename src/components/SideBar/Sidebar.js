import "./sidebar.css";
import TabList from "../TabList/TabList"; 
import Button from "../Button/Button";
export default function Sidebar({currentPage, handleLoginPage}) {
    

  return (
    <div className="sidebar">
        <TabList currentPage={currentPage}/>
        <Button onClick={() => handleLoginPage(true)} backgroundColor="hsl(213, 96%, 18%)" color="white" >Login</Button>
    </div>
  );
}
