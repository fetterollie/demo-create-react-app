import { Container } from "@material-ui/core";
import ListCars from "./components/ListCars";
import FilterCars from "./components/FilterCars";

const VehicleDisplay = () => {

    return (
        <Container>
            <ListCars />
        </Container>
    );
}
 
export default VehicleDisplay;