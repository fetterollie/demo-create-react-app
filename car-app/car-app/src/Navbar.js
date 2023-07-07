import { List } from "@material-ui/core";
import { Container } from "@mui/material";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return (
        <Container>
            <List>
                <Link to='/'> Home </Link>
                <Link to='/clicker'> Clicker </Link>
                <Link to='/cars'> Cars </Link>
                <Link to='/characters'> Characters </Link>
                <Link to='/weather'>Weather</Link>
                <Link to='/vehicleinput'>Vehicle Input</Link>
                <Link to='/displayvehicles'>Display Vehicles</Link>
            </List>
        </Container>


    );
}
 
export default Navbar;