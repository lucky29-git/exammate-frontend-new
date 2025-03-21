import React from 'react'
import './Testimonials.css'

export const Testimonials = () => {
  return (
    <section className='testimonials'>

        <div className='head'>
        <h2>Reviews</h2>
        <p>What our users are saying...</p>
        </div>

        <div className='testimonial-cards'>
    <div className='testiCard'>
      <p>"This service is amazing! It helped me a lot in my studies!"</p>
      <h4>- John Doe</h4>
    </div>
    <div className='testiCard'>
      <p>"I love the user interface. It's so easy to navigate."</p>
      <h4>- Jane Smith</h4>
    </div>
    <div className='testiCard'>
      <p>"Great resource for students. Highly recommend it to others!"</p>
      <h4>- Michael Brown</h4>
    </div>
  </div>
    </section>
  )
}
