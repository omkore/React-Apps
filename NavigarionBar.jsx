import React from 'react'
import icon from './cust.jpg';
const NavigarionBar = () => {
  return (
    <>
    <div>NavigarionBar</div>
    <div><img src={icon} alt="Cust img" /></div>
    <div>Customer Details</div>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
      <li>Contact us</li>
    </ul>
    </>
  )
}

export default NavigarionBar