import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
//styled Aside
import { H3, P, Img, FlexBox, I } from "../styles/generalComponents";
import { Picture, Article } from "../styles/componentsStyled/cart";

//context
import { useCart } from "../contexts/Cart";

function CartItem({ item }) {
  const { incrementItemCart, decrementItemCart } = useCart();
  return (
    <Article className="cart-items-container">
      <Picture>
        <Img src={item.thumbnail} alt={item.title} />
      </Picture>
      <H3>{item.title}</H3>
      <P>
        $ {((item.price - item.discountPercentage) * item.cantidad).toFixed()}
      </P>
      <FlexBox>
        <FaPlusCircle onClick={() => incrementItemCart(item._id)} className="faPlus" />
        <I>{item.cantidad}</I>
        <FaMinusCircle onClick={() => decrementItemCart(item._id)} className="faMinus" />
      </FlexBox>
    </Article>
  );
}

export default CartItem;
