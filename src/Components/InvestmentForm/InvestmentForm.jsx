import React, { useState } from 'react';

const initialUserInput = {
  'current-savings': 500,
  'yearly-contribution': 6000,
  'expected-return': 10,
  duration: 5,
};
function InvestmentForm({ onClaculate }) {
  const [userInput, setUserInput] = useState(initialUserInput);
  const inputChangeHandler = (input, value) => {
    setUserInput((prevState) => {
      return { ...prevState, [input]: +value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onClaculate(userInput);
  };
  const handleReset = () => {
    console.log('reset');
    setUserInput(initialUserInput); // reset the state
  };
  return (
    <div>
      <form className='form' onSubmit={submitHandler}>
        <div className='input-group'>
          <p>
            <label htmlFor='current-savings'>Current Savings ($)</label>
            <input
              value={userInput['current-savings']}
              type='number'
              id='current-savings'
              onChange={(event) => {
                inputChangeHandler('current-savings', event.target.value);
              }}
            />
          </p>
          <p>
            <label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
            <input
              value={userInput['yearly-contribution']}
              type='number'
              id='yearly-contribution'
              onChange={(event) => {
                inputChangeHandler('yearly-contribution', event.target.value);
              }}
            />
          </p>
        </div>
        <div className='input-group'>
          <p>
            <label htmlFor='expected-return'>
              Expected Interest (%, per year)
            </label>
            <input
              value={userInput['expected-return']}
              type='number'
              id='expected-return'
              onChange={(event) => {
                inputChangeHandler('expected-return', event.target.value);
              }}
            />
          </p>
          <p>
            <label htmlFor='duration'>Investment Duration (years)</label>
            <input
              value={userInput['duration']}
              type='number'
              id='duration'
              onChange={(event) => {
                inputChangeHandler('duration', event.target.value);
              }}
            />
          </p>
        </div>
        <p className='actions'>
          <button type='reset' className='buttonAlt' onClick={handleReset}>
            Reset
          </button>
          <button type='submit' className='button'>
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
}

export default InvestmentForm;
