import { TiShoppingCart } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

//context
import { useCart } from "../contexts/CartContext.jsx";

//styles componentes
import {
  Article,
  Li,
  ButtonContainer,
  P,
} from "../styles/componentsStyled/product.js";
import {
  B,
  Small,
  Picture,
  Img,
  SearchButton,
  AddCartButton,
} from "../styles/generalComponents.js";

function Product({ product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  console.log("product")
  return (
    <Li>
      <Article>
        <Picture>
          <Img src={product.thumbnail} alt={product.title} />
        </Picture>
        <P>
          <B>{product.title}</B>
          <Small>$ {product.price}</Small>
        </P>
        <ButtonContainer className="button-container">
          <AddCartButton onClick={() => addToCart(product._id)}>
            Agregar <TiShoppingCart />
          </AddCartButton>
          <SearchButton onClick={() => navigate(`/product/${product._id}`)}>
            Ver mas <FaSearch />
          </SearchButton>
        </ButtonContainer>
      </Article>
    </Li>
  );
}

export default Product;
