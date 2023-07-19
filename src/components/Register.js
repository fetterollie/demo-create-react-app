import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
import '../Styles/Global.scss';

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
        
        // console.log(token)
        // setToken(token);
            
        } catch (err) {
            console.error(err.message)
        }
    }


    return (
        <Container className='body'>
            <Typography className="head" variant='h5'>
                Register a New User
            </Typography>
            <form className='head' onSubmit={handleRegister}>
                <Stack
                    direction='column'
                >
                    <TextField 
                        variant='filled'
                        required
                        id='Username'
                        label='Username'
                        sx={{ width: "250px" }}
                        onChange={(e) => {setUsernameReg(e.target.value)}}
                    />
                    <TextField 
                        variant='filled'
                        required
                        id='Password'
                        label='Password'
                        sx={{ width: "250px" }}
                        type="password"
                        onChange={(e) => {setPasswordReg(e.target.value)}}
                    />
                    <TextField 
                        variant='filled'
                        required
                        id='Role'
                        label='Role'
                        sx={{ width: "250px" }}
                        onChange={(e) => {setRoleReg(e.target.value)}}
                    />
                    <Button
                        type='submit'
                        variant='contained'
                        sx={{ width: "250px" }}
                    >
                        Login
                    </Button>
                
                </Stack>
            </form>
        </Container>
    );
}

// Register.propTypes = {
//     setToken: PropTypes.func.isRequired
// }
 
export default Register;
