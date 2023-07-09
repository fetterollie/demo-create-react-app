import React, { useEffect, useState } from "react";
import { Container, Typography } from "@material-ui/core";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const ListCars = () => {

    const [cars, setCars] = useState([])

    const getCars = async () => {
        try{

            const response = await fetch("http://localhost:5000/cars");
            const jsonData = await response.json();

            setCars(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getCars();
    }, []);

    //output
    console.log(cars);

    return (
        <Container>
            <Typography variant="h5">Car List</Typography>
            {cars.map(car => (
                <Card sx={{ width: "300px" }}>
                    <CardContent>
                        <Typography>
                            <img 
                                src={car.imgurl ? car.imgurl : "https://www.insticc.org/node/TechnicalProgram/56e7352809eb881d8c5546a9bbf8406e.png"}
                                width='200px'
                            />
                        </Typography>
                        <Typography variant="h6">{car.make ? car.make : "N/A"}</Typography>
                        <Typography>{`Year: ${car.year ? car.year : "N/A"} Model: ${car.model ? car.model : "N/A"} Color: ${car.color ? car.color : "N/A"}`}</Typography>
                    </CardContent>
                </Card>
            ))}
        </Container>
    );
}
 
export default ListCars;