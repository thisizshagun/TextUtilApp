import React, {useState} from 'react'
export default function TextForm(props) {
  const handleUpClick =()=>{
    //console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase!", "success");
  }
  const handleLoClick =()=>{
    //console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase!", "success");

  }
  const handlealternateClick =()=>{
    //console.log("Uppercase was clicked");
    let newText = text.replace(/\w(.|$)/g, s => s[0].toLowerCase() + (s[1] ? s[1].toUpperCase() : ''));
    setText(newText)
    props.showAlert("Converted to AlternateCase!", "success");

  }
  const handleExtraSpaces =() =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces", "success");
  }
  const handleClear =()=>{
    let newText="";
    setText(newText);
    props.showAlert("Clear", "success");
  }
  const handleOnChange = (event) =>{
    console.log("On Change");
    setText(event.target.value)
  }
  const[text, setText] = useState('Enter text here');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'? 'white' : '#040930'}}>
        <h1>{props.heading} </h1> 
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} 
        style={{backgroungColor: props.mode==='light'?'grey': 'white'}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick ={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-primary mx-1" onClick ={handleLoClick}>Convert to LowerCase</button>
    <button className="btn btn-primary mx-1" onClick ={handlealternateClick}>Convert to AlternateCase</button>
    <button className="btn btn-primary mx-1" onClick ={handleExtraSpaces}>Remove Extra Spaces</button>
    <button className="btn btn-primary mx-1" onClick ={handleClear}>Clear</button>
  </div>
  <div className="container my-3" style={{backgroundcolor: props.mode==='dark'?'Grey':'white',
   color: props.mode==='dark'? 'white' : '#040930'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008* text.split(" ").length} Minutes to read.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Enter something im the above textbox to preview it here"}</p>
  </div>
  </>
  )
}
