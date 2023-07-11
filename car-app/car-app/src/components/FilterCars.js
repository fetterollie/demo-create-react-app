import { Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import InfoModalCar from './InfoModalCar';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import EditCar from "./EditCar";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Stack from '@mui/material/Stack';




const FilterCars = ({ cars }) => {

    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [color, setColor] = useState('');
    const [year, setYear] = useState('');

    const [finalArray, setFinalArray] = useState([]);

    const [submitting, setSubmitting] = useState(false);


    const onSubmitForm = (event) => {
        event.preventDefault();
        setSubmitting(true);

        const makeArray = cars.filter((cars) => (cars.make === make));
        const modelArray = cars.filter((cars) => (cars.model === model));
        const colorArray = cars.filter((cars) => (cars.color === color));
        const yearArray = cars.filter((cars) => (cars.year === year));

        const catArr = makeArray.concat(modelArray, colorArray, yearArray);

        // console.log(make, model, color, year);
        // console.log(cars)
        // console.log(colorArray)

        // removing duplicates in array
        function removeDupes(catArr) {
            const returnCarArray = [];
      
            catArr.forEach((car) => {
              const foundCar = returnCarArray.find((item => ( item.car_id !== null && (item.car_id === car.car_id))))
              if(!foundCar) {
                returnCarArray.push(car);
              }});
            setFinalArray(returnCarArray);
        };

        console.log(catArr);
        
        removeDupes(catArr);

        console.log(finalArray);


        setTimeout(() => {
            setSubmitting(false);
        }, 2000)
        console.log(finalArray);
    };

    return (
        <Container>
            <Typography
                variant='h7'
            >
                Filter Cars
            </Typography>
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
            {finalArray.map(car => (
                    <Grid item xs={12}>
                        <Card sx={{ width: "300px" }}>
                            <CardContent>
                                <Grid
                                    item
                                    spacing={12} 
                                    xs={12}
                                    direction="column"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <InfoModalCar car={car} />
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
            ))}
        </Container>
    );
}
 
export default FilterCars;