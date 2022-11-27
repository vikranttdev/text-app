import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to Upper Case","success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to Lower Case","success");
  };

  const ClearClick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert(" All Text Cleared","success");
  };

  const copyClick = () => {
    console.log("i am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" All Text Copied","success");
  };
  const handleExtraSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert(" Removed Extra Space","success");
  }

  const [text, setText] = useState("Enter the Text here...");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

 
  return (
    <>
     
      <div className="Container" style={{color:props.mode==="light"?"black":"white"}}>
        <h1> {props.heading}</h1>
        <div className="mb-3">
          <textarea style={{backgroundColor:props.mode==="light"?"white":"rgb(4,39,67)",color:props.mode==="light"?"black":"white"}}
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-3" onClick={ClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-3" onClick={copyClick}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleExtraSpace}>
        Remove Extra Space
        </button>
      </div>
      <div className="Container my-3"style={{color:props.mode==="light"?"black":"white"}}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/ ).filter((element)=>{return element.length!==0 }).length}words and {text.length}characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0 }).length}Minutes to Read</p>
        <h2>Preview Text </h2>
        <p>{text.length>0?text:"Enter the text to Preview here"}</p>
      </div>
    </>
  );
}
