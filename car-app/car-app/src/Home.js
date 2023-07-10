import { Button, Container, Typography } from "@mui/material";

const Home = ({ cars }) => {

    const handleTest = () => {
        console.log('Click', cars)
    }

    return (
        <Container>
            <Typography variant='h5'>
                Home
            </Typography>
            <Typography color="textSecondary" gutterBottom>
                Lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Button onClick={handleTest}>
                Test
            </Button>
        </Container>
    );
}
 
export default Home;