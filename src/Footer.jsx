import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () =>{

    return(
        <>
        <footer>
<div className = "jumbotron">
<div className = "ul">
    <ul>
    <li className="nav-item">
        <NavLink className="nav-link" to="/Product">Product Catlog</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/About">Who We Are</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Contact">Get in touch</NavLink>
      </li>
    </ul>
</div>



<div className="footer-copyright text-center py-3">Developed by : Rohit pimpalkar© 2020 Copyright Reserved.
</div>

</div>


</footer>

</>

);
};

export default Footer;