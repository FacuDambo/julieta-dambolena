import React from 'react'
import {Link} from 'react-router-dom'

const Header = (props) => {
  return (
    <header>
      <div className='title-parag-btn'>
        {props.title}
        {props.parag}
        <Link to="/contact">{props.button}</Link>
      </div>
      <div className='background-image'>
        <img src="" alt="" />
      </div>
    </header>
  )
}

export default Header