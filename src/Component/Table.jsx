import React from "react";
import styles from "../Styles/Slides.module.css"; // Import CSS file for styling
import dolar from "../assets/Group.png";
import Vector from "../assets/Vector.png";
import stat from "../assets/Vector(1).png";
import dolar2 from "../assets/Group(1).png";

const Slides = () => {
  // Array of slides, each containing four image-word pairs
  const slides = [
    {
      images: [dolar, Vector, stat, dolar2],
      words: ["Word1", "Word2", "Word3", "Word4"],
    },
    // Add more slides as needed
  ];

  return (
    <div className={styles.slidesContainer}>
      {slides.map((slide, index) => (
        <div key={index} className={styles.slide}>
          {slide.images.map((image, i) => (
            <div key={i} className={styles.slideItem}>
              <img src={image} alt={`Slide ${index + 1} Image ${i + 1}`} />
              <p>{slide.words[i]}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Slides;
