import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import NavBar from './components/NavBar/NavBar';
import Slides from './pages/Slides';
import OrderForm from './components/OrderForm/OrderForm';

function App() {


  return (
    <div className="App">

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/slides" element={<Slides />} />

          <Route path="/order" element={<OrderForm />} />

        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
