import React from 'react'
import one from './img/bg_image_1.jpg'
import two from './img/banner-pattern.svg'
import { NavLink } from 'react-router-dom'

const Doctor = () => {
    return (
      <>
<div className="page-banner overlay-dark bg-image" style={{ backgroundImage:`url(${one})` }} >
    <div className="banner-section">
      <div className="container text-center wow fadeInUp">
        <nav aria-label="Breadcrumb">
          <ol className="breadcrumb breadcrumb-dark bg-transparent justify-content-center py-0 mb-2">
            <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
            <li className="breadcrumb-item active" aria-current="page">Doctors</li>
          </ol>
        </nav>
        <h1 className="font-weight-normal">Our Doctors</h1>
      </div> 
    </div> 
  </div> 

  <div className="page-section bg-light">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">

          <div className="row">
            
            <div className="col-md-6 col-lg-4 py-3 wow zoomIn">
              <div className="card-doctor">
                <div className="header">
                  <img src="../assets/img/doctors/doctor_1.jpg" alt=""/>
                  <div className="meta">
                    <NavLink to="#"><span className="mai-call"></span></NavLink>
                    <NavLink to="#"><span className="mai-logo-whatsapp"></span></NavLink>
                  </div>
                </div>
                <div className="body">
                  <p className="text-xl mb-0">Dr. Stein Albert</p>
                  <span className="text-sm text-grey">Cardiology</span>
                </div>
              </div>
            </div>
    
            <div className="col-md-6 col-lg-4 py-3 wow zoomIn">
              <div className="card-doctor">
                <div className="header">
                  <img src="../assets/img/doctors/doctor_2.jpg" alt=""/>
                  <div className="meta">
                    <NavLink to="#"><span className="mai-call"></span></NavLink>
                    <NavLink to="#"><span className="mai-logo-whatsapp"></span></NavLink>
                  </div>
                </div>
                <div className="body">
                  <p className="text-xl mb-0">Dr. Alexa Melvin</p>
                  <span className="text-sm text-grey">Dental</span>
                </div>
              </div>
            </div>
    
            <div className="col-md-6 col-lg-4 py-3 wow zoomIn">
              <div className="card-doctor">
                <div className="header">
                  <img src="../assets/img/doctors/doctor_3.jpg" alt=""/>
                  <div className="meta">
                    <NavLink to="#"><span className="mai-call"></span></NavLink>
                    <NavLink to="#"><span className="mai-logo-whatsapp"></span></NavLink>
                  </div>
                </div>
                <div className="body">
                  <p className="text-xl mb-0">Dr. Rebecca Steffany</p>
                  <span className="text-sm text-grey">General Health</span>
                </div>
              </div>
            </div>
    
            <div className="col-md-6 col-lg-4 py-3 wow zoomIn">
              <div className="card-doctor">
                <div className="header">
                  <img src="../assets/img/doctors/doctor_1.jpg" alt=""/>
                  <div className="meta">
                    <NavLink to="#"><span className="mai-call"></span></NavLink>
                    <NavLink to="#"><span className="mai-logo-whatsapp"></span></NavLink>
                  </div>
                </div>
                <div className="body">
                  <p className="text-xl mb-0">Dr. Stein Albert</p>
                  <span className="text-sm text-grey">Cardiology</span>
                </div>
              </div>
            </div>
    
            <div className="col-md-6 col-lg-4 py-3 wow zoomIn">
              <div className="card-doctor">
                <div className="header">
                  <img src="../assets/img/doctors/doctor_2.jpg" alt=""/>
                  <div className="meta">
                    <NavLink to="#"><span className="mai-call"></span></NavLink>
                    <NavLink to="#"><span className="mai-logo-whatsapp"></span></NavLink>
                  </div>
                </div>
                <div className="body">
                  <p className="text-xl mb-0">Dr. Alexa Melvin</p>
                  <span className="text-sm text-grey">Dental</span>
                </div>
              </div>
            </div>
    
            <div className="col-md-6 col-lg-4 py-3 wow zoomIn">
              <div className="card-doctor">
                <div className="header">
                  <img src="../assets/img/doctors/doctor_3.jpg" alt=""/>
                  <div className="meta">
                    <NavLink to="#"><span className="mai-call"></span></NavLink>
                    <NavLink to="#"><span className="mai-logo-whatsapp"></span></NavLink>
                  </div>
                </div>
                <div className="body">
                  <p className="text-xl mb-0">Dr. Rebecca Steffany</p>
                  <span className="text-sm text-grey">General Health</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div> 
  </div> 

  <div className="page-section">
    <div className="container">
      <h1 className="text-center wow fadeInUp">Make an Appointment</h1>

      <form className="main-form">
        <div className="row mt-5 ">
          <div className="col-12 col-sm-6 py-2 wow fadeInLeft">
            <input type="text" className="form-control" placeholder="Full name"/>
          </div>
          <div className="col-12 col-sm-6 py-2 wow fadeInRight">
            <input type="text" className="form-control" placeholder="Email address.."/>
          </div>
          <div className="col-12 col-sm-6 py-2 wow fadeInLeft" data-wow-delay="300ms">
            <input type="date" className="form-control"/>
          </div>
          <div className="col-12 col-sm-6 py-2 wow fadeInRight" data-wow-delay="300ms">
            <select name="departement" id="departement" className="custom-select">
              <option value="general">General Health</option>
              <option value="cardiology">Cardiology</option>
              <option value="dental">Dental</option>
              <option value="neurology">Neurology</option>
              <option value="orthopaedics">Orthopaedics</option>
            </select>
          </div>
          <div className="col-12 py-2 wow fadeInUp" data-wow-delay="300ms">
            <input type="text" className="form-control" placeholder="Number.."/>
          </div>
          <div className="col-12 py-2 wow fadeInUp" data-wow-delay="300ms">
            <textarea name="message" id="message" className="form-control" rows="6" placeholder="Enter message.."></textarea>
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-3 wow zoomIn">Submit Request</button>
      </form>
    </div> 
  </div> 
  

  <div className="page-section banner-home bg-image"style={{ backgroundImage:`url(${two})` }} >
    <div className="container py-5 py-lg-0">
      <div className="row align-items-center">
        <div className="col-lg-4 wow zoomIn">
          <div className="img-banner d-none d-lg-block">
            <img src="../assets/img/mobile_app.png" alt=""/>
          </div>
        </div>
        <div className="col-lg-8 wow fadeInRight">
          <h1 className="font-weight-normal mb-3">Get easy access of all features using One Health Application</h1>
          <NavLink to="#"><img src="../assets/img/google_play.svg" alt=""/></NavLink>
          <NavLink to="#" className="ml-2"><img src="../assets/img/app_store.svg" alt=""/></NavLink>
        </div>
      </div>
    </div>
  </div> 

      </>
    )
}

export default Doctor
