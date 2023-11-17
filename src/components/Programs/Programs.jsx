import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RigthArrow from "../../assets/rightArrow.png";


const Programs = () => {
  return (
    <section className="Programs" id="programs">
      {/* header */}
      <div className="programs-header">
        <span className="stroke-text">Explore Our</span>
        <span>Programs</span>
        <span>to shape you</span>
      </div>

      <div className="program-categories">
        {programsData.map((program, index) => (
          <div className="category" key={index}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
                <span>Join Now</span><img src={RigthArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
