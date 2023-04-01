import { NavWrap } from "./NavBar.styled";
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <NavWrap>

            <Link to="/">Home</Link>
            <Link to="/login">Register</Link>



        </NavWrap>
    )
}

export default NavBar;