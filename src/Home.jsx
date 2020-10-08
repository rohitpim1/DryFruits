import React from 'react';
import { NavLink } from 'react-router-dom';
import about from "../src/images/about.jpg";
import bg1 from "../src/images/background.jpg";
import kismis from "../src/images/kismis.jpg";
import kaju from "../src/images/kaju.jpg";
import almond from "../src/images/kaju1.jpg";
import Anjeer from "../src/images/Anjeer.jpg";
import dates from "../src/images/dates.jpg";
import pista from "../src/images/pista.jpg";
import pre from "../src/images/premium.jpg";
import thumb from "../src/images/thumb.png";
import best from "../src/images/best.png";

const Home = () =>{
    return(
        <>
       <div className = "container-fluid"> 
        <div className = "images">
        <img src = {about} alt = "img" id = "im"></img>  
          </div>
         <div className = "main">
         <div className = "head">
           <h2>Best Wholseler and Retailer of nuts , get a best deal from us..
               
           </h2>
         </div>
          <div className="card">
  <NavLink to = "./Product" ><img src={pista} className="card-img-top" alt="pista"></img></NavLink>
  

</div>
     <div className="card">
  <NavLink to = "./Product"><img src={kaju} className="card-img-top" alt="kaju"></img></NavLink>
  
</div>
     <div className="card">
     <NavLink to = "./Product"> <img src={almond} className="card-img-top" alt="almond"></img></NavLink>
  
  </div>
  <div className="card">
  <NavLink to = "./Product"> <img src= {kismis} className="card-img-top" alt="kismis"></img></NavLink>
  
  </div>
  <div className="card">
  <NavLink to = "./Product"><img src={Anjeer} className="card-img-top" alt="..."></img></NavLink>
  
  </div>
  <div className="card">
  <NavLink to = "./Product"><img src={dates} className="card-img-top" alt="..."></img></NavLink>

</div>
       </div>
       <div className = "jumbotron">
         <p>
         <strong>The Frugality of Purchasing Bulk Nuts</strong>
Due to their extensive benefits, you’ll likely want to incorporate nuts into your
 family’s daily diet. The most frugal way to stock your pantry with a diverse selection 
 of nuts is to purchase bulk nuts. Buying nuts by the case enables you to stock your
  pantry in a more cost-efficient way than buying individual bags of nuts. Generally,
   all types of nuts offer multiple health benefits. If you’re looking for a type of 
   nut that benefits specific health concerns, it’s best to check the nutritional 
   information on each type of nut to see which is the most compatible with your specific 
   needs. Nuts support heart health and digestive health. They’re also a good source of 
   vitamins, nutrients and antioxidants. Many varieties of nuts can be included in a
    weight loss or low carb diet. Having a pantry well-stocked with various types of
 nuts purchased at a bulk rate discount can be good for your health and your budget.


         </p>
         
       </div>
       <div className = "main2">
       <div className="card1">
       
  <img src={pre} className="card-img-top" alt="pre"></img>

 <p><h3> premium whole seller</h3></p>
  </div>
  <div className="card1">
  
  <img src={thumb} className="card-img-top" alt="thumb"></img>

  <p><h3> Best Quality</h3></p>
  </div>
  <div className = "card1">
  
  <img src={best} className="card-img-top" alt="best"></img>
 
  <p><h3> Best Quality</h3></p>
  </div>
       </div>
       </div>
        </>
    );
};
export default Home;