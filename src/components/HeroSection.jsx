import React from 'react'
import './HeroSection.css'
import { Cards } from './Cards'

export const HeroSection = () => {
  return (
    <section className='heroSection'>

    <div className='heading'>
    <h1>Ace Your Exams with Just One Click! 🎯</h1>
    <h4>Get instant access to past question papers and subject-wise notes. </h4>
   <h4> No more last-minute stress—study smarter, not harder!</h4>
    </div>

    <div className='cards-container'>
      <Cards shortForm="CSE" fullForm="Computer Science & Engineering" bgImage="/img/cse.jpg" bgColor="#007BFF"/>
      <Cards shortForm="ECE" fullForm="Electronics & Communication Engg" bgImage="/img/ec.jpg" bgColor="#17A2B8"/>
      <Cards shortForm="IT" fullForm="Information Technology" bgImage="/img/it.jpg" bgColor="#6F42C1"/>
      <Cards shortForm="EX" fullForm="Electrical Engineering" bgImage="/img/ex.jpg" bgColor="#FFC107"/>
      <Cards shortForm="ME" fullForm="Mechanical Engineering" bgImage="/img/me.webp" bgColor="#FD7E14"/>
      <Cards shortForm="CE" fullForm="Civil Engineering" bgImage="/img/ce.jpeg" bgColor="#795548"/>
      <Cards shortForm="PCT" fullForm="PetroChemical Engineering" bgImage="/img/pct.jpeg" bgColor="#DC3545"/>
      <Cards shortForm="AU" fullForm="Automobile Engineering" bgImage="/img/au.jpg" bgColor="#343A40"/>

    </div>

    </section>
  )
}
