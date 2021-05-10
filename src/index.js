import React from 'react';
import ReactDom from 'react-dom';
import *as qee from './App';
ReactDom.render(
  <>
    <ul>
      <li>{qee.default}</li>
      <li>{qee.lname}</li>
      <li>{qee.showData(1)}</li>
      
    </ul>
  </>,
  document.getElementById('root')
);