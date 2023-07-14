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
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


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

    // state after filter
    const [finalArray, setFinalArray] = useState();
    const [finalOptionArray, setFinalOptionArray] = useState();

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
            setFinalOptionArray();
        };

        // console.log(catArr);
        
        removeDupes(catArr);

        // console.log(finalArray);

        setTimeout(() => {
            setSubmitting(false);
        }, 2000)
        // console.log(finalArray);
    };

    const onSubmitOptions = (event) => {
        event.preventDefault();

        const finalFilter = finalArray.filter((finalArray) => (
            finalArray.powerwindows === powerwindows &&
             finalArray.powerlocks === powerlocks &&
             finalArray.backupcamera === backupcamera));
        
        setFinalOptionArray(finalFilter);
        
        
            


        // console.log('I made it this far')
        // console.log(powerwindows, powerlocks, backupcamera)
        // console.log(finalArray)

        // const pwFilterArray = finalArray.filter((finalArray) => (finalArray.powerwindows === powerwindows));
        // const plFilterArray = finalArray.filter((finalArray) => (finalArray.powerlocks === powerlocks));
        // const buFilterArray = finalArray.filter((finalArray) => (finalArray.backupcamera === backupcamera));

        // const catArr = pwFilterArray.concat(plFilterArray, buFilterArray);

        // function removeDupes(catArr) {
        //     const returnCarArray = [];
      
        //     catArr.forEach((car) => {
        //       const foundCar = returnCarArray.find((item => ( item.car_id !== null && (item.car_id === car.car_id))))
        //       if(!foundCar) {
        //         returnCarArray.push(car);
        //       }});
        //     setFinalOptionArray(returnCarArray);
        // };

        // removeDupes(catArr)
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
        <Container sx={{ paddingLeft: "0px"}}>
            <Typography sx={{ marginTop: "10px" }}
                variant='h5'
            >
                Filter Cars
            </Typography>
            <form onSubmit={onSubmitForm}>
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
            {finalArray ? 
                <form onSubmit={onSubmitOptions}>
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
                    <Button 
                        variant="contained" 
                        type="submit" 
                        sx={{ width: "100%" }}
                    >
                        Filter Options
                    </Button>
                </form>
                    :
                <></>
                
                }
            <Typography variant="h5">
                {finalOptionArray ? 'Filtered Car List & Options': 
                (finalArray ? `Filtered Car List` : "Car List")}
            </Typography>
            <Grid 
                container 
                spacing={12} 
                // xs={12}
                direction="column-reverse"
                alignItems="center"
                justifyContent="center"
                sx={{ paddingLeft: "0px" }}
            >
                {/* if finalOptionArray is present, map over it. */}

                {finalOptionArray ? finalOptionArray.map(car => (
                    <Grid key={`listcar${car.car_id}`} item xs={12}>
                        <Card sx={{ width: "300px", paddingLeft: "0px" }}>
                            <CardContent>
                                <Grid
                                    item
                                    xs={12}
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <InfoModalCar car={car} token={token}/>
                                    {token === 'manager' ? 
                                    <Stack direction="row">
                                        <EditCar car={car} />
                                        <Button color="error" onClick={() => {deleteCar(car.car_id)}}>
                                            <DeleteForeverIcon/>
                                        </Button>
                                    </Stack> : 
                                    <div></div>}
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                )) : 
                (finalArray ? finalArray.map(car => (
                    <Grid key={`listcar${car.car_id}`} item xs={12}>
                        <Card sx={{ width: "300px", paddingLeft: "0px" }}>
                            <CardContent>
                                <Grid
                                    item
                                    xs={12}
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <InfoModalCar car={car} token={token}/>
                                    {token === 'manager' ? 
                                    <Stack direction="row">
                                        <EditCar car={car} />
                                        <Button color="error" onClick={() => {deleteCar(car.car_id)}}>
                                            <DeleteForeverIcon/>
                                        </Button>
                                    </Stack> : 
                                    <div></div>}
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                )) : cars.map(car => (
                    <Grid key={`listcar${car.car_id}`} item xs={12} sx={{ paddingLeft: '0px' }}>
                        <Card sx={{ width: "300px", paddingLeft: "0px" }}>
                            <CardContent sx={{ }}>
                                <Grid
                                    item
                                    xs={12}
                                    alignItems="center"
                                    justifyContent="center"
                                    sx={{ paddingLeft: "opx" }}
                                >
                                    <InfoModalCar car={car} />
                                    {token === 'manager' ? 
                                    <Stack direction="row">
                                        <EditCar car={car} />
                                        <Button color="error" onClick={() => {deleteCar(car.car_id)}}>
                                            <DeleteForeverIcon/>
                                        </Button>
                                    </Stack> : 
                                    <div></div>}
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                )))}

                
            </Grid>
        </Container>
    );
}
 
export default ListCars;