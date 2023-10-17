import { useState } from "react";
import "./PersonalInfoForm.css";
import FormHeader from "../FormHeader/FormHeader";
import Button from "../Button/Button";

export default function PersonalInfoForm({
  currentUser,
  currentPage,
  handlePageNavigation,
}) {
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const handleuserinput = (e) => {
    const userInput = e.target.value.trim();

    if (e.target.name === "name") {
      setUserName(userInput);
      return;
    }

    if (e.target.name === "email") {
      setEmail(userInput);
      return;
    }

    if (e.target.name === "phone") {
      setPhoneNumber(userInput);
      return;
    }
  };

  const isValidUserName = () => {
    if (userName === "") {
      setUserNameError("This field is required");
      return false;
    }

    if (/[0-9]/.test(userName)) {
      setUserNameError("username must contains characters only");
      return false;
    }

    if (userName.length < 5) {
      setUserNameError("username must have at least 5 characters");
      return false;
    }

    return true;
  };

  const isValidEmail = () => {
    if (email === "") {
      setUserNameError("");
      setEmailError("This field is required");
      return false;
    }

    if (!email.includes("@") || !email.includes(".com")) {
      setUserNameError("");
      setEmailError("please, enter valid email address");
      return false;
    }

    return true;
  };

  const isValidPhone = () => {
    if (phoneNumber === "") {
      setEmailError("");
      setPhoneNumberError("This field is required");
      return false;
    }

    if (phoneNumber.length < 10 || !/[0-9]/.test(phoneNumber)) {
      setEmailError("");
      setPhoneNumberError("please enter a valid number");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidUserName() || !isValidEmail() || !isValidPhone()) return;

    currentUser.name = userName;
    currentUser.email = email;
    currentUser.phoneNumber = phoneNumber;

    handlePageNavigation(currentPage + 1);

    console.log(currentUser);
  };

  return (
    currentPage === 1 && (
      <div className="personal-info">
        <FormHeader
          title={"Personal Info"}
          description={
            "Please provide your name, email address, and phone number."
          }
        />

        <form className="personl-info__form">
          <div className="name-input-container">
            <div className="label-container">
              <label>Name</label>
              {userNameError && (
                <span className="input-error">{userNameError}</span>
              )}
            </div>

            <input
              type="text"
              name="name"
              placeholder="e.g.Stephen King"
              required
              value={userName}
              onChange={handleuserinput}
            ></input>
          </div>

          <div className="email-input-container">
            <div className="label-container">
              <label>Email Address</label>
              {emailError && <span className="input-error">{emailError}</span>}
            </div>
            <input
              type="email"
              placeholder="e.g.stephenking@lorem.com"
              name="email"
              value={email}
              onChange={handleuserinput}
              required
            ></input>
          </div>

          <div className="phone-input-container">
            <div className="label-container">
              <label>Phone Number</label>
              {phoneNumberError && (
                <span className="input-error">{phoneNumberError}</span>
              )}
            </div>
            <input
              type="tel"
              max={10}
              placeholder="e.g. +1 234 567 690"
              name="phone"
              value={phoneNumber}
              onChange={handleuserinput}
              required
            ></input>
          </div>

          <div className="form__buttons">
            <Button
              backgroundColor="hsl(213, 96%, 18%)"
              color="#fff"
              onClick={handleSubmit}
            >
              Next Step
            </Button>
          </div>
        </form>
      </div>
    )
  );
}
