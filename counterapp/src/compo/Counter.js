import React,{ useState} from "react";

function Counter () {
    const [count,setCount] = useState(0);
    function handleClickIn(){
        setCount(count+1);
        
    }
    function handleClickDe(){
        
        setCount(count-1);
    }

    function reset (){
        setCount(0);
    }
    return ( 
        <div>
            <p>
                count:{count}
            </p>
            <button
                onClick={handleClickIn}>Increment
            </button>
            <button
                onClick={handleClickDe}>decerice
            </button>
            <button
                onClick={reset}> Reset
            </button>
        
        </div>
     );
}

export default Counter;