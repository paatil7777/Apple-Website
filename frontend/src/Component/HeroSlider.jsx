import React, { useState, useEffect } from "react";

/* Assets */
import img1 from "../assets/i poster1.jpg";
import img2 from "../assets/i poster2.jpg";
import video from "../assets/poster.mp4";

export const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      title: "iPhone 17 Pro",
      subtitle: "Apple Intelligence.",
      desc:
        "Effortlessly helpful features — from image creation to Live Translation.",
      type: "image",
      src: img1
    },
    {
      title: "Apple Intelligence",
      subtitle: "Live Translation",
      desc: "Real-time conversations across languages.",
      type: "video",
      src: video
    },
    {
      title: "Designed to Impress",
      subtitle: "Titanium Finish",
      desc: "Three stunning colors. One iconic design.",
      type: "image",
      src: img2
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div
        className="hero-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div className="hero-slide" key={i}>
            {/* LEFT TEXT */}
            <div className="hero-text">
              <h1>{slide.title}</h1>
              <h2>{slide.subtitle}</h2>
              <p>{slide.desc}</p>
            </div>

            {/* RIGHT MEDIA */}
            <div className="hero-media">
              {slide.type === "image" ? (
                <img src={slide.src} alt="iphone" />
              ) : (
                <video src={slide.src} autoPlay muted loop />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
