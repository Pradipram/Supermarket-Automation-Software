import React from 'react';
import '../styles/About.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Our Supermarket Automation</h1>
        <p>Revolutionizing the way you shop</p>
      </header>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          At our supermarket automation company, our mission is to provide
          seamless and efficient shopping experiences for our customers. We
          believe that technology should enhance, not hinder, the joy of
          grocery shopping.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Technology</h2>
        <p>
          Our state-of-the-art automation system utilizes advanced computer
          vision, RFID, and IoT technologies to create a frictionless shopping
          experience. From automated checkout to real-time inventory
          management, our technology is designed to save you time and hassle.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Team</h2>
        <p>
          Our team of experts, including computer scientists, engineers, and
          retail specialists, are dedicated to revolutionizing the grocery
          industry. With a passion for innovation and a commitment to customer
          satisfaction, we work tirelessly to bring our vision to life.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Commitment</h2>
        <p>
          We are committed to providing our customers with the highest level of
          service and satisfaction. From the moment you step into our store to
          the moment you leave, we strive to make your shopping experience
          exceptional.
        </p>
      </section>

      <footer className="about-footer">
        <p>&copy; 2023 Supermarket Automation. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;