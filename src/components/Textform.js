// rfc shortcut to cerate file

import React, {useState} from 'react'



export default function Textform(props) {
    const handleUpClick = () => {
        //console.log("UpperCase was clicked" + "  Original Text  ->   "  + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to Upper Case', 'success');
    }
    const handleLoClick = () => {
        //console.log("UpperCase was clicked" + "  Original Text  ->   "  + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Converted to Lower Case', 'success');
    }
    const handleClearClick = () => {
        //console.log("UpperCase was clicked" + "  Original Text  ->   "  + text)
        setText('')
        props.showAlert('Text Cleared', 'success');
    }
    const handleOnChange = (event) => {
        //console.log("on Change")
        setText(event.target.value)

    }
    const [text, setText] = useState('');
    console.log()
    return (
        <>
          <div className="container" style={{color: props.mode==='dark'?'white':'#0f5398'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#0f5398'}} id="MyBox" rows="8"></textarea>
            </div>
            <button className="btn btn-info mx-1 my-1" style={{color: props.mode==='dark'?'#0f5398':'#0f5398'}} onClick={handleUpClick}> Convert to Uppercase </button>
            <button className="btn btn-info mx-1 my-1" style={{color: props.mode==='dark'?'#0f5398':'#0f5398'}} onClick={handleLoClick}> Convert to Lowercase </button>
            <button className="btn btn-info mx-1 my-1" style={{color: props.mode==='dark'?'#0f5398':'#0f5398'}} onClick={handleClearClick}> Clear Text</button>
          </div>
          <div className="container my-4" style={{color: props.mode==='dark'?'white':'#0f5398'}}>
              <h2>Your Text Summary</h2>
              <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} Charcters</p>
              <p> {0.008 * text.split(" ").length} Minutes read</p>
              <h2>Preview</h2>
              <p> {text}</p>
          </div> 
    </>
    )
}
