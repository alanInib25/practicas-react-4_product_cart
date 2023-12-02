const ENDPOINT_API = import.meta.env.VITE_ENDPOINT_URL;

export const getProducts = () =>
  fetch(`${ENDPOINT_API}/api/product/products`, {
    method: "GET",
  });
