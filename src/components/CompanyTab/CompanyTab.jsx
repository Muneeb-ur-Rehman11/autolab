import { useState } from "react";

const tabContents = [
  {
    title: "Mission",
    description:
      "Deliver premium detailing services with innovation, precision, and customer trust at the core.",
  },
  {
    title: "Vision",
    description:
      "To be Dubai’s leading car detailing destination, setting new standards of quality and care.",
  },
  {
    title: "History",
    description:
      "Founded with a passion for automotive excellence, AUTOLAB has grown into a trusted name in Dubai’s detailing industry.",
  },
];

const CompanyTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="company-tab">
        <ul className="tabs">
          {tabContents?.map((tab, index) => (
            <li
              key={index}
              className={activeTab === index ? "active-tab" : ""}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </li>
          ))}
        </ul>

        <div className="tabs-content">
          <div className="list">
            <div className="ak-section-heading ak-style-1 ak-type-1">
              <div className="background-text">About Company</div>
              <h3 className="desp">{tabContents[activeTab].description}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyTab;
