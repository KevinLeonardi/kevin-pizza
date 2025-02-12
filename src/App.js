import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Footer from './components/Footer'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'

import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="kevin-pizza">          
            <Route index element={<Home/>}/>
            <Route path="menu" element={<Menu/>}/>
            <Route path="about" element={<About />}/>
            <Route path="contact" element={<Contact />}/>
          </Route>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
