import { Typography } from '@mui/material';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/material/Box'


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


        <Container>
            <Typography variant='h5'>
                Clicker
            </Typography>
            <Box 
                sx={{
                    width: "150px"
                }}
            >
            <Button
                sx={{ width: "100%" }}
            >
                {count}
            </Button>
            <br/>
            <Button 
                sx={{ width: "50%" }}
                variant='contained'
                onClick={handleClickSub}
            >
                <RemoveIcon />
            </Button>
            <Button  
                sx={{ width: "50%" }}
                variant='contained'
                onClick={handleClickAdd}
            >
                <AddIcon />
            </Button>
            </Box>
        </Container>
     );
}
 
export default Clicker;