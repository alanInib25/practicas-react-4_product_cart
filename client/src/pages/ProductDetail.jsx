import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";

//context
import { useCart } from "../contexts/Cart.jsx";
import { useProducts } from "../contexts/Products.jsx";

//swiper components
import { Swiper, SwiperSlide } from "swiper/react";

//swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

//modulos requridos de swiper
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

//styles componentes
import {
  SwiperContainer,
  Section,
  Article,
  Title,
  Span,
  PriceContainer,
} from "../styles/componentsStyled/productDetails.js";
import {
  Small,
  Strong,
  FlexBox,
  P,
  AddCartButton,
  ButtonTransparent,
} from "../styles/generalComponents";

function ProductDetail() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { addToCart } = useCart();
  const { productforDetail, productDetail, products } = useProducts();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    productforDetail(id);
  }, []);

  useEffect(() => {
    productforDetail(id);
  }, [products]);

  return (
    <Section className="swiper-section">
      <Article className="info-producto">
        <FlexBox>
          <Small>{productDetail && productDetail.brand}</Small>
          <Small>{productDetail && productDetail.category}</Small>
        </FlexBox>
        <Title>{productDetail && productDetail.title}</Title>
        <P>{productDetail && productDetail.description}</P>
        <PriceContainer>
          <P>
            <Strong>
              {productDetail &&
                `$ ${(productDetail.price - productDetail.discountPercentage).toFixed(0)}`}
            </Strong>
          </P>
          <P>
            Antes <Span>$ {productDetail && productDetail.price}</Span>
          </P>
        </PriceContainer>
        <FlexBox>
          <AddCartButton onClick={() => addToCart(productDetail._id)}>
            Agregar <TiShoppingCart />
          </AddCartButton>
          <ButtonTransparent onClick={() => navigate("/")}>Volver</ButtonTransparent>
        </FlexBox>
      </Article>
      <SwiperContainer className="swiper-container">
        <Swiper
          spaceBetween={1}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {productDetail &&
            productDetail.images.map((url, i) => (
              <SwiperSlide key={i}>
                <img src={`${url}`} />
              </SwiperSlide>
            ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {productDetail &&
            productDetail.images.map((url, i) => (
              <SwiperSlide key={i}>
                <img src={`${url}`} />
              </SwiperSlide>
            ))}
        </Swiper>
      </SwiperContainer>
    </Section>
  );
}

export default ProductDetail;
