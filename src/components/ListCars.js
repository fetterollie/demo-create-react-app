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
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import '../Styles/ListCars.scss';



const ListCars = ({ token }) => {

    const [cars, setCars] = useState([])

    // state for filtering
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [color, setColor] = useState('');
    const [year, setYear] = useState('');
    const [powerwindows, setPowerwindows] = useState(false);
    const [powerlocks, setPowerlocks] = useState(false);
    const [backupcamera, setBackupcamera] = useState(false);

    const [filters, setFilters] = useState({
        make: "",
        model: "",
        color: "",
        year: "",
        powerwindows: false,
        powerlocks: false,
        backupcamera: false
    })

    const handleFilterUpdate = (event) => {
        event.preventDefault();
        setFilters({
            make: make,
            model: model,
            color: color,
            year: year,
            powerwindows: powerwindows,
            powerlocks: powerlocks,
            backupcamera: backupcamera
        })

        getCars();
    }


    // delete cars function
    const deleteCar = async (id) => {
        try {
            const deleteCar = await fetch(`http://localhost:5000/cars/${id}`, {
                method: "DELETE"
            });

            setCars(cars.filter(car => car.car_id !== id));
            window.location = "./vehicledisplay"

        } catch (err) {
            console.error(err.message);
        }
    };

    // get cars from database and filter
    const getCars = async () => {
        try{

            const response = await fetch("http://localhost:5000/cars");
            const carsData = await response.json();
            
            // console.log(carsData)

            let carsClonedArray = structuredClone(carsData)
            

            Object.entries(filters).forEach(([key, value], idx) => {
                console.log(`key: ${key}, value: ${value}`);
                // console.log(carsData.filter((car) => (car[key] === value)))
                let tempArray = carsClonedArray
                if (value && typeof value === 'string') {
                    tempArray = carsClonedArray.filter((car) => (car[key].toString() === value))
                } else if (value && typeof value === 'boolean') {
                    tempArray = carsClonedArray.filter((car) => (car[key] === value))
                } 

                // console.log('tempArray: ', tempArray)
                carsClonedArray = tempArray
            })

            console.log('result: ', carsClonedArray)

            console.log("BREAK")

            carsClonedArray === carsData ? setCars(carsData): setCars(carsClonedArray);

        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getCars();
    }, []);

    useEffect(() => {
        getCars();
    }, [filters]);


    return (
        <Container className="head">
            <Typography sx={{ marginTop: "10px" }}
                variant='h5'
            >
                Filter Cars
            </Typography>
            <form className="form" onSubmit={handleFilterUpdate}>
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
                    <FormControlLabel 
                        control={<Checkbox onChange={e => setPowerwindows(!powerwindows)} />} 
                        label="Power Windows" />
                    <FormControlLabel 
                        control={<Checkbox onChange={e => setPowerlocks(!powerlocks)} />} 
                        label="Power Locks" />
                    <FormControlLabel 
                        control={<Checkbox onChange={e => setBackupcamera(!backupcamera)} />} 
                        label="Back-up Camera" 
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

       
            <Typography className="head" variant="h5">
                Car List
            </Typography>
            <Grid 
                container 
                spacing={4} 
                // xs={12}
                direction="column-reverse"
                alignItems="center"
                // justifyContent="center"
                sx={{ paddingLeft: "0px" }}
            >
                {cars.map(car => (
                <Grid key={`listcar${car.car_id}`} item xs={4} sx={{ paddingLeft: '0px' }}>
                    <Grid
                        item
                        xs={4}
                        alignItems="center"
                        justifyContent="center"
                        sx={{ paddingLeft: "opx" }}
                    >
                        <Card sx={{ width: "300px", paddingLeft: "0px" }}>
                            <CardContent>
                                <InfoModalCar car={car} />
                                {token === 'manager' ? 
                                    <Stack direction="row">
                                        <EditCar car={car} />
                                        <Button color="error" onClick={() => {deleteCar(car.car_id)}}>
                                            <DeleteForeverIcon/>
                                        </Button>
                                    </Stack> : 
                                    <div></div>
                                }
                            </CardContent>
                        </Card>
                    </Grid>
                    
                </Grid>
                ))}
            </Grid>
        </Container>
    );
}
 
export default ListCars;