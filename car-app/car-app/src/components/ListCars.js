import React, { useEffect, useState } from "react";
import { Container, Typography } from "@material-ui/core";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import EditCar from "./EditCar";
import InfoModalCar from "./InfoModalCar";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Stack from '@mui/material/Stack';




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
            {cars.map(car => (
                <Card sx={{ width: "300px" }}>
                    <CardContent>
                        <InfoModalCar car={car} />
                        {/* <Typography>
                            <img 
                                src={car.imgurl ? car.imgurl : "https://www.insticc.org/node/TechnicalProgram/56e7352809eb881d8c5546a9bbf8406e.png"}
                                width='200px'
                            />
                        </Typography> */}
                        {/* <Typography variant="h6">
                            {car.make ? car.make : "N/A"}
                        </Typography>
                        <Typography>{car.model ? car.model : "N/A"}</Typography> */}
                        {/* <Typography>{`Year: ${car.year ? car.year : "N/A"} Model: ${car.model ? car.model : "N/A"} Color: ${car.color ? car.color : "N/A"}`}</Typography> */}
                        <Stack direction="row">
                            <EditCar car={car} />
                            <Button color="error" onClick={() => {deleteCar(car.car_id)}}><DeleteForeverIcon/></Button>
                        </Stack>
                    </CardContent>
                </Card>
            ))}
        </Container>
    );
}
 
export default ListCars;