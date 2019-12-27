/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import RoundButton from './Components/Buttons/RoundButton/RoundButton';
import './App.css';
import CButton from './Components/Buttons/CButton/CButton';

function App() {
  return (
    <>
      <RoundButton className="a-button" text="A" />
      <RoundButton className="b-button" text="B" />
      <div className="flex vertical">
        <CButton buttonClassName="c-button" arrowClassName="up" />
        <div className="flex horizontal">
          <CButton buttonClassName="c-button" arrowClassName="left" />
          <CButton buttonClassName="c-button" arrowClassName="right" />
        </div>
        <CButton buttonClassName="c-button" arrowClassName="down" />
      </div>

    </>
  );
}

export default App;
