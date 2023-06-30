import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return (
        <div className="navbar">
            <h2>Navbar</h2>
            <div className="links">
                <Link to='/'> Home </Link>
                <Link to='/clicker'> Clicker </Link>
                <Link to='/cars'> Cars </Link>
                <Link to='/characters'> Characters </Link>
            </div>
        </div>
    );
}
 
export default Navbar;