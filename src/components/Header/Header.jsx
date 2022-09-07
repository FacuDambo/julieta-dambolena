import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";

const Header = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <header>
      <div className='title-parag-btn'>
        {props.title}
        {props.parag}
        <Link to="/contact" data-aos="zoom-in" data-aos-delay="300"><span>{props.button}</span></Link>
      </div>
      <div className='background-image'>
        <img data-aos="fade-up" data-aos-delay="600" src={props.image} alt="Translator portrait" />
      </div>
    </header>
  )
}

export default Header