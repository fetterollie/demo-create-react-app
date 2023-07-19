import axios from 'axios'
import { useState } from 'react'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const NasaPod = () => {

    const [date, setDate] = useState('2023-07-12')
    const [nasaImage, setNasaImage] = useState()

    // retrieve NASA image data from api via axios
    const getNasaPod = (date) => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${date}`)
        .then(res => {
            setNasaImage(res.data.url)
        }).catch(err => {
        })
    };

    const onSubmit = (e) => {
        e.preventDefault()
        if(!date) {
            alert('Please input a valid date.')
            return
        }

        getNasaPod(date)
    };

    return (
        <Box className="widgetBox">
            <Typography 
                variant='h5'
                className='widgetTitle'
            >
                {`NASA PoD`}
            </Typography>
            <FormControl
                margin='normal'
                fullWidth={true}
            >
                <form onSubmit={onSubmit}>
                    <TextField
                        sx={{ width: "250px"}}
                        label="Date"
                        value={date}
                        onChange={(e) => {setDate(e.target.value)}}
                    >
                    </TextField>
                    <br />
                    <Button
                        sx={{ width: "250px" }}
                        type='submit'
                        variant='contained'
                    >
                        Render NASA Picture
                    </Button>
                </form>
            </FormControl>
            <Typography sx={{ maxWidth: "250px" }}>
                <img src={nasaImage} width="250px" />
            </Typography>
        </Box>
    );
}
 
export default NasaPod;