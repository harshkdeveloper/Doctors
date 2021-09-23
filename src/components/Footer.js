import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer className="page-footer">
    <div className="container">
      <div className="row px-md-3">
        <div className="col-sm-6 col-lg-3 py-3">
          <h5>Company</h5>
          <ul className="footer-menu">
            <li><NavLink to="#">About Us</NavLink></li>
            <li><NavLink to="#">Career</NavLink></li>
            <li><NavLink to="#">Editorial Team</NavLink></li>
            <li><NavLink to="#">Protection</NavLink></li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-3 py-3">
          <h5>More</h5>
          <ul className="footer-menu">
            <li><NavLink to="#">Terms & Condition</NavLink></li>
            <li><NavLink to="#">Privacy</NavLink></li>
            <li><NavLink to="#">Advertise</NavLink></li>
            <li><NavLink to="#">Join as Doctors</NavLink></li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-3 py-3">
          <h5>Our partner</h5>
          <ul className="footer-menu">
            <li><NavLink to="#">One-Fitness</NavLink></li>
            <li><NavLink to="#">One-Drugs</NavLink></li>
            <li><NavLink to="#">One-Live</NavLink></li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-3 py-3">
          <h5>Contact</h5>
          <p className="footer-link mt-2">Temporary address</p>
          <NavLink to="#" className="footer-link">701-573-7582</NavLink>
          <NavLink to="#" className="footer-link">healthcare</NavLink>

          <h5 className="mt-3">Social Media</h5>
          <div className="footer-sosmed mt-3">
            <NavLink to="#" target="_blank"><span className="mai-logo-facebook-f"></span></NavLink>
            <NavLink to="#" target="_blank"><span className="mai-logo-twitter"></span></NavLink>
            <NavLink to="#" target="_blank"><span className="mai-logo-google-plus-g"></span></NavLink>
            <NavLink to="#" target="_blank"><span className="mai-logo-instagram"></span></NavLink>
            <NavLink to="#" target="_blank"><span className="mai-logo-linkedin"></span></NavLink>
          </div>
        </div>
      </div>

      <hr/>

      <p id="copyright">Copyright &copy; 2020 <NavLink to="harry" target="_blank">harry soft</NavLink>. All right reserved</p>
    </div>
  </footer>

        </div>
    )
}

export default Footer
