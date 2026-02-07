import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { ButtonCommon } from "../Button/Button";

const chooseUsData = {
  bgText: "Feature",
  title: "why Choose Us",
  desp: "Because your car deserves expert care and lasting shine.",
  img: "https://autolabdxb.com/gallery/1%20(39).jpeg",
  list: [
    { title: "Premium Quality Service" },
    { title: "Advanced Detailing Technology" },
    { title: "Skilled Professional Team" },
    { title: "Customer Satisfaction Guaranteed" },
  ],
};

const ChooseUs = () => {
  const { bgText, title, desp, list, img } = chooseUsData;

  return (
    <section className="container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="choose-us-container-extents">
        <div className="choose-us-contain">
          <div className="choose-us-info" data-aos="fade-up">
            <SectionHeading bgText={bgText} title={title} desp={desp} />
            <div className="ak-height-60 ak-height-lg-30"></div>
            <div className="stroke-heading-text">
              {list.map((item) => (
                <h3
                  key={item.title}
                  className="ak-stroke-text hover-color-changes"
                >
                  {item.title}
                </h3>
              ))}
            </div>
            <div className="ak-height-60 ak-height-lg-30"></div>
            {/* <ButtonCommon to="/about"> View More</ButtonCommon> */}
          </div>
          <div
            className="choose-us-img"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <img src={img} alt="..." />
            {/* <img
              className="circle-img"
              src="/assets/img/chooseus/Circle.png"
              alt="..."
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
