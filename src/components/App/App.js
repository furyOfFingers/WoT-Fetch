import React from "react";
import Table from '../Table/Table'
import Button from '../Button/Button'
import './style.css';

const App = () => {

  const tabHead = ['number','vehicleIcon', 'nickName', 'victory %', 'rang', 'damage'];
  const tContent = {
      data: {
        playerOne: {
          a: 14,
          b: 14,
          c: 0
        },
        playerTwo: {
          a: 13,
          b: 9,
          c: 0
        }
      }
  };

  return (
    <div className='app-container'>
    <p>Hello React!</p> 
      <Table tContent={tContent} tHeader={tabHead}/>
      {/* <Button text='fff'/> */}
    </div>
  );
};

export default App;