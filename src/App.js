import React from 'react';
import './App.css';
import { BrowserRouter, Switch} from 'react-router-dom';
import { InsideAppLayout } from './InsideAppLayout';
import { OutsideAppLayout } from './OutsideAppLayout';
import { Signup } from './Signup';
import { AppRoute } from './AppRoute';
import { Login } from './Login';

function Dashboard() {
  return <h1>Dashboard</h1>
}

function App() {
  
  return (
    <BrowserRouter>
      <Switch>
        <AppRoute path="/login" component={Login} layout={OutsideAppLayout} />
        <AppRoute path="/signup" component={Signup} layout={OutsideAppLayout} />
        <AppRoute path="/" component={Dashboard} layout={InsideAppLayout} />
      </Switch>
    </BrowserRouter>
  );
}


export default App;
