import React, { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Dollar from "./components/DollarSVG";
import "./App.css";
import PersonSVG from "./components/PersonSVG";
import Label from "./components/Label";
import { useEffect } from "react/cjs/react.development";

function App() {
  const [input, setInput] = useState({
    bill: "",
    numberOfPeople: "",
    buttonInput: "",
  });

  const [amount, setAmount] = useState({
    tip: "",
    total: "",
  });

  const [valueLessThanZer0, setValue] = useState(false);

  const inputChange = (event) => {
    const { name, value } = event.target;

    if (name === "numberOfPeople" && value < 1) {
      setValue(true);
    } else {
      setValue(false);
    }
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };
  let totalTipPerPerson;
  let totalPerPerson;

  function handleClick(event) {
    const { name } = event.target;
    const { bill, numberOfPeople, buttonInput } = input;
    const total = bill / numberOfPeople;
    let totallBill;

    if (name === "buttonInput") {
      totallBill = bill * (buttonInput.toString() / 100);
    } else {
      totallBill = bill * (name / 100);
    }

    totalTipPerPerson = totallBill / numberOfPeople;
    totalPerPerson = totalTipPerPerson + total;

    console.log(totalTipPerPerson, totalPerPerson);
  }

  console.log(totalTipPerPerson);
  // useEffect(() => {
  //   if (input.numberOfPeople.length !== 0) {
  //     setAmount((prev) => {
  //       return {
  //         ...prev,
  //         tip: totalTipPerPerson,
  //         total: totalPerPerson,
  //       };
  //     });
  //   }
  // }, [input.numberOfPeople]);

  function reset() {
    setAmount("");
    setInput(() => {
      return {
        bill: "",
        numberOfPeople: "",
        buttonInput: "",
      };
    });
  }

  return (
    <div className="main-container">
      <Header />
      <section className="tip-calculator-container">
        <div className="calculation-section calculation-section-no-color">
          <div className="small-container">
            <Label className="label" forID="bill" name="Bill" />

            <Input
              className="input-values"
              onChange={inputChange}
              id="bill"
              type="number"
              value={input.bill}
              name="bill"
            />
            <Dollar />
          </div>

          <div className="small-container">
            <Label className="label" name="Select Tip %" />
            <div className="tip-button-container">
              <Input
                type="button"
                className="tip-btn btn"
                onClick={handleClick}
                value="5%"
                name="5"
              />
              <Input
                type="button"
                className="tip-btn btn"
                onClick={handleClick}
                value="10%"
                name="10"
              />
              <Input
                type="button"
                className="tip-btn btn"
                onClick={handleClick}
                name="15"
                value="15%"
              />
              <Input
                type="button"
                className="tip-btn btn"
                onClick={handleClick}
                name="25"
                value="25%"
              />
              <Input
                type="button"
                className="tip-btn btn"
                onClick={handleClick}
                name="30"
                value="30%"
              />
              <Input
                type="number"
                className={" custom-btn input-values btn"}
                onChange={inputChange}
                onClick={handleClick}
                name="buttonInput"
                placeholder="Custom"
                value={input.buttonInput}
              />
            </div>
          </div>

          <div className="small-container">
            <Label
              className={"label"}
              forID={"people"}
              name={"Number of People"}
            />
            <span className="warning">{valueLessThanZer0 && "Can't be 0"}</span>
            <input
              className="input-values"
              id="people"
              onClick={handleClick}
              onChange={inputChange}
              value={input.numberOfPeople}
              type="number"
              name="numberOfPeople"
              min={1}
            ></input>
            <PersonSVG />
          </div>

          {/* <button type="submit" onClick={submitResult}></button> */}
        </div>
        <div className="calculation-section">
          <div className="small-container total-col">
            <p>Tip Amount / person</p>
            <h2>${amount.tip}</h2>
          </div>
          <div className="small-container total-col">
            <p>Total Amount / person</p>
            <h2>${amount.total}</h2>
          </div>
          <button className="reset-btn btn" onClick={reset}>
            RESET
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
