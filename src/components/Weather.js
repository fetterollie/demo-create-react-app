import axios from 'axios'
import { useState } from 'react'
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Weather = () => {
    const [zipCode, setZipcode] = useState('22309')

    const [temp, setTemp] = useState('')
    const [city, setCity] = useState('Alexandria')

    // retrieve weather data from api via axios
    const getWeather = (zipCode) => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`)
        .then(res => {
                setTemp(res.data.list[1].main.temp)
                setCity(res.data.city.name)
        }).catch(err => {
            console.log(err)
        })
    };

    const onSubmit = (e) => {
        e.preventDefault()
        if(!zipCode) {
            alert('Please input a ZIP code.')
            return
        }
        
        getWeather(zipCode)
    };

    return (
        <Box className="widgetBox">
            <Typography 
                variant='h5'
                className='widgetTitle'
            >
                {`Temperature:`}
            </Typography>
            <FormControl
                margin='normal'
                fullWidth={true}
            >
                <form onSubmit={onSubmit}>
                    <TextField
                        sx={{ width: "250px"}}
                        label="ZIP Code"
                        value={zipCode}
                        onChange={(e) => {setZipcode(e.target.value)}}
                    >
                    </TextField>
                    <br />
                    <Button
                        sx={{ width: "250px" }}
                        type='submit'
                        variant='contained'
                    >
                        Get Temperature
                    </Button>
                </form>
            </FormControl>
            <Typography>
                {temp && city ? (`The current temperature in ${city} is ${Math.round(temp * 10) / 10}F.`) : ''}
            </Typography>
        </Box>
    );
}
 
export default Weather;