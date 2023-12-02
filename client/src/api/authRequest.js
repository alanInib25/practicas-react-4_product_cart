const ENDPOINT_API = import.meta.env.VITE_ENDPOINT_URL;

export const authRegister = (data) =>
  fetch(`${ENDPOINT_API}/api/auth/register`, {
    credentials: "include",
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

export const authLogin = (data) =>
  fetch(`${ENDPOINT_API}/api/auth/login`, {
    credentials: "include",
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-Type": "application/json",
    },
  });

export const authLogout = () =>
  fetch(`${ENDPOINT_API}/api/auth/logout`, {
    credentials: "include",
    method: "POST",
  });

export const authVerify = () =>
  fetch(`${ENDPOINT_API}/api/auth/verify`, {
    credentials: "include",
  });
