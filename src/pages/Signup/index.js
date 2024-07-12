import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as Style from "./styles";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !password) {
      setError("Campos vazios!");
      return;
    } else if (email !== emailConf) {
      setError("E-mails não são iguais!");
      return;
    }

    const res = signup(email, password);

    if (res) {
      setError(res);
      return;
    }

    alert("Login cadastrado com sucesso!");
    navigate("/");
  };

  return (
    <Style.Container>
      <Style.Label>Não Tem Cadastro?</Style.Label>
      <h1>Cadastre-se aqui!</h1>
      <Style.Content>
        <Input
          type="email"
          placehold="E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placehold="Confirmar E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placehold="Inserir Senha"
          value={password}
          onChange={(e) => [setPassword(e.target.value), setError("")]}
        />
        <Style.LabelError>{error}</Style.LabelError>
        <Button Text="Cadastrar" onClick={handleSignup} />
        <Style.LabelSignin>
          Já tem
          <Style.Strong>
            <Link to="/"> Cadastro </Link>
          </Style.Strong>
          ?
        </Style.LabelSignin>
      </Style.Content>
    </Style.Container>
  );
};

export default Signup;
