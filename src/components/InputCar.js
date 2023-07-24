import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../Styles/Global.scss';
import Grid from '@mui/material/Grid';

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
            <Typography className='page__title' variant='h5'>
                Input Car
            </Typography>
            <form onSubmit={onSubmitForm} className='head' >
                <Grid 
                    className="carInput" 
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="stretch"
                    spacing={12}
                >
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <TextField
                            className="carInputForm"
                            label='Add Make'
                            variant='filled'
                            value={make}
                            onChange={e => setMake(e.target.value)}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <TextField
                            className="carInputForm"
                            label='Add Model'
                            variant='filled'
                            value={model}
                            onChange={e => setModel(e.target.value)}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <TextField
                            className="carInputForm"
                            label='Add Color'
                            variant='filled'
                            value={color}
                            onChange={e => setColor(e.target.value)}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <TextField
                            className="carInputForm"
                            label='Add Year'
                            variant='filled'
                            value={year}
                            onChange={e => setYear(e.target.value)}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                    >
                        <TextField
                            className="carInputForm"
                            label='Add Image URL'
                            variant='filled'
                            value={imgUrl}
                            onChange={e => setImgUrl(e.target.value)}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                    >
                        <Button 
                            type="submit"
                            variant='contained'
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
     );
}
 
export default InputCar;