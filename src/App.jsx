import React, { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">BizBrand</div>

        {/* Hamburger Icon */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>Grow Your Business with Confidence</h1>
          <p>
            We provide modern solutions to help your business thrive in a
            digital-first world.
          </p>
          <a href="#contact" className="cta-btn">Get Started</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            At BizBrand, we specialize in helping companies build sustainable
            growth strategies. Our team is dedicated to bringing innovation and
            value to every project.
          </p>
        </div>
        <div className="about-img">
          <img src="https://www.vectorstock.com/royalty-free-vector/about-us-metaphor-flat-template-company-vector-54437470"/>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services">
        <h2 id="color">Our Services</h2>
        <div className="service-cards">
          <div className="card">
            <h3 id="color">Web Development</h3>
            <p id="color">Responsive, scalable websites tailored for your business.</p>
          </div>
          <div className="card">
            <h3 id="color">Digital Marketing</h3>
            <p id="color">Grow your online presence with proven strategies.</p>
          </div>
          <div className="card">
            <h3 id="color">Consulting</h3>
            <p id="color">Expert advice to drive business success.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials">
        <h2 >What Our Clients Say</h2>
        <div className="testimonial-list">
          <div className="testimonial">
            <p id="color">"BizBrand transformed our online presence. Sales skyrocketed!"</p>
            <h4 id="color">- Sarah Johnson</h4>
          </div>
          <div className="testimonial">
            <p id="color"> "Professional, reliable, and innovative. Highly recommend."</p>
            <h4 id="color">- James Smith</h4>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} BizBrand. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
