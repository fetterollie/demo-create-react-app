
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import InfoModalCar from "./InfoModalCar";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

import Grid from '@mui/material/Grid';

import '../Styles/Global.scss';

const ShoppingCart = ({ shoppingCart, removeFromShoppingCart, deleteCar, token }) => {
    return ( 
        <Container className='page__container'>
            <Typography className="page__title" variant="h5">
                Shopping Cart
            </Typography>
            <Typography className="page__title">
                {`Total Items: ${shoppingCart.length}`}
            </Typography>
            <Grid 
                container 
                spacing={8} 
            >
                {shoppingCart.map(car => (
                    <Grid
                        item
                        key={`listcar${car.car_id}`}
                        xs={12}
                        md={6}
                        lg={4}
                        alignItems="center"
                        justifyContent="center"
                        sx={{ paddingLeft: "0px" }}
                    >
                        <Card>
                            <CardContent >
                                <Grid container>
                                    <InfoModalCar car={car} deleteCar={deleteCar} token={token}/>
                                    <Grid item xs={12}>
                                        <Button variant="outlined" color="error" onClick={e => removeFromShoppingCart(car)}>
                                            <RemoveShoppingCartIcon/>
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
 
export default ShoppingCart;