import axios from 'axios'
import { useState } from 'react'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';


const Weather = () => {
    const [zipCode, setZipcode] = useState('22309')

    const [temp, setTemp] = useState('')
    const [city, setCity] = useState('Alexandria')

    const getWeather = (zipCode) => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`)
        .then(res => {
            // console.log(
            //     res.data.city.name,
            //     res.data.list[1].main.temp
            //     )
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

    }

    return (
        <Container sx={{ maxWidth: "250px" }}>
            <Typography variant='h5'sx={{ paddingTop: "5px" }}>
                {`Temperature:`}
            </Typography>
            <FormControl
                margin='normal'
                fullWidth='true'
            >
                <form onSubmit={onSubmit}>
                    <TextField
                        sx={{ width: "100%"}}
                        label="ZIP Code"
                        value={zipCode}
                        onChange={(e) => {setZipcode(e.target.value)}}
                    >
                    </TextField>
                    <br />
                    <Button
                        sx={{ width: "100%" }}
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
        </Container>
    );
}
 
export default Weather;