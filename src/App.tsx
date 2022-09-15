import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Chart } from "react-windrose-chart";
import Windrose from './components/Windrose/Windrose';

function App() {


 return (
    <>
      <header><h1>Windrose assignment ZakKa 🌬</h1></header>
      <Windrose />
    </>
  );

}

export default App
