import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";

//context providers
import { CartProvider } from "./contexts/Cart.jsx";
import { ProductsProvider } from "./contexts/Products.jsx";
import { AuthProvider } from "./contexts/Auth.jsx";

//styles
import { GlobalStyles, theme } from "./styles/globalStyes.js";
import { Section, H1 } from "./styles/generalComponents.js";

//components
import Header from "./components/Header";
import Cart from "./components/Cart.jsx";

//components pages
import ProtectedRoute from "../ProtectedRoute";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import CheckSale from "./pages/CheckSale";
import Form from "./components/Form";
import FinalSale from "./pages/FinalSale";

function App() {
  return (
    <ProductsProvider>
      <AuthProvider>
        {/*  <FilterProvider> */}
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <CartProvider>
              <Header />
              <Cart />
              <Routes>
                <Route path="/login" element={<Form />} />
                <Route path="/register" element={<Form />} />
                <Route path="/" element={<Products />}></Route>
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/check-sale" element={<CheckSale />}></Route>
                <Route
                  path="*"
                  element={
                    <Section>
                      <H1>NO existe</H1>
                    </Section>
                  }
                />
                <Route element={<ProtectedRoute />}>
                  <Route path="/end-sale" element={<FinalSale />}></Route>
                </Route>
              </Routes>
            </CartProvider>
          </ThemeProvider>
        </BrowserRouter>
        {/*      </FilterProvider> */}
      </AuthProvider>
    </ProductsProvider>
  );
}

export default App;
