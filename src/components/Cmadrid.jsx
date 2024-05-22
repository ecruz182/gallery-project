import React from 'react'
import img1 from '../images/Img1.jpg'

const Cmadrid = ({ className }) => {
  return (        
    <div className={'image-container ${className}'}>
        <img src={img1} alt="Paisaje de madrid" className="image" />  
    </div>
  )
}

export default Cmadrid
