import React, { Component, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link, useParams } from 'react-router-dom';
import { InsideAppLayout } from './InsideAppLayout';
import { OutsideAppLayout } from './OutsideAppLayout';
import { Signup } from './Signup';



function App() {
  
  return (
    <BrowserRouter>
      <OutsideAppLayout>
        <Signup />
      </OutsideAppLayout>
    </BrowserRouter>
  );
}


export default App;
