import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import VolunteerDashboard from './pages/VolunteerDashboard'
import Login from './pages/Login';
import Signup from './pages/Signup';
import CoordinatorDashboard from './pages/CoordinatorDashboard';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/volunteer-dashboard" element={<VolunteerDashboard />} />
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/coordinatordashboard' element={<CoordinatorDashboard/>}></Route>
      </Routes>
    </Router>
  )
}
