import { Container } from "@material-ui/core";
import ListCars from "./components/ListCars";

const VehicleDisplay = ({ token }) => {

    return (
        <Container>
            <ListCars token={token} />
        </Container>
    );
}
 
export default VehicleDisplay;