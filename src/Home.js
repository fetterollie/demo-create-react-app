import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Weather from './components/Weather';
import Clicker from './components/Clicker';
import NasaPod from './components/NasaPod';

const Home = () => {

    return (
        <Container className='body'>
            <Typography 
                className='head'
                variant='h5'
            >
                Home
            </Typography>
            <Grid 
                container 
                spacing={2} 
                direction="row"
                justifyContent="space-around"
                alignItems="flex-start"
            >
                <Grid item key="Info" xs={12}>
                    <Typography color="textSecondary">
                        Lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </Grid>
                <Grid item key="Weather" xs={8} sm={5} md={4}>
                    <Weather />
                </Grid>
                <Grid item key="Clicker" xs={8} sm={5} md={4}>
                    <Clicker />
                </Grid>
                <Grid item key="NasaPod" xs={8} sm={5} md={4}>
                    <NasaPod />
                </Grid>
            </Grid>
        </Container>
    );
}
 
export default Home;