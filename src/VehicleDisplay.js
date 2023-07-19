import { Container } from "@material-ui/core";
import ListCars from "./components/ListCars";

const VehicleDisplay = ({ token }) => {
    return (
    <ListCars token={token} />
    );
}
 
export default VehicleDisplay;