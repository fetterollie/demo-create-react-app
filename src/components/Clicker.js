import { Typography } from '@mui/material';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';


const Clicker = () => {
    // hook that establishes dynamic count variable with inital value of 0
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
        <Box sx={{ maxWidth: "250px", paddingLeft: "0px" }}>
            <Typography variant='h5' sx={{ paddingTop: "5px" }}>
                Counter
            </Typography>
            <FormControl
                margin='normal'
                fullWidth={true}
            >
                <Box 
                    sx={{
                        width: "250px"
                    }}
                >
                    <TextField 
                        sx={{ width: "100%"}}
                        label="Count"
                        value={count}
                    />
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
            </FormControl>
        </Box>
     );
}
 
export default Clicker;