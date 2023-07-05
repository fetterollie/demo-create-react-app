import React, { useEffect, useState } from 'react';
import api from './api/carList'
import { Button, Card, CardContent, CardMedia, Container, TextField, Typography } from '@material-ui/core';

// import './App.css';


const Cars = () => {
    const [carList, setCarList] = useState([

    ])

  useEffect(() => {
    const fetchCars = async () => {
      try{
        const response = await api.get('/carList'); //endpoint
        // axios automatically catches errors outside of the 200 range.
        setCarList(response.data);
      } catch (err) {
        if (err.response) {
        // Not in the 200 response range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
        } else {
          // possible no response, 404, or something else occured
          console.log(`Error: ${err.message}`)
        }
      }
    }
    fetchCars();
    // console.log(`carList: ${carList}`)
  }, [])

  const [submitting, setSubmitting] = useState(false);

  // a place to hold submitted values  
  const [model, setModel] = useState('');
  const [color, setColor] = useState('');
  const [year, setYear] = useState('');

  const [finalArr, setFinalArr] = useState([]);
  // const [filteredFinalArr, setFilteredFinalArr] = useState([]);



  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    const modelArr = carList.filter((carList) => (carList.model === {model}.model))
    const colorArr = carList.filter((carList) => (carList.color === {color}.color))
    const yearArr = carList.filter((carList) => (carList.year === {year}.year))

    const catArr = modelArr.concat(colorArr, yearArr)

    // function to remove duplicates & setFinalArr 
    function removeDupes(catArr) {
      const returnCarArray = [];

      catArr.forEach((car) => {
        const foundCar = returnCarArray.find((item => ( item.id !== null && (item.id === car.id))))
        if(!foundCar) {
          returnCarArray.push(car);
        }});
      setFinalArr(returnCarArray);
      // console.log(finalArr)
    }
    //invoke remove dupes
    removeDupes(catArr)

    setTimeout(() => {
        setSubmitting(false);
    }, 2000)
  }

  

  const loremIpsum = "Lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    return (
        <Container>
            <Typography variant='h5'>
              Cars
            </Typography>
                <form onSubmit={handleSubmit} className='' >
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
                  <div>
                    <Button 
                      type="submit"
                      variant='contained'
                    >
                      Submit
                    </Button>
                  </div>
                </form>

                <div>
                  <Typography variant='h6'>
                    {`Search Results for: ${model} ${color} ${year}`}
                  </Typography>

                  {finalArr?.map((car) => {
                    return (
                      <div key={car.id}>
                        <Card sx={{ maxWidth: 200 }}>
                          <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                              <img 
                                src={car.image}
                                width='200px'
                              />
                            </Typography>
                            <Typography 
                              gutterBottom
                              variant='h6'
                              component="div"
                            >
                              {car.model}
                            </Typography>
                            <Typography
                              sx={{ fontSize: 14}}
                              variant='body2'
                              color='text.secondary'
                              gutterBottom
                            >
                              {`${car.color} ${car.model} built in ${car.year}. ${loremIpsum}`}
                            </Typography>
                          </CardContent>
                        </Card>
                      </div>
                      
                      // <ul key={car.id}>
                      //   <li class>{ car.model }  { car.color }  { car.year } <img className="thumbnail" src={car.image} /> </li>
                      // </ul>
                    );
                  })}
                </div>
        </Container>
    );
}
 
export default Cars;