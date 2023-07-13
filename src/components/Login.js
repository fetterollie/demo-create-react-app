import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';

async function loginUser(credentials) {
    return fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}



const Login = ({ setToken }) => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {const token = await loginUser({
            username,
            password
        });
        
        console.log(token)
        setToken(token);
            
        } catch (err) {
            console.error(err.message)
        }
    }


    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center' 
        }}>
            <Typography variant='h5'>
                Login
            </Typography>
            <form onSubmit={handleLogin}>
                <Stack
                    direction='column'
                >
                    <TextField 
                        variant='filled'
                        required
                        id='Username'
                        label='Username'
                        sx={{ width: "250px" }}
                        onChange={(e) => {setUsername(e.target.value)}}
                    />
                    <TextField 
                        variant='filled'
                        required
                        id='Password'
                        label='Password'
                        sx={{ width: "250px" }}
                        type="password"
                        onChange={(e) => {setPassword(e.target.value)}}
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

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
 
export default Login;
