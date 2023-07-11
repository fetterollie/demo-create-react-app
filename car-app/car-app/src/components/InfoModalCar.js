import React, { useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #546e7a',
  boxShadow: 24,
  p: 4,
};

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
                sx={{ paddingBottom: "15px" }}
                onClick={handleOpen} 
                data-toggle="modal" 
                data-target={`#id${car.car_id}`}
            >
                    <Typography>
                        <img 
                            alt={`${car.year} ${car.color} ${car.make} ${car.model}`}
                            src={car.imgurl ? car.imgurl : "https://www.insticc.org/node/TechnicalProgram/56e7352809eb881d8c5546a9bbf8406e.png"}
                            width='290px'
                        />
                    </Typography>
                    <Typography variant="h6">
                        {`${car.make ? car.make : "N/A"} ${car.model ? car.model : "N/A"}`}
                    </Typography>
                    <Typography variant="h6">
                        
                    </Typography>
            </Box>
            <Modal
                id={`id${car.car_id}`}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Stack>
                        <Typography 
                            sx={{ paddingBottom: "10px" }}
                            id="modal-modal-title" 
                            variant="h5" 
                            component="h2"
                            color="primary"
                        >
                            Car details:
                        </Typography>
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
                        <IconButton 
                                variant="contained"
                                color="error"
                                onClick={() => {
                                    handleClose();
                                }}
                            >
                                <CloseIcon />
                        </IconButton>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}