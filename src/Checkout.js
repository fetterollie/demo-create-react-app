import ShoppingCart from "./components/ShoppingCart";

const Checkout = ({ shoppingCart }) => {
    return ( 
    <>

    <ShoppingCart shoppingCart={shoppingCart} />
    
    </> );
}
 
export default Checkout;