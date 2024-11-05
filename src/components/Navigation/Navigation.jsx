import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Wrapper, Logo, Nav, LogoWrp, Link} from "./Navigation.styled";
import Loader from "../Loader/Loader";


export default function Navigation() {
    return (
        <Wrapper>
            <Logo>Travel<LogoWrp>Trucks</LogoWrp></Logo>
            <Nav>
                <Link to="/">Home</Link>
                <Link to="/catalog">Catalog</Link>
            </Nav>
            <Suspense fallback={<Loader/>} >
                <Outlet />
            </Suspense>    
        </Wrapper>
    )
};