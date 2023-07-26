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
                className='page__title'
                variant='h5'
            >
                Home
            </Typography>
            <Grid
                container 
                className='page__title'
                direction="row"
                justifyContent="space-evenly"
                alignItems="flex-start"
            >
                <Grid item key="Info">
                    <Typography className="" color="textSecondary">
                        Lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </Grid>
                <Grid className="page__content" item key="Weather" xs={12} sm={6} md={4}>
                    <Weather />
                </Grid>
                <Grid className="page__content" item key="Clicker" xs={12} sm={6} md={4}>
                    <Clicker />
                </Grid>
                <Grid className="page__content" item key="NasaPod" xs={12} sm={6} md={4}>
                    <NasaPod />
                </Grid>
                <Grid className="page__content" item key="Blank" xs={12} sm={6} md={4}>
                </Grid>
            </Grid>
        </Container>
    );
}
 
export default Home;