import React from "react";
import "./Testimonials.css";
import {testimonialsData} from '../../data/testimonialsData';
import { useState } from "react";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  
    return (
    <section className="Testimonials">
      {/* LEFT SIDE */}
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>Say about us</span>
        <span>
            {testimonialsData[selected].review}
        </span>
        <span>
            <span style={{color:"orange"}}>
                {testimonialsData[selected].name}
            </span>{" "}
            - {testimonialsData[selected].status}
        </span>
      </div>

      {/* RIGHT SIDE */}
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="" />

        <div className="arrows">
            <img 
            onClick={()=>{
                selected===0?setSelected(tLength-1):setSelected((prev)=> prev-1);
            }}
            
            src={leftArrow} alt="" />
            <img
            onClick={()=>{
                selected===tLength-1?setSelected(0):setSelected((prev)=> prev+1);
            }}
            
            src={rightArrow} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
