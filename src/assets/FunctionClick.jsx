import React,{useState} from 'react'
function FunctionClick(){
    const [click, setClick] = useState("");
    const handleChange=()=>{
    
            setClick("Button Clicked")
        
    }
    return (
<div> <button onClick={handleChange}>Click</button>
        <p>{click}</p></div>
       
    )


}
export default FunctionClick