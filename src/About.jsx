import React from 'react';
import about from "../src/images/about.jpg";
const About = () =>{
    return(
        <>
        <div className = "container-fluid">
        <div className = "con">
        <div className = "abimg">
            <img src = {about}  alt = "abouts"></img>
            </div>
            <div className = "jumbotron">
            <div className = "abheader">
                <h2> Who We are</h2>
                <p>
                Founded in 2018, <strong>Sunny Dry Fruits</strong> began in a small facility of just
                10,000 square feet. As customers became aware of our quality 
                products, commitment to excellence, and dedication to offering a
                 variety of services, we quickly grew to become one of the largest 
                 nut processors in North America. We are now a leading, full service
                 orter of nuts, seeds, dried fruit, and other ingredients.
                Today, we have well over ten times our original space across three
                 facilities, allowing us to offer custom roasting, bulk wholesale,
                  ingredient sourcing, and more. Over the last few years, we have 
                  expanded our operations by offering in-house packaging, becoming
                   a one stop solution for current and future customers.</p>
            </div>
            </div>
            </div>
        </div>
        </>
    );
};
export default About;