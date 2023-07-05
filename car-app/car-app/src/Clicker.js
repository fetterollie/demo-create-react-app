import { Button, TextField, Typography } from '@mui/material';
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
            <Typography variant='h5'>
                Clicker
            </Typography>
            <Button>
                {count}
            </Button>
            <Button 
                variant='contained'
                onClick={handleClickSub}
            >
                -
            </Button>
            <Button  
                variant='contained'
                onClick={handleClickAdd}
            >
                +
            </Button>

        </div>
     );
}
 
export default Clicker;