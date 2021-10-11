import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Input from "./components/Input";
import Dollar from "./components/DollarSVG";
import "./App.css";
import PersonSVG from "./components/PersonSVG";
import Label from "./components/Label";
import Button from "./components/Button";

function App() {
  const [input, setInput] = useState({
    bill: "",
    numberOfPeople: "",
    buttonInput: "",
  });

  const [btnValue, setBtnValue] = useState("");
  const [amount, setAmount] = useState({
    tip: "",
    total: "",
  });

  const [valueLessThanZer0, setValue] = useState(false);
  const [tipBtnClick, setTipBtnClick] = useState(false);

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

  const update = (value) => {
    setBtnValue(value);
  };

  useEffect(() => {
    if (input.numberOfPeople.length !== 0) {
      let totalTipPerPerson;
      let totalPerPerson;
      const { bill, numberOfPeople, buttonInput } = input;
      let billPerPerson = bill / numberOfPeople;
      let totalTip;

      tipBtnClick === true
        ? (totalTip = bill * (btnValue / 100))
        : (totalTip = bill * (buttonInput / 100));

      totalTipPerPerson = totalTip / numberOfPeople;
      totalPerPerson = totalTipPerPerson + billPerPerson;

      setAmount((prev) => {
        return {
          ...prev,
          tip: totalTipPerPerson,
          total: totalPerPerson,
        };
      });
    }
  }, [input, btnValue, tipBtnClick]);

  const updateBtn = () => {
    setTipBtnClick((prev) => {
      return !prev;
    });
  };

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
            <div className="tip-button-container" onClick={updateBtn}>
              <Button click={update} />

              <Input
                type="number"
                className={" custom-btn input-values btn"}
                onChange={inputChange}
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
              onChange={inputChange}
              value={input.numberOfPeople}
              type="number"
              name="numberOfPeople"
              min={1}
            ></input>
            <PersonSVG />
          </div>
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
