import { useEffect, useState } from "react";

//context
import { useProducts } from "../contexts/ProductsContext.jsx";
import { usefilters } from "../contexts/FiltersContext.jsx";

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
  const { categorys, brands } = useProducts();
  const { setFilters } = usefilters();
  const [range, setRange] = useState(0); 
  console.log("filter")
  //filtro por rango
  const handleChangeRange = (event) => {
    setRange(event.target.value);
    setFilters((prev) => ({ ...prev, minPrice: event.target.value }));
  };

  //filtro por category
  const handleChangeCategory = (event) => {
    setFilters((prev) => ({
      ...prev,
      category: event.target.value,
    }));
  };

  //filtro por brand
  const handleChangeBrand = (event) => {
    setFilters((prev) => ({
      ...prev,
      brand: event.target.value,
    }));
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
