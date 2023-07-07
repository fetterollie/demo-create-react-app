import { Button, Container, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';

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

            console.log(response)
        } catch (err) {
            console.error(err.message);
        }
    };

    return ( 
        <Container>
            <Typography variant='h5'>Input Car</Typography>
            <form onSubmit={onSubmitForm} className='' >
                <TextField
                    label='Add Make'
                    variant='outlined'
                    value={make}
                    onChange={e => setMake(e.target.value)}
                />
                <TextField
                    label='Add Model'
                    variant='outlined'
                    value={model}
                    onChange={e => setModel(e.target.value)}
                />
                <TextField
                    label='Add Color'
                    variant='outlined'
                    value={color}
                    onChange={e => setColor(e.target.value)}
                />
                <TextField
                    label='Add Year'
                    variant='outlined'
                    value={year}
                    onChange={e => setYear(e.target.value)}
                />
                <TextField
                    label='Add Image URL'
                    variant='outlined'
                    value={imgUrl}
                    onChange={e => setImgUrl(e.target.value)}
                />
                  <div>
                    <Button 
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