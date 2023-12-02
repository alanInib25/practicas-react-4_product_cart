import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    first: "#000000",
    second: "#0079FF",
    third: "#FAF6F0",
    fourth: "#C70039",
    five: "#9400FF",
    six: "#B3005E",
    seven: "#5800FF",
  },
  shadows: {
    textShadow: "0 0 2rem #FAF6F0",
  },
};

export const GlobalStyles = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  /*Scroll Bar*/

  *::-webkit-scrollbar{
    width: .5rem;
  }

  *::-webkit-scrollbar-track{
    background: linear-gradient(to bottom, 
      ${({ theme }) => theme.colors.first},
      ${({ theme }) => theme.colors.second},
      ${({ theme }) => theme.colors.five},
      ${({ theme }) => theme.colors.six});
  }

  *::-webkit-scrollbar-thumb{
    background: ${({ theme }) => theme.colors.first};
    border-radius: 5rem;
    border: .1rem solid ${({ theme }) => theme.colors.third};
  }

  /*End Scroll Bar*/

  html{
    font-size: 62.5%;
  }

  .link{
    color: ${({ theme }) => theme.colors.third};
    text-decoration: none;
    display: flex;
    gap: 1rem;
  }

  .FaRegEye,
  .FaRegEyeSlash{
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.third};
    cursor: pointer;
  }

  .logout-icon,
  .arrow-maximize,
  .arrow-minimize,
  .trash,
  .shoopingCart,
  .close{
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.third};
    cursor: pointer;
    transition: .2s linear;

    &:hover{
      border-radius: .5rem;
      box-shadow: 0 0 .2rem .2rem ${({ theme }) => theme.colors.third};
      background: ${({ theme }) => theme.colors.third};
      color: black;
      transform: scale(1.1, 1.1);
    }
  }

  .faPlus,
  .faMinus{
    color: ${({ theme }) => theme.colors.third};
    font-size: 1.5rem;
    transition: .2s linear;

    &:hover{
      transform: scale(1.1, 1.1);
      color: ${({ theme }) => theme.colors.six};
    }
  }

  /*swiper*/

  .mySwiper2 {
    height: 35rem;
    width: 100%;
  }

  .mySwiper2 .swiper-slide{
    width: 100%;
  }
  
  .mySwiper2 .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: unset;
  }

  .mySwiper {
    height: 40%;
    box-sizing: border-box;
    padding: 1rem 0;
  }
  
  .mySwiper .swiper-slide {
    height: 10rem;
    opacity: 0.4;
  }
  
  .mySwiper .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: center;
  }

  .mySwiper .swiper-slide-thumb-active {
    opacity: 1;
  }
  
  .swiper-button-prev,
  .swiper-button-next{
    color: ${({ theme }) => theme.colors.first}
  }
  
  /*end swiper*/

  @media screen and (max-width: 880px){
    section{
      padding-top: 3rem !important;
    }

    .swiper-section{
      align-items:center;
      flex-direction: column;
      gap: 4rem;
    }
  
    .swiper-container{
      width: 100% !important;
    }

    .info-producto{
      width: 100% !important;
    }
  
    .mySwiper2{
      height: 40rem;
    }

    .mySwiper .swiper-slide {
      height: 8rem !important;
    }

    .mySwiper2 .swiper-slide {
      height: 40rem !important;
    }
  }

  @media screen and (max-width: 770px){
    html{
      font-size: 60%;
    }

    section{
      padding-top: 5rem !important;
    }

    .filters{
      padding: 1rem 0 !important;
      flex-wrap: wrap !important;
    }

    .mySwiper .swiper-slide {
      height: 13rem;
    }

    .mySwiper2 .swiper-slide {
      height: 20rem;
    }
 
  }

  @media screen and (max-width: 600px){
    html{
      font-size: 50%;
    }
    .cart-items-container{
      flex-direction: column !important;
      gap: 1rem !important;
    }
  }

  @media screen and (max-width: 450px){
    html{
      font-size: 45%;
    }

    header{
      padding: 1rem !important;
    }

    .filters{
      padding: .5rem 0 !important;
    }
    
    .open-cart{
      width: 100% !important;
    }

    .arrow-maximize,
    .arrow-minimize{
      display: none;
    }
  }
`;
