import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around",padding:"40px",alignItems:"center"}}>
    <div style={{width:"30%"}}>
      <p style={{fontSize:"16x",color:"red",fontWeight:"500"}}>MORDERN ART GALLERY</p>
    </div>
    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",width:"40%"}}>
        <p>TERMS & CONDITIONS</p>
        <p>PRIVACY POLICY</p>
        <p>ACCESSIBILITY POLICY</p>
    </div>
    <div style={{width:"30%",textAlign:"right"}}>
      <p>© 2023 MARIAN GOODMAN</p>
    </div>
  </div>
  )
}
