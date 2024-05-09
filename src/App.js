

import {Container, Nav, Navbar} from 'react-bootstrap';
// import './App.css';
import { useState } from 'react'
import NavBar from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Routers from './components/Routers';

function App() {

  return (
      <div className="App">
        <NavBar/>
        <Routers/>
        <Footer/>
      </div>
  );
}

export default App;
