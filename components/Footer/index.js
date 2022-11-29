import React from "react"
import Style from "./style.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarker, faPhone, faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

const Footer = (props) => {
  const links = [
    { name: "Home", link: "#" },
    { name: "Gallery", link: "#" },
    { name: "About", link: "#" },
    { name: "Admission", link: "#" },
    { name: "Downloads", link: "#" },
    { name: "Career", link: "#" },
  ]
  const social = [
    { icon: faFacebookF, link: "#" },
    { icon: faInstagram, link: "#" },
    { icon: faTwitter, link: "#" },
  ]

  return (
    <div className={`${Style.footer} row mx-0`}>
      <div className={`col-sm-12 col-md-4`}>
        <h4 className={`mb-3`}>Have a Question ?</h4>
        <div className={`${Style.box}`}>
          <div className={`${Style.mr2}`}>
            <FontAwesomeIcon icon={faMapMarker} />
          </div>
          <div>203 Fake St. Mountain View, San Francisco, California, USA</div>
        </div>
        <div className={`${Style.box}`}>
          <div className={`${Style.mr2}`}>
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <div>
            <a className={`${Style.link}`} href="tel:8080880808">
              +91 8080880808
            </a>
          </div>
        </div>
        <div className={`${Style.box}`}>
          <div className={`${Style.mr2}`}>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div>
            <a className={`${Style.link}`} href="mailto:abc@example.com">
              abc@example
            </a>
          </div>
        </div>
      </div>
      <div className={`col-sm-12 col-md-4`}>
        <h4 className={`mb-3`}>Links</h4>
        <div className={`d-flex flex-column`}>
          {links.map((data, index) => (
            <div key={`links_${index}`} className={`d-flex w-100`}>
              <div className={`${Style.mr2}`}>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div>
                <a className={`${Style.link}`} href={data.link}>
                  {data.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`col-sm-12 col-md-4`}>
        <h4 className={`mb-3`}>Connect With Us</h4>
        <div className={`d-flex w-100`}>
          {social.map((data, index) => (
            <div key={`social_${index}`} className={`${Style.socialLinks}`}>
              <a className={`${Style.link}`} href={data.link}>
                <FontAwesomeIcon icon={data.icon} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
