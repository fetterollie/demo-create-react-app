import React, { useEffect, useState } from "react";
import { Container, Typography } from "@material-ui/core";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import EditCar from "./EditCar";
import InfoModalCar from "./InfoModalCar";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';


const ListCars = ({ token }) => {

    const [cars, setCars] = useState([])

    // state for filtering
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [color, setColor] = useState('');
    const [year, setYear] = useState('');

    // state after filter
    const [finalArray, setFinalArray] = useState();

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

    // delete cars function
    const deleteCar = async (id) => {
        try {
            const deleteCar = await fetch(`http://localhost:5000/cars/${id}`, {
                method: "DELETE"
            });

            setCars(cars.filter(car => car.car_id !== id));
            window.location = "./vehicledisplay"
            // console.log(deleteCar);
        } catch (err) {
            console.error(err.message);
        }
    };

    // get cars from database
    const getCars = async () => {
        try{

            const response = await fetch("http://localhost:5000/cars");
            const jsonData = await response.json();
            
            // console.log(jsonData);
            setCars(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getCars();
    }, []);

    //output
    // console.log(cars);

    return (
        <Container>
            <Typography
                variant='h5'
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
            <Typography variant="h5">
                {finalArray ? `Filtered Car List` : "Car List"}
            </Typography>
            <Grid 
                container 
                spacing={12} 
                // xs={12}
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                {finalArray ? finalArray.map(car => (
                    <Grid key={`listcar${car.car_id}`} item xs={12}>
                        <Card sx={{ width: "300px" }}>
                            <CardContent>
                                <Grid
                                    item
                                    xs={12}
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <InfoModalCar car={car} token={token}/>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                )) : cars.map(car => (
                    <Grid key={`listcar${car.car_id}`} item xs={12}>
                        <Card sx={{ width: "300px" }}>
                            <CardContent>
                                <Grid
                                    item
                                    xs={12}
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <InfoModalCar car={car} />
                                    {token === 'manager' ? <Stack direction="row">
                                        <EditCar car={car} />
                                        <Button color="error" onClick={() => {deleteCar(car.car_id)}}>
                                            <DeleteForeverIcon/>
                                        </Button>
                                    </Stack> : <div></div>}
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
 
export default ListCars;