import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
import '../Styles/Global.scss';
import { Grid } from '@mui/material';

async function registerUser(credentials) {
    return fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

const Register = ({ token }) => {

    const [usernameReg, setUsernameReg] = useState();
    const [passwordReg, setPasswordReg] = useState();
    const [roleReg, setRoleReg] = useState();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {const token = await registerUser({
            usernameReg,
            passwordReg,
            roleReg
        });
        } catch (err) {
            console.error(err.message)
        }
    }


    return (
        <Container className='body'>
            <Typography className="page__title" variant='h5'>
                Register a New User
            </Typography>
            <form onSubmit={handleRegister} className='head'>
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
                    >
                        <TextField 
                            required
                            id='Username'
                            label='Username'
                            sx={{ width: "250px" }}
                            onChange={(e) => {setUsernameReg(e.target.value)}}
                        />
                    </Grid>
                    <Grid 
                        item
                        xs={12}
                    >
                        <TextField 
                            required
                            id='Password'
                            label='Password'
                            sx={{ width: "250px" }}
                            type="password"
                            onChange={(e) => {setPasswordReg(e.target.value)}}
                        />
                    </Grid>
                    <Grid 
                        item
                        xs={12}
                    >
                        <TextField 
                            required
                            id='Role'
                            label='Role'
                            sx={{ width: "250px" }}
                            onChange={(e) => {setRoleReg(e.target.value)}}
                        />
                    </Grid>
                    <Grid 
                        item
                        xs={12}
                    >
                        <Button
                            type='submit'
                            variant='contained'
                            sx={{ width: "250px" }}
                        >
                            Login
                        </Button>
                    </Grid>
                    
                    
                    
                    
                
                </Grid>
            </form>
        </Container>
    );
}
 
export default Register;
