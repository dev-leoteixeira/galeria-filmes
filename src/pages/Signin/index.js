import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as Style from "./styles";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !password) {
      setError("Insira login e senha!");
      return;
    }

    const res = signin(email, password);

    if (res) {
      setError(res);
      return;
    }
    navigate("/movies");
  };

  return (
    <Style.Container>
      <Style.Label>PipocaFilmes</Style.Label>
      <h1>Hora de Relaxar!</h1>
      <Style.Content>
        <Input
          type="email"
          placehold="E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placehold="Senha"
          value={password}
          onChange={(e) => [setPassword(e.target.value), setError("")]}
        />
        <Style.LabelError>{error}</Style.LabelError>
        <Button Text="Login" onClick={handleLogin} />
        <Style.LabelSignup>
          Novo por aqui ?&nbsp;
          <Style.Strong>
            <Link to="/signup">&nbsp;Cadastrar</Link>
          </Style.Strong>
        </Style.LabelSignup>
      </Style.Content>
    </Style.Container>
  );
};

export default Signin;
