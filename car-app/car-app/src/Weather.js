import axios from 'axios'
import { useState } from 'react'

const Weather = () => {
    const [zipCode, setZipcode] = useState('22309')
    const [apiKey, setApiKey] = useState('c781fb375508389dad4c78e819f52b1c')
    const [temp, setTemp] = useState('')
    const [city, setCity] = useState('Alexandria')

    const getWeather = (zipCode) => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&appid=${apiKey}&units=imperial`)
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
            <h3>
                {`Temperature:`}
            </h3>
            <p>{temp && city ? (`The current temperature in ${city} is ${Math.round(temp * 10) / 10}F.`) : 'No Temperature Info'}</p>
                <form className='add-form' onSubmit={onSubmit}>
                    <div className="form-control">
                        <label>ZIP Code</label>
                        <input type='text' placeholder="Input ZIP Code" value={zipCode} onChange={(e) => {setZipcode(e.target.value)}} />
                    </div>
                    <input type='submit' value='Get Temperature' className="btn btn-block" />
                </form>
            {/* <button className='btn' onclick={getWeather()}>Get Temperature</button> */}
        </div>
    );
}
 
export default Weather;