import React, {useState} from 'react'


function Button(){

    const [count, setCount] = useState(0);
    return(
        <div>
            <p>Button clicked {count} times</p>
            <button onClick={() => setCount(count+1)}>click me</button>
        </div>   
    );
}

export default Button;