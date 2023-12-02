import styled from "styled-components";

export const Header = styled.header`
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.first};
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const Section = styled.section`
  min-height: 100vh;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.first};
`;

export const Article = styled.article`
  padding: 1rem;
  text-align: right;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.first};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Label = styled.label`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.third};
`;

export const Span = styled.span`
  width: 10rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.third};
  text-align: center;
`;

export const Input = styled.input`
  height: 3.5rem;
  margin-bottom: 0.5rem;
  padding: 1rem;
  maxlength: 12;
  border: 0.1rem solid white;
  border-radius: 0.5rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.third};

  &::placeholder {
    color: ${({ theme }) => theme.colors.third};
  }
`;

export const InputEmail = styled(Input).attrs({ type: "email" })``;

export const InputPassword = styled(Input)``;

export const InputRange = styled.input.attrs({ type: "range" })`
  width: 7rem;
`;

export const Select = styled.select`
  width: 13rem;
  padding: 0.5rem;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.third};
  border: 0.1rem solid ${({ theme }) => theme.colors.third};
  background: ${({ theme }) => theme.colors.first};
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const H1 = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.third};
`;

export const H2 = styled.h2`
  text-shadow: ${({ theme }) => theme.shadows.textShadow};
  color: ${({ theme }) => theme.colors.third};
  font-size: 1.5rem;
`;

export const H3 = styled.h3`
  color: ${({ theme }) => theme.colors.third};
  font-size: 1.2rem;
  text-align: center;
`;

export const H4 = styled.h4`
  padding-top: 2rem;
  color: ${({ theme }) => theme.colors.third};
  font-size: 2rem;
  text-align: center;
`;

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 1rem;

  &.active-oneProduct {
    grid-template-columns: 36rem;
  }
`;

export const Small = styled.small`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.third};
`;

export const B = styled.b`
  font-size: 2rem;
`;

export const I = styled.i`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.third};
`;

export const Button = styled.button`
  width: 15rem;
  padding: 1.5rem 2.5rem;
  border: .1rem solid ${({ theme }) => theme.colors.third};
  border-radius: 1rem;
  font-size: 1.5rem;
  transition: .2s linea
  cursor: pointer;
  color: ${({ theme }) => theme.colors.third};
  transition: .2s linear;


  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;


  &:hover {
    box-shadow: 0 0 .3rem 0.1rem ${({ theme }) => theme.colors.third};
    transform: scale(1.05,1.05);
  }
`;

export const SearchButton = styled(Button)`
  background: ${({ theme }) => theme.colors.seven};
`;

export const AddCartButton = styled(Button)`
  background: ${({ theme }) => theme.colors.six};
`;

export const FullCartButton = styled(Button)`
  background: ${({ theme }) => theme.colors.fourth};
`;

export const ButtonTransparent = styled(Button)`
  background: transparent;
  outline: 0.1rem solid ${({ theme }) => theme.colors.third};

  &:hover {
    background: ${({ theme }) => theme.colors.third};
    color: ${({ theme }) => theme.colors.first};
  }
`;

export const PayButton = styled(Button)`
  padding: 1rem 2rem;
  font-size: 1.5rem;
  background: ${({ theme }) => theme.colors.fourth};
`;

export const LoginButton = styled(Button)`
  width: 8rem;
  padding: 0.8rem;
  font-size: 1.3rem;
  background: ${({ theme }) => theme.colors.five};
`;
export const RegisterButton = styled(Button)`
  width: 8rem;
  padding: 0.8rem;
  font-size: 1.3rem;
  background: ${({ theme }) => theme.colors.second};
`;

export const Picture = styled.picture`
  width: 100%;
  height: 20rem;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 1s ease-out;
`;

export const Strong = styled.strong`
  font-size: 5rem;
  font-weight: bolder;
  text-shadow: ${({ theme }) => theme.shadows.textShadow};
  color: ${({ theme }) => theme.colors.third};
`;

export const Aside = styled.aside`
  height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.colors.first};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const P = styled.p`
  text-align: left;
  color: ${({ theme }) => theme.colors.third};
  font-size: 2rem;
  padding-bottom: 1rem;
`;

export const Form = styled.form`
  width: 35rem;
  margin: 1rem auto;
  padding: 1.5rem;
  border: 0.1rem solid white;
  border-radius: 1rem;
`;

export const FormGroup = styled.div`
  margin-bottom: 0.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
`;
