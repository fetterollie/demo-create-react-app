import ShoppingCart from "./components/ShoppingCart";

const Checkout = ({ shoppingCart, removeFromShoppingCart, deleteCar, token }) => {
    return ( 
    <>

    <ShoppingCart 
        shoppingCart={shoppingCart} 
        removeFromShoppingCart={removeFromShoppingCart} 
        deleteCar={deleteCar} token={token} 
    />
    
    </> );
}
 
export default Checkout;