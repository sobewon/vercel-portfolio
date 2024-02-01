import React from 'react';
import yotsuba from '../assets/yotsuba.jpg'
import cars from '../assets/cars.jpg'

function AboutPage() {
  return (
    <div className="about-page">
      <div className="profile-section">
        <div className="profile-image">
          <img src={yotsuba} alt="Profile" />
        </div>
        <div className="about-text">
          <p>&#9996; "Hello there" &#9996;</p>
          <h2>John Magnuson</h2>
          <p>Full Stack Software Engineer</p>
          <p>Random Information Engulfer</p>
        </div>
      </div>
      <div className="wide-image">
        <img src={cars} alt="cars" />
      </div>
      <div className="description-section">
        <h2>Hobbies</h2>
        <p>The picture above is of my two cars, which I absolutely adore. The left one being a 1992 BMW E36 325IS, and the right one being a 1992 Silvia Q's</p>
        <p>My other hobbies include:</p>
        <li>3D-Printing</li>
        <li>Video Games &#127918;</li>
        <li>&#65039; Computer Building &#128296;</li>
        <li>&#128304;Learning Japanese &#x1F38C; - どうぞ宜しく!</li>
        <li>&#128295; Custom Hardware/Software Solutions for Daily Life &#129520;</li>

      </div>
    </div>
  );
};

export default AboutPage;
