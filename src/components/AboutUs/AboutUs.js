// src/components/AboutUs/AboutUs.js
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
     <section data-aos="fade-up" className="about-us">
      <div className="columna image-column">
        <img src="assets/images/about.jpg" alt="About Us" />
      </div>
      <div className="columna text-column">
        <div className='box-in-about'>
        <p className='abp'>Λίγα λόγια για εμάς</p>
        <h2>Welcome</h2>
        <p className='abpc'>
          Το Κουρείο <strong>by Konstantinos</strong> είναι το κορυφαίο σημείο για τις ανάγκες
          περιποίησης των μαλλιών σας. Είμαστε αφοσιομένοι στο να
          παρέχουμε υψηλής ποιότητας υπηρεσίες και μια μοναδική εμπειρία
          περιποίησης σε κάθε πελάτη μας. Με έμπειρια  και
          μοντέρνες τεχνικές, προσφέρουμε υπηρεσίες που ανταγωνίζονται με τις
          καλύτερες του κλάδου.
        </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
