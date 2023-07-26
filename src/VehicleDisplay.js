import { Container } from "@material-ui/core";
import ListCars from "./components/ListCars";
import './Styles/Global.scss';



const VehicleDisplay = ({ token, addToShoppingCart, removeFromShoppingCart }) => {
    return (
    <ListCars token={token} addToShoppingCart={addToShoppingCart} removeFromShoppingCart={removeFromShoppingCart} />
    );
}
 
export default VehicleDisplay;