import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import EditIcon from '@mui/icons-material/Edit';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


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

export default function EditCar({ car }) {
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
        setPowerwindows(car.powerwindows);
        setPowerlocks(car.powerlocks);
        setBackupcamera(car.backupcamera);
    };

    // state
    const [make, setMake] = useState(car.make);
    const [model, setModel] = useState(car.model);
    const [color, setColor] = useState(car.color);
    const [year, setYear] = useState(car.year);
    const [imgUrl, setImgUrl] = useState(car.imgurl);
    const [powerwindows, setPowerwindows] = useState(car.powerwindows);
    const [powerlocks, setPowerlocks] = useState(car.powerlocks);
    const [backupcamera, setBackupcamera] = useState(car.backupcamera);

    // edit values function
    const updateValues = async(e) => {
        e.preventDefault();
        try {
            const body = { make, model, color, year, imgUrl, powerwindows, powerlocks, backupcamera };
            const response = await fetch(`http://localhost:5000/cars/${car.car_id}`, 
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                }
            );
            // console.log(car.car_id)
            // console.log(body)
            // console.log(response);
            window.location = "/vehicledisplay";
        } catch (err) {
            console.error(err.message);
        }  
    };

    return (
        <div id={`id${car.car_id}`}>
        <Button
            onClick={handleOpen} 
            data-toggle="modal" 
            data-target={`#id${car.car_id}`}
        >
            <EditIcon/>
        </Button>
        <Modal
            id={`id${car.car_id}`}
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Typography 
                sx={{ paddingBottom: "10px" }}
                id="modal-modal-title" 
                variant="h5" 
                component="h2"
                color="primary"
            >
                {`Edit car details:`}
            </Typography>
                <form>
                    <TextField 
                        sx={{ width: "100%" }}
                        value={make} 
                        onChange={e => setMake(e.target.value)}
                    />
                    <TextField 
                        sx={{ width: "100%" }}
                        value={model} 
                        onChange={e => setModel(e.target.value)}
                    />
                    <TextField 
                        sx={{ width: "100%" }}
                        value={color} 
                        onChange={e => setColor(e.target.value)}
                    />
                    <TextField
                        sx={{ width: "100%" }}
                        value={year} 
                        onChange={e => setYear(e.target.value)}
                    />
                    <TextField 
                        sx={{ width: "100%" }}
                        value={imgUrl} 
                        onChange={e => setImgUrl(e.target.value)}
                    />
                    <Typography sx={{ display: "inline-flex", paddingRight: "20px", width: "45%" }}>Power Windows: </Typography>
                    <Select
                        sx={{ width: "55%" }}
                        value={powerwindows}
                        onChange={e => setPowerwindows(e.target.value)}
                    >
                        <MenuItem value='true'>True</MenuItem>
                        <MenuItem value='false'>False</MenuItem>
                    </Select>
                    <Typography sx={{ display: "inline-flex", paddingRight: "20px", width: "45%" }}>Power Locks: </Typography>
                    <Select
                        sx={{ width: "55%" }}
                        value={powerlocks}
                        onChange={e => setPowerlocks(e.target.value)}
                    >
                        <MenuItem value='true'>True</MenuItem>
                        <MenuItem value='false'>False</MenuItem>
                    </Select>
                    <Typography sx={{ display: "inline-flex", paddingRight: "20px", width: "45%" }}>Back-up Camera: </Typography>
                    <Select
                        sx={{ width: "55%" }}
                        value={backupcamera}
                        onChange={e => setBackupcamera(e.target.value)}
                    >
                        <MenuItem value='true'>True</MenuItem>
                        <MenuItem value='false'>False</MenuItem>
                    </Select>
                    <Button 
                        sx={{ width: "80%" }}
                        variant="contained"
                        onClick={e => updateValues(e)}
                    >
                        Update Car Details
                    </Button>
                    <Button 
                        sx={{ width: "20%" }}
                        variant="contained"
                        color="error"
                        onClick={() => {
                            handleClose();
                        }}
                    >
                        <DisabledByDefaultRoundedIcon />
                    </Button>
            </form>
            </Box>
        </Modal>
        </div>
    );
}