// import React, { useState } from "react";
import React from "react";

export default function About() {
   
  /*{
     const [myStyle, setMyStyle] = useState(
    {
        color: 'black',
        backgroundColor: 'white'
    })

    const toggleStyle = () => {
        if (myStyle.color === 'white') {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Disable Dark Mode")
        }
        else {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            }) 
            setBtnText("Disable Dark Mode")
        }
    }

    const [btnText, setBtnText] = useState("Enable Dark Mode")

    */
  return (
    //<div className="container" style={myStyle}>
    <div className="container">
      <h1 className="my-2"> About Us</h1>  
      { /* <div className="accordion" id="accordionExample" style={myStyle}> */}
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              // style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              About
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
          {/*</div> <div className="accordion-body" style={myStyle}> */}
            <div className="accordion-body">
              <strong>This website is created by Shivam Mudotia just for learning purposes.</strong>
            </div>
          </div>
        </div>
      </div>
      {/*<div className="container my-3" >
      <button onClick = {toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
  </div> */}
      
    </div>
  );
}
