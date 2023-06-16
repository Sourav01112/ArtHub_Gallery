import React, { useState } from 'react'
import img from "../assets/Artlogo.png"
import i1 from "../assets/i1.png"
import i2 from "../assets/i2.png"
import i3 from "../assets/i3.png"
import i4 from "../assets/i4.png"
import i5 from "../assets/i5.png"
import i6 from "../assets/i6.png"
export const SecondTop = () => {
    const [count, Setcount] = useState(0)
    const [imgArr, SetimgArr] = useState(i1)


    return (
        <div style={{ marginBottom: "30px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "40px", gap: "30px" }}>
                <img src={imgArr} alt="" style={{ width: "47%" }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <h2 style={{ fontFamily: "'Playfair Display', serif" }}>Art Basel</h2>
                        <h2 style={{ fontFamily: "'Playfair Display', serif",marginTop:"20px",marginBottom:"20px" }}>Hall 2.0/Booth B20 <br />
                            13 - 18 June 2023</h2>
                        <p style={{color: "rgba(0, 0, 0, 0.547)"}}>Our 2023 edition of Art Basel includes a wide selection of paintings, sculptures, works on paper, and more by artists from our program,</p>
                        <button style={{ border: "1px solid rgba(0, 0, 0, 0.107)", padding: "10px 20px", color: "rgba(0, 0, 0, 0.547)",fontSize:"13px" }}>View Selected Works</button>
                    </div>
                </div>

            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "40px", gap: "30px" }}>
                <img src={img} alt="" style={{ width: "47%" }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div><h2 style={{ fontFamily: "'Playfair Display', serif" }}>Art Basel | Your Guide to Exhibitions in Europe</h2>
                        <p style={{color: "rgba(0, 0, 0, 0.547)"}}>Current and upcoming exhibitions, performances, and related events happening across Europe ahead  of Art Basel.</p>
                        <button style={{ border: "1px solid rgba(0, 0, 0, 0.107)", padding: "10px 20px", color: "rgba(0, 0, 0, 0.547)",fontSize:"13px" }}>VIEW LIST</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
