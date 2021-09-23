import React from 'react'
import one from './img/bg_image_1.jpg'

 const Contact = () => {
    return (
        <>
        
         
        <div className="page-banner overlay-dark bg-image"style={{ backgroundImage:`url(${one})` }}>
    <div className="banner-section">
      <div className="container text-center wow fadeInUp">
        <nav aria-label="Breadcrumb">
          <ol className="breadcrumb breadcrumb-dark bg-transparent justify-content-center py-0 mb-2">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Contact</li>
          </ol>
        </nav>
        <h1 className="font-weight-normal">Contact</h1>
      </div> 
    </div> 
  </div> 

  <div className="page-section">
    <div className="container">
      <h1 className="text-center wow fadeInUp">Get in Touch</h1>

      <form className="contact-form mt-5">
        <div className="row mb-3">
          <div className="col-sm-6 py-2 wow fadeInLeft">
            <label for="fullName">Name</label>
            <input type="text" id="fullName" className="form-control" placeholder="Full name.."/>
          </div>
          <div className="col-sm-6 py-2 wow fadeInRight">
            <label for="emailAddress">Email</label>
            <input type="text" id="emailAddress" className="form-control" placeholder="Email address.."/>
          </div>
          <div className="col-12 py-2 wow fadeInUp">
            <label for="subject">Subject</label>
            <input type="text" id="subject" className="form-control" placeholder="Enter subject.."/>
          </div>
          <div className="col-12 py-2 wow fadeInUp">
            <label for="message">Message</label>
            <textarea id="message" className="form-control" rows="8" placeholder="Enter Message.."></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-primary wow zoomIn">Send Message</button>
      </form>
    </div>
  </div>

  <div className="maps-container wow fadeInUp">
    <div id="google-maps"></div>
  </div>

  <div className="page-section banner-home bg-image">
    <div className="container py-5 py-lg-0">
      <div className="row align-items-center">
        <div className="col-lg-4 wow zoomIn">
          <div className="img-banner d-none d-lg-block">
            <img src="../assets/img/mobile_app.png" alt=""/>
          </div>
        </div>
        <div className="col-lg-8 wow fadeInRight">
          <h1 className="font-weight-normal mb-3">Get easy access of all features using One Health Application</h1>
          <a href="#"><img src="../assets/img/google_play.svg" alt=""/></a>
          <a href="#" className="ml-2"><img src="../assets/img/app_store.svg" alt=""/></a>
        </div>
      </div>
    </div>
  </div> 
 
  
    </>         
        
    )
}
export default  Contact