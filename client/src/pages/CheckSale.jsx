import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//contexto
import { useAuth } from "../contexts/Auth";
import { Article, Section, P, FlexBox, LoginButton, RegisterButton } from "../styles/generalComponents";

function CheckSale() {
  const { isAuthenticate } = useAuth();
  const navigate = useNavigate();
  console.log(isAuthenticate);

  useEffect(() => {
    if(isAuthenticate) navigate("/end-sale")
  }, [])

  return (
    <Section>
      <Article>
        <P>
          Si desea Continuar con la compra antes debe estar registrado y
          previamente logeado en el sistema
        </P>
        <FlexBox>
          <LoginButton onClick={() => navigate("/login")}>Login</LoginButton>
          <RegisterButton onClick={() => navigate("/register")}>Register</RegisterButton>
        </FlexBox>
      </Article>
    </Section>
  );
}

export default CheckSale;
