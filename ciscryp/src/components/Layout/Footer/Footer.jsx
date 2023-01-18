import Logo from "../../../assets/logo-light.efd6c8c15ce9ff0f90cc7add4d464ab1.svg"
import { BsFacebook} from "react-icons/bs";
import { BsTwitter} from "react-icons/bs";
import { SiKickstarter } from "react-icons/si";
import { BsVimeo } from "react-icons/bs";
import styledFoot from "./Footer.module.css"

import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-between mb-5 pb-5">
          <div className="col-lg-3 col-6">
            <div className={styledFoot.logo}>
              <img src={Logo} alt="Logo" />
            </div>
            <h5>A minimal, a paid-membership publication on Ghost.</h5>
          </div>
          <div className="col-lg-2 col-6">
            <ul>
              <h6>Social</h6>
              <li><BsFacebook />Facebook</li>
              <li><BsTwitter />Twitter</li>
              <li><SiKickstarter />Kickstarter</li>
              <li><BsVimeo />Vimeo</li>
            </ul>
          </div>
          <div className="col-lg-2 col-6">
            <ul>
              <h6>About</h6>
              <li>Style Guide</li>
              <li>Features</li>
              <li>Contact</li>
              <li>404</li>
              <li>Get Theme</li>
            </ul>
          </div>
          <div className="col-lg-2 col-6">
            <ul>
              <h6>Features</h6>
              <li>Demos</li>
              <li>Light version</li>
              <li>Color version</li>
              <li>Partial version</li>
              <li>Dark version</li>
            </ul>
          </div>
          <div className="col-lg-2 col-6">
            <ul>
              <h6>Membership</h6>
              <li>Account</li>
              <li>Membership</li>
              <li>Subscribe</li>
              <li>Tags</li>
              <li>Authors</li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-center pb-4">
          <div className="col-lg-6">
            <p>© 2022 Qurno. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer