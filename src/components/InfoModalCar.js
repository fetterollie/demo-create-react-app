import React, { useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   bgcolor: 'background.paper',
//   border: '3px solid #546e7a',
//   boxShadow: 24,
//   p: 4,
// };

export default function InfoModalCar({ car }) {
    // state for modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        setMake(car.make);
        setModel(car.model);
        setColor(car.color);
        setYear(car.year);
        setImgUrl(car.imgurl);
    };

    // state
    const [make, setMake] = useState(car.make);
    const [model, setModel] = useState(car.model);
    const [color, setColor] = useState(car.color);
    const [year, setYear] = useState(car.year);
    const [imgUrl, setImgUrl] = useState(car.imgurl);

    return (
        <div id={`id${car.car_id}`}>
            {/* Display Each Car */}
            <Box
                onClick={handleOpen} 
                data-toggle="modal" 
                data-target={`#id${car.car_id}`}
            >
                <Grid 
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                    <Grid 
                        item 
                    >
                        <img 
                            className="car__image"
                            alt={`${car.year} ${car.color} ${car.make} ${car.model}`}
                            src={car.imgurl ? car.imgurl : "https://www.insticc.org/node/TechnicalProgram/56e7352809eb881d8c5546a9bbf8406e.png"}
                            height="200px"
                            bgcolor="#000000"
                        />
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-end"
                    >
                        <Grid 
                        item
                        >
                            <Typography 
                                className="car__card__items"
                                variant="h6"
                            >
                                {`${car.make ? car.make : "N/A"} ${car.model ? car.model : "N/A"}`}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Modal
                id={`id${car.car_id}`}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box 
                    className="car__detailModal"
                >
                    
                    <Grid 
                        container
                    >
                        <Grid item xs={10}>
                            <Typography 
                            id="modal-modal-title" 
                            variant="h5" 
                            component="h2"
                            color="primary"
                            >
                                Car details:
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Button 
                                className="car__detailModal__closeButton"
                                variant="text"
                                color="error"
                                onClick={() => {handleClose();}}
                            >
                                <CloseIcon />
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                {`Year: ${car.year ? car.year : "N/A"}`}
                                <br/>
                                {`Make: ${car.make ? car.make : "N/A"}`}
                                <br/>
                                {`Model: ${car.model ? car.model : "N/A"}`}
                                <br/>
                                {`Color: ${car.color ? car.color : "N/A"}`}
                            <br/>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}