import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
import '../Styles/Global.scss';
import Grid from '@mui/material/Grid';


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
        
        setToken(token);
            
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <div className='login'>
            <Container 
                className=''
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'absolute',
                    top: '33%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
            >
                <form className='body' onSubmit={handleLogin}>
                    <Grid 
                        className='carInput'
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={12}
                    >
                        <Grid item>
                            <Typography variant='h5'>
                                Login
                            </Typography>
                        </Grid>
                        <Grid
                            item
                        >
                            <TextField 
                                required
                                id='Username'
                                label='Username'
                                sx={{ width: "250px" }}
                                onChange={(e) => {setUsername(e.target.value)}}
                            />
                        </Grid>
                        <Grid item>
                            <TextField 
                            required
                            id='Password'
                            label='Password'
                            sx={{ width: "250px" }}
                            type="password"
                            onChange={(e) => {setPassword(e.target.value)}}
                        />
                        </Grid>
                        <Grid item>
                            <Button
                            type='submit'
                            // variant='contained'
                            sx={{ width: "250px" }}
                            >
                                Login
                            </Button>
                        </Grid>
                    </Grid>    
                </form>
            </Container>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
 
export default Login;
