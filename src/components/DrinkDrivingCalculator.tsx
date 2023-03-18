import React, { useState } from "react";
import calculatorStyles from "./DrinkDrivingCalculator.module.scss";

interface DrinkOption {
  name: string;
  alcoholUnits: number;
}

const drinkOptions: DrinkOption[] = [
  { name: "Butter Beer", alcoholUnits: 2 },
  { name: "Firewhiskey", alcoholUnits: 5 },
  { name: "Gillywater", alcoholUnits: 0 },
  { name: "Pumpkin Juice", alcoholUnits: 0 },
  { name: "Red Currant Rum", alcoholUnits: 3 },
  { name: "Tongue-Tying Tea", alcoholUnits: 1 },
];

const DrinkDrivingCalculator: React.FC = () => {
  const [selectedDrink, setSelectedDrink] = useState<DrinkOption>(
    drinkOptions[0]
  );
  const [numDrinks, setNumDrinks] = useState<number>(0);
  const [bloodAlcoholLevel, setBloodAlcoholLevel] = useState<number>(0);

  const handleDrinkChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = parseInt(e.target.value);
    const selectedDrink = drinkOptions[index];
    setSelectedDrink(selectedDrink);
    const bloodAlcoholLevel = calculateBloodAlcoholLevel(
      numDrinks,
      selectedDrink.alcoholUnits
    );
    setBloodAlcoholLevel(bloodAlcoholLevel);
  };

  const handleNumDrinksChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setNumDrinks(value);
    const bloodAlcoholLevel = calculateBloodAlcoholLevel(
      value,
      selectedDrink.alcoholUnits
    );
    setBloodAlcoholLevel(bloodAlcoholLevel);
  };

  const calculateBloodAlcoholLevel = (
    numDrinks: number,
    alcoholUnits: number
  ) => {
    const totalAlcoholUnits = numDrinks * alcoholUnits;
    const weight = 70; // kg
    const ratio = 0.7; // male
    const alcoholGrams = totalAlcoholUnits * 8;
    const bodyWater = weight * ratio;
    const bloodAlcoholLevel = alcoholGrams / (bodyWater * 10);
    return bloodAlcoholLevel;
  };

  const getOffenceDescription = (bloodAlcoholLevel: number) => {
    if (bloodAlcoholLevel >= 0.2) {
      return "You are over the legal limit and could face up to 12 months in Azkaban, a 1000 Galleon fine, and a 24-month suspension of your broomstick license.";
    } else if (bloodAlcoholLevel >= 0.08) {
      return "You are over the legal limit and could face up to 6 months in Azkaban, a 500 Galleon fine, and a 12-month suspension of your broomstick license.";
    } else if (bloodAlcoholLevel >= 0.05) {
      return "You are over the legal limit and could face up to 3 months in Azkaban, a 250 Galleon fine, and a 6-month suspension of your broomstick license.";
    } else if (bloodAlcoholLevel == 0) {
      return "you are haven't had any alcohol and are not facing any offence.";
    } else {
      return "You are under the legal limit and not facing any offence, but be mindful of your drinking and never drink and fly.";
    }
  };

  return (
    <div className={calculatorStyles.container}>
      <h2>Hogwarts Drink & Fly Calculator</h2>
      <p>
        Welcome to the wizarding world's Drink Driving Calculator! Use this
        magical tool to estimate your blood alcohol level based on the number of
        drinks you&apos;ve had, and uncover the potential consequences of flying
        while under the influence. Whether you've downed a few Butterbeers,
        indulged in some Firewhiskey, or sipped on some Pumpkin Juice, this
        calculator will help you stay safe and avoid the wrath of the Ministry
        of Magic.
      </p>
      <div className={calculatorStyles.inputWrapper}>
        <label htmlFor="drinkSelect">Select a drink:</label>
        <select
          id="drinkSelect"
          value={drinkOptions.indexOf(selectedDrink).toString()}
          onChange={handleDrinkChange}
        >
          {drinkOptions.map((drink, index) => (
            <option key={index} value={index.toString()}>
              {drink.name}
            </option>
          ))}
        </select>
      </div>
      <div className={calculatorStyles.inputWrapper}>
        <label htmlFor="numDrinks">How many drinks have you had?</label>
        <input
          type="number"
          id="numDrinks"
          value={numDrinks}
          onChange={handleNumDrinksChange}
        />
      </div>
      {numDrinks > 0 && (
        <div className={calculatorStyles.resultWrapper}>
          <p>
            Your estimated blood alcohol level is {bloodAlcoholLevel.toFixed(2)}
            %.
          </p>
          <p>{getOffenceDescription(bloodAlcoholLevel)}</p>
        </div>
      )}
    </div>
  );
};

export default DrinkDrivingCalculator;
