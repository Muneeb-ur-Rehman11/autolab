import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import CommonPageHero from "../components/CommonPageHero/CommonPageHero";

const featuredVideos = [
  {
    id: 1,
    video: "https://videos.pexels.com/video-files/3066463/3066463-uhd_2732_1440_24fps.mp4",
    description: "Expert car detailing bringing shine to luxury vehicles in Dubai.",
  },
  {
    id: 2,
    video: "https://videos.pexels.com/video-files/16815342/16815342-uhd_2732_1144_24fps.mp4",
    description: "Precision repair services for high-end automobiles.",
  },
  {
    id: 3,
    video: "https://videos.pexels.com/video-files/3066427/3066427-uhd_2732_1440_24fps.mp4",
    description: "Eco-friendly cleaning techniques for a spotless finish.",
  },
  {
    id: 4,
    video: "https://videos.pexels.com/video-files/13718948/13718948-hd_1920_1080_60fps.mp4",
    description: "Custom maintenance packages tailored for Dubai's elite.",
  },
];

const gridImages = [
  { id: 1, img: "https://cdn.pixabay.com/photo/2024/07/13/07/40/cars-8891625_1280.jpg" },
  { id: 2, img: "https://images.unsplash.com/photo-1619431856706-ca2cc58258f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyJTIwZGV0YWlsaW5nfGVufDB8fDB8fHww" },
  { id: 3, img: "https://autolabdxb.com/gallery/1%20(5).jpeg" },
  { id: 4, img: "https://autolabdxb.com/gallery/1%20(24).jpeg" },
  { id: 5, img: "https://autolabdxb.com/gallery/1%20(32).jpeg" },
  { id: 6, img: "https://images.unsplash.com/photo-1652454449601-e83b62eabe94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhciUyMGRldGFpbGluZ3xlbnwwfHwwfHx8MA%3D%3D" },
  { id: 7, img: "https://autolabdxb.com/gallery/1%20(26).jpeg" },
  { id: 8, img: "https://autolabdxb.com/gallery/1%20(9).jpeg" },
];

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <CommonPageHero title="Gallery" />
      <div className="container">
        <div className="ak-height-75 ak-height-lg-80"></div>

        {/* Featured Videos Section */}
        <section className="featured-videos">
          <h2 className="section-title" data-aos="fade-right">
            Featured Work
          </h2>
          <div className="featured-videos-grid">
            {featuredVideos.map((item, index) => (
              <div
                key={item.id}
                className={`video-card ${index % 2 === 0 ? "rounded-alt-1" : "rounded-alt-2"}`}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <video autoPlay loop muted playsInline className="gallery-video">
                  <source src={item.video} type="video/mp4" />
                </video>
                <p className="video-description">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Grid Images Section */}
        <section className="grid-images">
          <div className="ak-height-60 ak-height-lg-30"></div>
          <h2 className="section-title" data-aos="fade-left">
            More Creations
          </h2>
          <div className="grid-images-layout">
            {gridImages.map((item, index) => (
              <div
                key={item.id}
                className="grid-image-card"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <img
                  src={item.img}
                  alt={`Gallery ${item.id}`}
                  className="gallery-img"
                />
              </div>
            ))}
          </div>
          <div className="ak-height-60 ak-height-lg-30"></div>
          <Link to="/contact" className="cta-button" data-aos="fade-up">
            Book Your Service Now
          </Link>
        </section>

        <div className="ak-height-75 ak-height-lg-80"></div>
      </div>
    </div>
  );
};

export default Gallery;
