import React from 'react';
import { NavLink} from "react-router-dom";
const Navbar = () => {
    return(
        <>
        <div className="container-fluid nav_bg">
<div className='row'>
<div className="col-10 mx-auto">


        <nav className="navbar top navbar-expand-lg navbar-light bg-light">
 <div className="container-fluid">
  <NavLink className="navbar-brand" to="/">Sunny DryFruits</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className=" menu_active collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="">Home <span class="sr-only">(current)</span></NavLink>
      </li>
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
</div>
</nav>
</div>

</div>

        </div>
        </>
    );
};

export default Navbar;