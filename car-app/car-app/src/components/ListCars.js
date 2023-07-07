import React, { useEffect, useState } from "react";
import { Container, Typography } from "@material-ui/core";

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

    console.log(cars);

    return (
        <Container>
            <Typography variant="h5">Car List</Typography>
        </Container>
    );
}
 
export default ListCars;