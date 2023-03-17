import React, { useState } from "react";
import calculatorStyles from "./ConveyancingCalculator.module.scss";

interface Fee {
  name: string;
  description: string;
  amount: number;
}

const conveyancingFees: Fee[] = [
  {
    name: "Appraisal Charm",
    description: "Estimating the value of the property",
    amount: 120,
  },
  {
    name: "Transfiguration Fee",
    description: "Changing the legal ownership of the property",
    amount: 250,
  },
  {
    name: "Ward Enchantment",
    description: "Protecting the property from magical intrusions",
    amount: 200,
  },
  {
    name: "Lumos Spell",
    description: "Lighting up the property during night visits",
    amount: 80,
  },
  {
    name: "Protego Charm",
    description: "Protecting the property from unforeseen dangers",
    amount: 150,
  },
];

const ConveyancingCalculator: React.FC = () => {
  const [propertyValue, setPropertyValue] = useState<number>(0);
  const [stampDuty, setStampDuty] = useState<number>(0);
  const [totalFees, setTotalFees] = useState<number>(0);

  const handlePropertyValueChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(e.target.value);
    setPropertyValue(value);
    const stampDuty = calculateStampDuty(value);
    setStampDuty(stampDuty);
    const totalFees = calculateTotalFees(value, stampDuty);
    setTotalFees(totalFees);
  };

  const calculateStampDuty = (propertyValue: number) => {
    if (propertyValue < 125000) {
      return 0;
    } else if (propertyValue < 250000) {
      return (propertyValue - 125000) * 0.02;
    } else if (propertyValue < 925000) {
      return (propertyValue - 250000) * 0.05 + 2500;
    } else if (propertyValue < 1500000) {
      return (propertyValue - 925000) * 0.1 + 36250;
    } else {
      return (propertyValue - 1500000) * 0.12 + 93750;
    }
  };

  const calculateTotalFees = (propertyValue: number, stampDuty: number) => {
    const feesTotal = conveyancingFees.reduce(
      (total, fee) => total + fee.amount,
      0
    );
    return feesTotal + stampDuty;
  };

  return (
    <div className={calculatorStyles.container}>
      <h2>Conveyancing Calculator</h2>
      <p>
        Use this calculator to estimate the conveyancing fees and stamp duty you
        will have to pay when buying a new property in the wizarding world.
      </p>
      <div className={calculatorStyles.inputWrapper}>
        <label htmlFor="propertyValue">Property Value (in Galleons)</label>
        <input
          type="number"
          id="propertyValue"
          value={propertyValue}
          onChange={handlePropertyValueChange}
        />
      </div>
      <div className={calculatorStyles.resultWrapper}>
        <p>Stamp Duty: {stampDuty.toFixed(2)} Galleons</p>
        <p>Conveyancing Fees Breakdown:</p>
        {conveyancingFees.map((fee) => (
          <div className={calculatorStyles.fee} key={fee.name}>
            <span className={calculatorStyles.feeName}>{fee.name}</span>
            <span className={calculatorStyles.feeAmount}>
              {fee.amount.toFixed(2)} Galleons
            </span>
            <span className={calculatorStyles.feeDescription}>
              {fee.description}
            </span>
          </div>
        ))}
        <div className={calculatorStyles.fee}>
          <span className={calculatorStyles.feeName}>Stamp Duty</span>
          <span className={calculatorStyles.feeAmount}>
            {stampDuty.toFixed(2)} Galleons
          </span>
          <span className={calculatorStyles.feeDescription}>
            A tax paid to the Ministry of Magic when buying a property
          </span>
        </div>
      </div>
      <div className={calculatorStyles.totalWrapper}>
        <span className={calculatorStyles.totalLabel}>Total:</span>
        <span className={calculatorStyles.totalAmount}>
          {totalFees.toFixed(2)} Galleons
        </span>
      </div>
    </div>
  );
};

export default ConveyancingCalculator;
