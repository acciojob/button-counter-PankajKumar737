import React, {useState} from 'react'


function Button(){

    const [count, setCount] = useState(0);
    return(
        <div>
            <h5>Button clicked {count} times</h5>
            <button onClick={() => setCount(count+1)}>click me</button>
        </div>   
    );
}

export default Button;