import { useEffect } from "react";
import { Section, H1 } from "../styles/generalComponents";

//contexto
import { useCart } from "../contexts/Cart";

function FinalSale() {
  const { setCart } = useCart();

  useEffect(() => {
    setCart([]);
  }, []);

  return (
    <Section>
      <H1>Muchas Gracias por su compra 👍👌</H1>
    </Section>
  );
}

export default FinalSale;
