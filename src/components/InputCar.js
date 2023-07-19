import { Container, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const InputCar = () => {
    const [make, setMake] = useState('')
    const [model, setModel] = useState('')
    const [color, setColor] = useState('')
    const [year, setYear] = useState('')
    const [imgUrl, setImgUrl] = useState('')

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { make, model, color, year, imgUrl };
            const response = await fetch("http://localhost:5000/cars", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/vehicleinput";

            // console.log(response)
        } catch (err) {
            console.error(err.message);
        }
    };

    return ( 
        <Container className='body'>
            <Typography className='head' variant='h5'>Input Car</Typography>
            <form onSubmit={onSubmitForm} className='' >
                {/* <FormControl> */}
                    <TextField
                        sx={{ width: "50%" }}
                        label='Add Make'
                        variant='filled'
                        value={make}
                        onChange={e => setMake(e.target.value)}
                    />
                    <TextField
                        sx={{ width: "50%" }}
                        label='Add Model'
                        variant='filled'
                        value={model}
                        onChange={e => setModel(e.target.value)}
                    />
                    <TextField
                        sx={{ width: "50%" }}
                        label='Add Color'
                        variant='filled'
                        value={color}
                        onChange={e => setColor(e.target.value)}
                    />
                    <TextField
                        sx={{ width: "50%" }}
                        label='Add Year'
                        variant='filled'
                        value={year}
                        onChange={e => setYear(e.target.value)}
                    />
                    <TextField
                        sx={{ width: "100%" }}
                        label='Add Image URL'
                        variant='filled'
                        value={imgUrl}
                        onChange={e => setImgUrl(e.target.value)}
                    />
                <div>
                    <Button 
                    sx={{ width: "100%" }}
                    type="submit"
                    variant='contained'
                    >
                    Submit
                    </Button>
                </div>
            </form>
        </Container>
     );
}
 
export default InputCar;