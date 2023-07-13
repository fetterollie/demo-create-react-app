import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';



const Login = () => {
    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center' 
        }}>
            <Typography variant='h5'>
                Login
            </Typography>
            <Stack
                direction='column'
            >
                <TextField 
                    variant='filled'
                    required
                    id='Username'
                    label='Username'
                    sx={{ width: "250px" }}
                />
                <TextField 
                    variant='filled'
                    required
                    id='Password'
                    label='Password'
                    sx={{ width: "250px" }}
                />
                <Button
                    type='submit'
                    variant='contained'
                    sx={{ width: "250px" }}
                >
                    Login
                </Button>
            </Stack>
        </Container>
    );
}
 
export default Login;