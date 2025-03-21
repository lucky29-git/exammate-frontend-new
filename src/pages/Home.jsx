import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { UploadSection } from '../components/UploadSection'
import { Testimonials } from '../components/Testimonials'
import { Footer } from '../components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

export const Home = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          easing: 'ease-in-out', // Animation easing
          once: true, // Animation happens only once
        });
      }, []);
  return (
    <>
        <Navbar />
        <div data-aos="fade-up">
        <HeroSection />
      </div>
      
      <div data-aos="fade-up">
        <UploadSection />
      </div>
      
      <div data-aos="fade-up">
        <Testimonials />
      </div>
      
      <div data-aos="fade-up">
        <Footer />
      </div>
    </>
  )
}
