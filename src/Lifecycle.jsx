import React,{useState,useEffect} from 'react';
function Lifecycle(){
    const [count,setCount]=useState(0)
    const [color,setColor]=useState("green");
    useEffect(() => {
        alert(`Count: ${count} and Color: ${color}`)
    },[count,color])
    function addCount(){
        setCount(c=>c+1);
    }
    function subCount(){
        setCount(c=>c-1);
    }
    function changeColor(){
        setColor(c=>c==="green" ? "red" : "green");
    }

    return(<>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subCount}>Subtract</button><br></br>
        <button onClick={changeColor}>Change Color</button>
        </>
        
    );


}
export default Lifecycle