import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBarComponent from './Components/NavigationBarComponent/NavigationBarComponent';
import { Routes } from './Routes';

function App() {
  return (
    <div className="App">
        <NavigationBarComponent />
        <Routes />

    </div>
  );
}

export default App;
