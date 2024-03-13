import React,{useState} from 'react'

function Form(){
    const [name,setName]=useState("");
    const handleSubmit=(event)=>{
        event.preventDefault();
        setName(name)

    }
    return(
        <div>
            <p>What is your name?</p>
            <form>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                <input type="submit" onClick={handleSubmit}/>
                <p>Name: {name}</p>
            </form>
            
        </div>
        
    )



}
export default Form