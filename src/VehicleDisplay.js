import { Container } from "@material-ui/core";
import ListCars from "./components/ListCars";

const VehicleDisplay = ({ token }) => {

    return (
        <Container sx={{ paddingLeft: "0px" }}>
            <ListCars token={token} />
        </Container>
    );
}
 
export default VehicleDisplay;