import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="counter">
            <p>Count: {count}</p>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>

    );
}
 
export default Counter;