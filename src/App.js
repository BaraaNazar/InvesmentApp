import React, { useState } from 'react';
import InvestmentForm from './Components/InvestmentForm/InvestmentForm';
import InvestmentHeader from './Components/InvestmentHeader/InvestmentHeader';
import InvestmentResults from './Components/InvestmentResults/InvestmentResults';

function App() {
  const [userInput, setUserInput] = useState({
    'current-savings': 0,
    'yearly-contribution': 0,
    'expected-return': 0,
    duration: 0,
  });
  const handleChanges = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };
  const handleReset = () => {
    console.log('reset');
    setUserInput({}); // reset the state
  };

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    console.log('hi from app.js');

    // do something with yearlyData ...
  };

  return (
    <div>
      <InvestmentHeader />

      <InvestmentForm
        calculateHandler={calculateHandler}
        handleReset={handleReset}
      />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <InvestmentResults />
    </div>
  );
}

export default App;
