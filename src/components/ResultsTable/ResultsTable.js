import { useEffect, useState } from "react";
import "./ResultsTable.css";
import Button from "../Button/Button";


export default function ResultsTable({handleLoginPage}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const filledForms = JSON.parse(localStorage.getItem("usersForms"));
    if (filledForms) {
      setData(filledForms);
    }
  }, []);

  const handleDeleteItem = (itemNumber) => {
    setData((data) => data.filter((element, index) => index !== itemNumber));
  };

  const handleClear = () => {
    setData([]);
  }


  return (
    <div className="table-container">
      <table>
        <thead className="table__header">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>subsicription plan</th>
            <th>subsicription type</th>
            <th>pickup services</th>
            <th>Total Price</th>
          </tr>
        </thead>

        <tbody className="table__body">
          {data.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.subsicriptionPlan.type}</td>
              <td>{user.subsicriptionPlan.subsicriptionType}</td>
              <td>
                {user.pickedonList.map((element, index) => (
                  <td>{element.serviceName}</td>
                ))}
              </td>
              <td>{user.totalPrice}$</td>
              <td
                className="delete-cell"
                onClick={() => handleDeleteItem(index)}
              >
                X
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Button onClick={handleClear} backgroundColor="hsl(213, 96%, 18%)" color="#fff">
        Clear
      </Button>
    </div>
  );
}
