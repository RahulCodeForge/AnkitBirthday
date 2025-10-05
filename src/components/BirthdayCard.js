import React, { useState } from "react";
import "./BirthdayCard.css";
import * as motion from "motion/react-client"; // ✅ added motion

const BirthdayCard = () => {
  const [showSurprise, setShowSurprise] = useState(false);
  const [rotate, setRotate] = useState(false); // ✅ for rotation animation

  const handleClick = () => {
    setRotate(true);

    setTimeout(() => {
      setShowSurprise(true);
    }, 1000);

    const popSound = new Audio(process.env.PUBLIC_URL + "/sounds/pop.m4a"); // ✅ use mp3 for support
    popSound.play().catch((err) => console.log("Audio play blocked:", err));
  };

  const images = [
    "/images/bro1.jpg",
    "/images/bro2.jpg",
    "/images/bro3.jpg",
    "/images/bro4.jpg",
    "/images/bro5.jpg",
    "/images/bro6.jpg",
    "/images/bro7.jpg",
    "/images/bro8.jpg",
  ];

  return (
    <div className="birthday-wrapper">
      {!showSurprise ? (
        <div className="button-container">
          {/* ✅ Added motion rotation animation */}
          <motion.div
            animate={rotate ? { rotate: 360 } : {}}
            transition={{ duration: 1 }}
          >
            <button className="glow-button" onClick={handleClick}>
              🎁 Click Me 🎉
            </button>
          </motion.div>
        </div>
        
      ) : (
        <div className="surprise-container">
          <div className="confetti-left"></div>
          <div className="confetti-right"></div>

          <h1 className="title">🎂 Happy Birthday, chote! 💖</h1>
          <p className="subtitle">
            You deserve all the happiness in the world. Once again Happy Birthday Mahadev alaways Bless You 💫
          </p>

          <div className="cake">🎂🎉💥</div>

        <div className="rotating-circle">
  {images.map((img, index) => (
    <img
      key={index}
      src={img}
      alt="bro"
      className="circle-photo"
    />
  ))}
</div>


          <div className="crackers">
            <div className="spark left-spark"></div>
            <div className="spark right-spark"></div>
          </div>

          <div className="popper-rain">
  {[...Array(50)].map((_, i) => {
    const left = Math.random() * 100; // random horizontal position
    const delay = Math.random() * 3; // random start delay
    const colorClass = `color${i % 5}`; // color rotation
    const size = 6 + Math.random() * 6; // random size

    return (
      <div
        key={i}
        className={`popper ${colorClass}`}
        style={{
          left: `${left}%`,
          width: `${size}px`,
          height: `${size * 2}px`,
          animationDelay: `${delay}s`,
        }}
      ></div>
    );
  })}
</div>

        </div>
      )}
    </div>



  );
};

export default BirthdayCard;
