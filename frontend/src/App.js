import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from './Authcontext';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Jobs from './pages/Jobs';


function App(){
  return(
    
      <Router>
        <AuthProvider>
          <Routes>
            <Route  path = "/" element={<Welcome />}/>
            <Route path = "/login" element = {<Login />} />
            <Route path = "/register" element = {<Register />} />
            <Route path = "/home" element = {<Home />} />
            <Route path = "/create/job" element = {<Jobs />} />
          </Routes>
        </AuthProvider>
      </Router>
    

  )
}

export default App;