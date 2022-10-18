import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "../../../src/cadastro.css";
import { PageLayoutcomponents } from "../../components/Pagelayoutcomponents";

export const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [sobrenome, setSobrenome] = useState("");

  return (
    <PageLayoutcomponents>
      <div className="header-login">
        <img src={logo} alt="" />
        <h1>DevReact</h1>
        <p>Crie sua conta e aproveite!</p>
      </div>

      <div className="form-input">
        <form className="form">
          <div className="formInput">
            <input
              className={email !== "" ? "values input" : "input"}
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span className="focusInput" data-placeholder="Nome"></span>
          </div>

          <div className="formInput">
            <input
              className={sobrenome !== "" ? "values input" : "input"}
              type="text"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
            />
            <span className="focusInput" data-placeholder="Sobrenome"></span>
          </div>

          <div className="formInput">
            <input
              className={email !== "" ? "values input" : "input"}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="focusInput" data-placeholder="Email"></span>
          </div>

          <div className="formInput">
            <input
              className={password !== "" ? "values input" : "input"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="focusInput" data-placeholder="Password"></span>
          </div>

          <div className="form-btn">
            <button className="btn-login"> Entrar na plataforma</button>
          </div>

          <div className="ancoras">
            <Link to="#">Esqueceu sua senha? </Link>
            <Link to="/login">Já possui conta? Faça o login!</Link>
          </div>
        </form>
      </div>
    </PageLayoutcomponents>
  );
};
