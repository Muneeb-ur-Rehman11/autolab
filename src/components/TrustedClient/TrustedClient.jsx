import React from "react";

// Import images
import audi from "./audi.png";
import BMW from "./BMW.png";
import ford from "./ford.png";
import lamborghini from "./lamborghini.png";
import landrover from "./landrover.png";
import mercedes from "./mercedes.png";
import rollsroyce from "./rollsroyce.png";

const trustedClientsLogos = [
  audi,
  BMW,
  ford,
  lamborghini,
  landrover,
  mercedes,
  rollsroyce,
];

const TrustedClient = () => {
  return (
    <div className="TC-container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="TC-trusted-client">
        <h4 className="TC-title">Trusted Clients</h4>
        <div className="TC-marquee-container">
          <div className="TC-marquee-content">
            {trustedClientsLogos.map((item, i) => (
              <div key={i} className="TC-logo-item">
                <img src={item} alt={`Client logo ${i + 1}`} />
              </div>
            ))}
            {trustedClientsLogos.map((item, i) => (
              <div key={`duplicate-${i}`} className="TC-logo-item">
                <img src={item} alt={`Client logo ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="ak-height-125 ak-height-lg-80"></div>
    </div>
  );
};

export default TrustedClient;