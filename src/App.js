import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Product from './Product';
import Contact from './Contact';

import {Switch,Route, Redirect} from "react-router-dom";
import './App.css';


function App() {
  return (
    <>
  
    <Navbar />
    
        <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Product" component={Product} />
    <Route exact path="/About" component={About} />
    <Route exact path="/Contact" component={Contact} />
  
  <Redirect to="/" />
    
    </Switch>
    <Footer />
  </>
  );
};

export default App;
