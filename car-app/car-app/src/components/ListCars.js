import React, { useEffect, useState } from "react";
import { Container, Typography } from "@material-ui/core";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import EditCar from "./EditCar";
import InfoModalCar from "./InfoModalCar";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Stack from '@mui/material/Stack';
import FilterCars from "./FilterCars";
import Grid from '@mui/material/Grid';





const ListCars = () => {

    const [cars, setCars] = useState([])

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
            <Typography variant="h5">Car List</Typography>
            <Grid>
                <FilterCars cars={cars} />
            </Grid>
            <Grid 
                container 
                spacing={12} 
                xs={12}
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                {cars.map(car => (
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
                                    <Stack direction="row">
                                        <EditCar car={car} />
                                        <Button color="error" onClick={() => {deleteCar(car.car_id)}}>
                                            <DeleteForeverIcon/>
                                        </Button>
                                    </Stack>
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