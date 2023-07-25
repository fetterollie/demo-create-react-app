import React, { useEffect, useState } from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
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
import '../Styles/Global.scss';

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

            let carsClonedArray = structuredClone(carsData)
            
            Object.entries(filters).forEach(([key, value], idx) => {
                // console.log(`key: ${key}, value: ${value}`);
                // console.log(carsData.filter((car) => (car[key] === value)))
                let tempArray = carsClonedArray
                if (value && typeof value === 'string') {
                    tempArray = carsClonedArray.filter((car) => (car[key].toString() === value))
                } else if (value && typeof value === 'boolean') {
                    tempArray = carsClonedArray.filter((car) => (car[key] === value))
                } 

                carsClonedArray = tempArray
            })

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
        <Container className="body">
            <Typography 
                className="page__title"
                variant="h5"
            >
                Filter Cars
            </Typography>
            <Container
                className="head"
            >
                <form onSubmit={handleFilterUpdate}>
                    <Grid 
                        className="carInput" 
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="stretch"
                        spacing={12}
                    >
                            <Grid 
                                item
                                xs={12}
                                md={6}
                            >
                                <TextField
                                className="carInputForm"
                                label='Add Make'
                                value={make}
                                onChange={e => setMake(e.target.value)}
                                />
                            </Grid>
                            <Grid 
                                item
                                xs={12}
                                md={6}
                            >
                                <TextField
                                className="carInputForm"
                                label='Add Model'
                                value={model}
                                onChange={e => setModel(e.target.value)}
                                />
                            </Grid>
                            <Grid 
                                item
                                xs={12}
                                md={6}
                            >
                                <TextField
                                className="carInputForm"
                                label='Add Color'
                                value={color}
                                onChange={e => setColor(e.target.value)}
                                />
                            </Grid>
                            <Grid 
                                item
                                xs={12}
                                md={6}
                            >
                                <TextField
                                className="carInputForm"
                                label='Add Year'
                                value={year}
                                onChange={e => setYear(e.target.value)}
                                />
                            </Grid>
                            <Grid 
                                item
                                xs={12}
                                md={3}
                            >
                                <FormControlLabel 
                                control={<Checkbox onChange={e => setPowerwindows(!powerwindows)} />} 
                                label="Power Windows" />
                            </Grid>
                            <Grid 
                                item
                                xs={12}
                                md={3}
                            >
                                <FormControlLabel 
                                control={<Checkbox onChange={e => setPowerlocks(!powerlocks)} />} 
                                label="Power Locks" />
                            </Grid>
                            <Grid 
                                item
                                xs={12}
                                md={3}
                            >
                                <FormControlLabel 
                                control={<Checkbox onChange={e => setBackupcamera(!backupcamera)} />} 
                                label="Back-up Camera" />
                            </Grid>
                            <Grid 
                                item
                                xs={12}
                                md={3}
                            >
                                <Button 
                                    type="submit"
                                    variant='contained'
                                >
                                    Submit Filters
                                </Button>
                            </Grid>
                        
                    </Grid>
                </form>
            </Container>

       
            <Typography className="page__title" variant="h5">
                Car List
            </Typography>
            <Grid 
                container 
                spacing={8} 
            >
                {cars.map(car => (
                    <Grid
                        item
                        key={`listcar${car.car_id}`}
                        xs={12}
                        md={6}
                        lg={4}
                        alignItems="center"
                        justifyContent="center"
                        sx={{ paddingLeft: "0px" }}
                    >
                        <Card>
                            <CardContent >
                                <InfoModalCar car={car} deleteCar={deleteCar} token={token}/>
                                {token === 'manager' ? 
                                    <Grid 
                                        className="car__card__items"
                                        container
                                        direction="row"
                                        justifyContent="flex-start"
                                        alignItems="flex-start"
                                    >
                                        <Grid
                                            item
                                            // xs={4}
                                        >
                                            <EditCar car={car} />
                                        </Grid>
                                        <Grid
                                            item
                                            // xs={4}
                                        >
                                            <Button  variant="outlined" color="error" onClick={() => {deleteCar(car.car_id)}}>
                                                <DeleteForeverIcon/>
                                                Delete
                                            </Button>
                                        </Grid>
                                    </Grid>
                                    : 
                                    <></>
                        }
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
 
export default ListCars;