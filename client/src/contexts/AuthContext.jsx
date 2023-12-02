import {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
} from "react";

//api
import {
  authRegister,
  authLogin,
  authLogout,
  authVerify,
} from "../api/authRequest";

//cookie
import cookie from "js-cookie";

//reducer
import { authReducer } from "../reducers/authReducer";

//crea contexto
export const AuthContext = createContext();

//export uso de context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within authProvider");
  return context;
};

//initial state
const initialState = {
  user: {},
  isAuthenticate: false,
  showPassword: false,
  error: [],
  message: "",
};

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);
  console.log("auth contdxt")
  useEffect(() => {
    checkLogin();
  }, []);

  useEffect(() => {
    removeErrorMessage();
  }, [state?.error]);

  useEffect(() => {
    removeMessage();
  }, [state?.message]);

  //al actualizar la pagina manualmente se recupera el estado (valida el token)
  const checkLogin = async () => {
    try {
      const cookies = cookie.get();
      if (!cookies.token) {
        dispatch({ type: "IS_AUTHENTICATE", payload: false });
        dispatch({ type: "CHECK_LOGIN", payload: null });
        return;
      }
      const res = await authVerify();
      const data = await res.json();

      if (!Object.keys(data).length) {
        dispatch({ type: "IS_AUTHENTICATE", payload: false });
        dispatch({ type: "CHECK_LOGIN", payload: null });
        return;
      }

      dispatch({ type: "IS_AUTHENTICATE", payload: true });
      dispatch({ type: "CHECK_LOGIN", payload: data });
      return;
    } catch (error) {
      dispatch({ type: "IS_AUTHENTICATE", payload: false });
      dispatch({ type: "CHECK_LOGIN", payload: null });
    }
  };

  //quita mensaje de error
  const removeErrorMessage = () => {
    const timeOut = setTimeout(() => {
      if (state?.error.length > 0) dispatch({ type: "ERROR", payload: [] });
      return () => clearTimeout(timeOut);
    }, 5000);
  };

  //quita mensaje informativo
  const removeMessage = () => {
    const timeOut = setTimeout(() => {
      dispatch({ type: "MESSAGE", payload: "" });
      return () => clearTimeout(timeOut);
    }, 5000);
  };

  //registra usuario
  const registerUser = async (values) => {
    try {
      const response = await authRegister(values);
      const data = await response.json();
      if (!response.ok) return dispatch({ type: "ERROR", payload: data });
      dispatch({ type: "REGISTER_USER", payload: data });
      dispatch({ type: "MESSAGE", payload: "Usuario registrado" });
      return;
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.message });
    }
  };

  //login usuario
  const loginUser = async (values) => {
    try {
      const response = await authLogin(values);
      const data = await response.json();
      if (!response.ok) return dispatch({ type: "ERROR", payload: data });
      dispatch({ type: "LOGIN_USER", payload: data });
      dispatch({ type: "IS_AUTHENTICATE", payload: true });
      return;
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.message });
    }
  };

  //logout usuario
  const logoutUser = async () => {
    try {
      const response = await authLogout();
      if (response.ok) {
        cookie.remove("token");
        dispatch({ type: "LOGOUT_USER", payload: null });
        dispatch({ type: "IS_AUTHENTICATE", payload: false });
        return;
      }
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.message });
    }
  };

  //hide/show password
  const handleShowPassword = (value) => {
    dispatch({ type: "SHOW_PASSWORD", payload: value });
    return;
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        registerUser,
        loginUser,
        logoutUser,
        handleShowPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
