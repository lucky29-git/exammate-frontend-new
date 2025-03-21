import React from 'react'
import './UploadSection.css'

export const UploadSection = () => {
  return (
    <section className='uploadSection'>

    <div className='heading'>
    <div>
    <h1>Have Question Papers or Notes? 📚 </h1>
    <h1>Share with Others!</h1>
    </div>
    <img src='/img/uploadSectionTop.png'></img>
    </div>

    <div className='upload'>

        <img src='/img/upload.png'></img>

        <div className='uploadContent'>
            <h4>
            Help students by uploading previous year papers and notes. </h4>
           <h4> Your contribution makes a difference!
            </h4>

            <div className='button'>
            <img src='/img/uploadButton.png' /><span class="overlay-text">Upload Now</span>
            </div>
        </div>
    </div>
    </section>
  )
}
