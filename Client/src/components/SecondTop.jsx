import React from 'react'
import img from "../assets/Artlogo.png"

export const SecondTop = () => {
    return (
        <div style={{marginBottom:"30px"}}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "40px" }}>
            <img src={img} alt="" style={{ width: "47%" }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <div><h2>Art Basel | Your Guide to Exhibitions in Europe</h2>
                    <p>Current and upcoming exhibitions, performances, and related events happening across Europe ahead <br /> of Art Basel.</p>
                    <button style={{border:"1px solid black",padding:"10px 20px"}}>VIEW LIST</button>
                </div>
            </div>
            
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "40px" }}>
            <img src={img} alt="" style={{ width: "47%" }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <div><h2>Art Basel | Your Guide to Exhibitions in Europe</h2>
                    <p>Current and upcoming exhibitions, performances, and related events happening across Europe ahead <br /> of Art Basel.</p>
                    <button style={{border:"1px solid black",padding:"10px 20px"}}>VIEW LIST</button>
                </div>
            </div>
            
        </div>
        </div>
    )
}
