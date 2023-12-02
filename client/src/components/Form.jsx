import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

//context
import { useAuth } from "../contexts/AuthContext.jsx";

//styles components
import {
  RegisterButton,
  H1,
  H4,
  Section,
  Form,
  FormGroup,
  Input,
  InputEmail,
  InputPassword,
  FlexBox as FlexContent,
  I,
  LoginButton
} from "../styles/generalComponents.js";

import { FlexBox, UlError } from "../styles/componentsStyled/register.js";

function Register() {
  const [page, setPage] = useState();
  const { pathname } = useLocation();
  console.log("form")
  //uso de react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //uso de contexto
  const { showPassword, handleShowPassword, registerUser, loginUser, error, message, isAuthenticate } = useAuth();

  useEffect(() => {
    setPage(pathname.split("/")[1]);
  }, []);

  useEffect(() => {
    if(isAuthenticate) return navigate("/");
  }, [isAuthenticate])

  useEffect(() => {
    setPage(pathname.split("/")[1]);
    handleShowPassword(false);
    clearForm();
  }, [pathname]);

  //uso de hook usenavigate
  const navigate = useNavigate();

  //enviar formulario
  const onSubmit = handleSubmit((values) => {
    if(page === "register") registerUser(values);
    else loginUser(values);
    clearForm();
  });

  const clearForm = () => reset({ email: "", username: "", password: "" });

  return (
    <Section>
      <H1>{page === "login" ? "Login" : "Registrate"}</H1>
      {message && <H4>{message}</H4>}
      <UlError>
        {error && error.length > 0 && error.map((err, ind) => <li key={ind}>{err.message}</li>)}
      </UlError>
      <Form onSubmit={onSubmit}>
        {page !== "login" && (
          <FormGroup>
            <Input
              id="username"
              name="username"
              placeholder="Ingresa Username (*)"
              {...register("username", { required: "Username requerido" })}
            />
            <I>{errors.username?.message}</I>
          </FormGroup>
        )}
        <FormGroup>
          <InputEmail
            id="email"
            name="email"
            placeholder="Ingresa Email (*)"
            {...register("email", {
              required: "Email requerido",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Email inválido",
              },
            })}
          />
          <I>{errors.email?.message}</I>
        </FormGroup>
        <FormGroup>
          <InputPassword
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Ingrese Password (*)"
            {...register("password", {
              required: "Password requerido",
              minLength: {
                value: 6,
                message: "Password mínimo 6 caractéres",
              },
              maxLength: {
                value: 12,
                message: "Password máximo 12 caractéres",
              },
            })}
          />
          <FlexBox>
            {!showPassword ? (
              <FaRegEye
                onClick={() => handleShowPassword(true)}
                className="FaRegEye"
              />
            ) : (
              <FaRegEyeSlash
                onClick={() => handleShowPassword(false)}
                className="FaRegEyeSlash"
              />
            )}
          </FlexBox>
          <I>{errors.password?.message}</I>
        </FormGroup>
        <FlexContent>
          {page !== "login" ? (
            <RegisterButton>Registarme</RegisterButton>
          ) : (
            <LoginButton>Login</LoginButton>
          )}
          <I>(*) Dato Requerido</I>
        </FlexContent>
      </Form>
    </Section>
  );
}

export default Register;
