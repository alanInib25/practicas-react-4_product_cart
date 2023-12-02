import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../contexts/Cart";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { RiLogoutBoxRLine } from "react-icons/ri";

//components
import Filter from "./Filter";

//contexto
import { useAuth } from "../contexts/Auth.jsx";

//styled components
import {
  FlexBox,
  H2,
  H1,
  Header as HeaderS,
  LoginButton,
  RegisterButton,
} from "../styles/generalComponents.js";
import { ContainerHeader } from "../styles/componentsStyled/header.js";

function Header() {
  //context
  const { isAuthenticate, user, logoutUser } = useAuth();
  const { cart, displayCart } = useCart();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLogout = () => {
    logoutUser()
    navigate("/")
  }

  return (
    <ContainerHeader>
      <HeaderS>
        <H1>
          <Link to="/" className="link">
            <FaShoppingBag />
            Shopping
          </Link>
        </H1>
        {pathname === "/" && <Filter />}
        <FlexBox>
          {!isAuthenticate && (
            <>
              {pathname !== "/login" && (
                <LoginButton onClick={() => navigate("/login")}>
                  Login
                </LoginButton>
              )}
              {pathname !== "/register" && (
                <RegisterButton onClick={() => navigate("/register")}>
                  Register
                </RegisterButton>
              )}
            </>
          )}
          {isAuthenticate && <H2>Bienvenido {user && user.username}</H2>}
          {cart.length > 0 && (
            <TiShoppingCart
              onClick={() => displayCart(true)}
              className="shoopingCart"
            />
          )}
          {isAuthenticate && (
            <RiLogoutBoxRLine className="logout-icon" onClick={handleLogout} />
          )}
        </FlexBox>
      </HeaderS>
    </ContainerHeader>
  );
}

export default Header;
