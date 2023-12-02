import { useNavigate } from "react-router-dom";
import { TbArrowsMaximize, TbArrowsMinimize } from "react-icons/tb";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

//context
import { useCart } from "../contexts/CartContext";

//components
import CartItem from "./CartItem";

//styled Aside
import {
  Aside,
  P,
  H1,
  FlexBox,
  B,
  PayButton,
  H3,
} from "../styles/generalComponents";
import { Section, ContainerCart } from "../styles/componentsStyled/cart";

function Cart() {
  const {
    cart,
    showCart,
    cleanCart,
    handleCloseCart,
    cartTotal,
    expandCart,
    fullShowCart,
  } = useCart();

  const navigate = useNavigate();

  const handlePayButton = () => {
    handleCloseCart();
    navigate("/check-sale");
  }
  console.log("cart")
  return (
    <Section
      className={`${
        ((showCart && expandCart) && "open-cart expand-cart") ||
        (showCart ? "open-cart" : "close-cart")
      }`}
    >
      <H1>Carrito</H1>
      <Aside>
        <ContainerCart>
          {!cart.length ? (
            <H3>Vacío</H3>
          ) : (
            cart.map((item, i) => <CartItem key={i} item={item} />)
          )}
        </ContainerCart>
        <P>
          <B>Totales: $ {cartTotal.toFixed()}</B>
        </P>
        <FlexBox>
          {expandCart ? (
            <TbArrowsMinimize
              onClick={() => fullShowCart(false)}
              className="arrow-maximize"
            />
          ) : (
            <TbArrowsMaximize
              onClick={() => fullShowCart(true)}
              className="arrow-minimize"
            />
          )}
          <IoMdClose onClick={handleCloseCart} className="close" />
          {cart.length && (
            <FaRegTrashCan onClick={cleanCart} className="trash" />
          )}
          {cart.length && (
            <PayButton onClick={handlePayButton}>Continuar</PayButton>
          )}
        </FlexBox>
      </Aside>
    </Section>
  );
}

export default Cart;
