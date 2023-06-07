import React ,{useState}from 'react'

export default function TextBox(props) {

    const[text,setText]=useState("");
    const handleonchange=(event)=>{
        //console.log("change");
        setText(event.target.value);

    }
    const handleupchange=()=>{
        //console.log("upchange");
         let newtext =text.toUpperCase();
         setText(newtext);
        props.showAlert("changed to uppercase","success");
      }
    const handlelowchange=()=>{
            //console.log("upchange");
             let newtext =text.toLowerCase();
            setText(newtext);
            props.showAlert("changed to lowercase","success");}
    const handleclearchange=()=>{
            let newtext ='';
            setText(newtext);
            props.showAlert("cleared","success");}
    const speak = () => {
                let msg = new SpeechSynthesisUtterance();
                msg.text = text;
                window.speechSynthesis.speak(msg);
               props.showAlert("spoke","success");
              }       
        
  return (
    <>
    <div style={{color:props.mode==='dark'? 'white' : 'black'}}>
        <h1 >{props.title}</h1>
      <div className="container mb-3">
         <textarea className="form-control" value={text} style={{background:props.mode==='dark'? 'grey' : 'white',color:props.mode==='dark'? 'white' : 'black'}}onChange={handleonchange} id="emybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleupchange}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handlelowchange}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleclearchange}>Clear text</button>
      <button type="submit" onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button> 
        </div>
    <div className="container mb-3" style={{color:props.mode==='dark'? 'white' : 'black'}}>
       <h2>Your Text Summary</h2>
       <p>{ text.split(" ").length}words and {text.length}characters</p>
       <p>{0.008*text.split(" ").length}Min Read</p>
       <h3>PREVIEW</h3>
       <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  )
}
