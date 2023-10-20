import React,{useState} from 'react'

export default function Form() {
    const[text , setText]=useState("");
    const[Uppertext , setUppertext]=useState("");
    let handleOnChange=(event)=>{
        console.log(event.target.value);
        setText( event.target.value);

    }
    let UpdateDataUp=()=>{
        let newdata=text.toUpperCase();
        console.log(newdata);
        setUppertext(newdata)
    }
    let UpdateDataLo=()=>{
      let newdata=text.toLowerCase();
      console.log(newdata);
      setUppertext(newdata)
  }
  let ClearData=()=>{

    setText("")
    let newdata='';
    console.log(newdata);
    setUppertext(newdata)
}

const[style,setStyle]= useState({
  color:"black",
  backgroundColor:"white",
  
 })
 const[btnText,setBtnText]=useState("Enable dark mode")
 const myStyle=()=>{
  if(style.color==='black'){
      setStyle({
          color:"white",
      backgroundColor:"black",
      border:"1px solid white",
      
      })
      setBtnText("Enable light mode")
  }
  else{
      setStyle({
          color:"black",
      backgroundColor:"white"
      })
      setBtnText("Enable dark mode")
  }
 
 }
  return (
    <>
    <div className='container-fluid vh-100' style={style}>
    <div className='container'>
      <h1 className='my-3'>Enter your text below</h1>
      <textarea style={style}  className="form-control my-3" onChange={handleOnChange} placeholder='enter your text'  id="Textarea1" rows="5"></textarea> 
      <button onClick={ ()=>UpdateDataUp()} className='btn btn-primary my-2 mx-1'>convert to uppercase</button>
      <button onClick={ ()=>UpdateDataLo()} className='btn btn-primary my-2 mx-1'>convert to uppercase</button>
      <button onClick={ ()=>ClearData()} className='btn btn-primary my-2 mx-1'>clear</button>
      <button onClick={myStyle} className='btn btn-primary my-3'>{btnText}</button>
      <textarea style={style} className="form-control my-3" readOnly placeholder='your uppercase text will be here' value={Uppertext}  id="Textarea1" rows="5"></textarea>
      <div className='row'>
        <div className='col-lg-6'>
        <h3>No of words is given below</h3>
        <h6>{text.split(" ").length}</h6>
        </div>
        <div className='col-lg-6'>
        <h3>No of characters is given below</h3>
        <h6>{text.length}</h6>
        </div>
      </div>
      
      
      
    </div>
    </div>

    </>
  )
}
