//context
import { useProducts } from "../contexts/Products.jsx";

//component
import Product from "../components/Product";

//styles components
import { Section, Ul, H1 } from "../styles/generalComponents.js";

function Products() {
  const { productsFiltered } = useProducts();

  return (
    <Section>
      {!productsFiltered.length ? (
        <H1>Sin productos...</H1>
      ) : (
        <Ul
          className={`${productsFiltered.length === 1 && "active-oneProduct"}`}
        >
          {productsFiltered.map((product, i) => (
            <Product key={i} product={product} />
          ))}
        </Ul>
      )}
    </Section>
  );
}

export default Products;
