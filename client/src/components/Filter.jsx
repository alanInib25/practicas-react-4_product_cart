import { useEffect, useState } from "react";
import { useProducts } from "../contexts/Products";

//styled components
import {
  Label,
  Span,
  InputRange,
  Select,
  FlexBox,
} from "../styles/generalComponents.js";
import { Article } from "../styles/componentsStyled/filters.js";

function Filter() {
  const { products, setFilters } = useProducts();
  const [categorys, setCategorys] = useState([]);
  const [brands, setBrands] = useState([]);
  const [range, setRange] = useState(0);

  useEffect(() => {
    categoryProducts();
    brandProducs();
  }, [products]);

  const handleChangeRange = (event) => {
    setRange(event.target.value);
    setFilters((prev) => ({ ...prev, minPrice: event.target.value }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prev) => ({
      ...prev,
      category: event.target.value,
    }));
  };

  const handleChangeBrand = (event) => {
    setFilters((prev) => ({
      ...prev,
      brand: event.target.value,
    }));
  };

  //categorias
  const categoryProducts = () => {
    if (products.length) {
      const categories = [
        "All",
        ...new Set(products.map((prod) => prod.category)),
      ];
      setCategorys((prev) => [...prev, ...categories]);
    }
    return;
  };

  //marcas
  const brandProducs = () => {
    if (products.length) {
      const brands = ["All", ...new Set(products.map((prod) => prod.brand))];
      setBrands((prev) => [...prev, ...brands]);
    }
    return;
  };

  return (
    <Article className="filters">
      <FlexBox>
        <Label htmlFor="category">Category: </Label>
        <Select onChange={handleChangeCategory} id="category" name="category">
          {categorys.map((categor, i) => (
            <option key={i} value={categor}>
              {categor}
            </option>
          ))}
        </Select>
      </FlexBox>

      <FlexBox>
        <Label htmlFor="brand">Brand: </Label>
        <Select onChange={handleChangeBrand} id="brand" name="brand">
          {brands.map((br, i) => (
            <option key={i} value={br}>
              {br}
            </option>
          ))}
        </Select>
      </FlexBox>

      <FlexBox>
        <Label htmlFor="range">Precio desde: </Label>
        <InputRange
          type="range"
          id="range"
          min="0"
          max="1000"
          onChange={handleChangeRange}
          value={range}
        />
        <Span>$ {range}</Span>
      </FlexBox>
    </Article>
  );
}

export default Filter;
