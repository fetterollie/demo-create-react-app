import { Button, FormControl, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useState } from 'react'


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
        <div className="container">
            <Typography variant='h5'>
                {`Temperature:`}
            </Typography>
            <Typography>
                {temp && city ? (`The current temperature in ${city} is ${Math.round(temp * 10) / 10}F.`) : 'No Temperature Info'}
            </Typography>
                <form onSubmit={onSubmit}>
                    <TextField
                        label="ZIP Code"
                        value={zipCode}
                        onChange={(e) => {setZipcode(e.target.value)}}
                    >
                    </TextField>
                    <br/>
                    <Button 
                        type='submit'
                    >
                        Get Temperature
                    </Button>
                </form>
        </div>
    );
}
 
export default Weather;