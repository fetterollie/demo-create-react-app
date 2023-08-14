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
                sx={{ paddingLeft: "1rem" }}
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
                <Grid 
                    item key="Info"
                    sx={{ paddingLeft: "0rem" }}
                >
                    <Typography 
                        color="textSecondary"
                        sx={{ minWidth: "250px" }}
                    >
                        This full-stack application demonstrates many modern development 
                        practices for both front-end and back-end components. The front-end
                         of the application is built using React, the Create React App framework,
                          Yarn, Material UI, MUI Theme Creator, Sass, and Axios. The back-end 
                          of the application is constructed using Java, the Spring Boot framework,
                           and PostgresQL.
                    </Typography>
                </Grid>
                <Grid 
                    className="page__content" 
                    item key="Weather" 
                    xs={12} 
                    sm={6} 
                    md={4}
                    sx={{ paddingLeft: "0rem" }}
                >
                    <Weather />
                </Grid>
                <Grid 
                    className="page__content" 
                    item key="Clicker" 
                    xs={12} 
                    sm={6} 
                    md={4}
                    sx={{ paddingLeft: "0rem" }}
                >
                    <Clicker />
                </Grid>
                <Grid 
                    className="page__content" 
                    item key="NasaPod" 
                    xs={12} 
                    sm={6} 
                    md={4}
                    sx={{ paddingLeft: "0rem" }}
                >
                    <NasaPod />
                </Grid>
                <Grid 
                    className="page__content" 
                    item key="Blank" 
                    xs={12} 
                    sm={6} 
                    md={4}
                    sx={{ paddingLeft: "0rem" }}
                >
                </Grid>
            </Grid>
        </Container>
    );
}
 
export default Home;