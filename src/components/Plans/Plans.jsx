import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <section className="plans-container">
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">Ready to start</span>
        <span>Your Journey</span>
        <span className="stroke-text">Now With us</span>
      </div>

      {/* PLANS CARDS */}
      <>
        <div className="plans">
              {
                plansData.map((plan, index) => (
                    <div className="plan" key={index} >
                        {plan.icon}
                        <span >{plan.name}</span>
                        <span>{plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature, index) => (
                                <div className="feature" key={index}>
                                    <img src={whiteTick} alt="tick" />
                                    <span >{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div>
                            <span>See more Benefits</span>
                        </div>
                        <button className="btn">Join Now</button>
                    </div>
                ))
              }
        </div>
      </>
    </section>
  );
};

export default Plans;
