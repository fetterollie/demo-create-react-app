import { useState } from 'react';

const Clicker = () => {
    // hook taht establishes dynamic count variable with inital value of 0
    let [count, setCount] = useState(0)

    // add to counter
    const handleClickAdd = () => {
        setCount(count += 1);
    }
    //subtract from counter
    const handleClickSub = () => {
        setCount(count -= 1)
    }

    return (


        <div className='container'>
            <h2>Clicker</h2>
            <p>{ count } </p>
            <button  className='btn' onClick={handleClickSub}>-</button>
            <button  className='btn' onClick={handleClickAdd}>+</button>

        </div>
     );
}
 
export default Clicker;