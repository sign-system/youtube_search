import s from "./AuthPage.module.css";
import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types";

async function loginUser(credentials) {
  return axios
    .post("http://typ-back.herokuapp.com/api/auth/login", {
      login: credentials.login,
      password: credentials.password,
    })
    .then((res) => {
      return res.data;
    });
}

const AuthPage = ({ setToken }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await loginUser({ login, password });
    setToken(res.token);
    console.log(res.token);
  };

  return (
    <div className={s.form_wrapper}>
      <form className={s.form} onSubmit={onSubmit}>
        <h1 className={s.form_title}>Вход</h1>
        <div className={s.form_test_title}>
          🔐 Для тестирования:<br/>
          Логин: <strong>Youtube</strong> | Пароль: <strong>123456</strong>
        </div>
        <label className={s.label}>
          Логин
          <input
            className={s.input}
            type="text"
            value={login}
            onChange={onLoginChange}
            placeholder="Введите ваш логин"
            required
          />
        </label>

        <label className={s.label}>
          Пароль
          <input
            className={s.input}
            type="password"
            value={password}
            onChange={onPasswordChange}
            placeholder="Введите ваш пароль"
            required
          />
        </label>

        <button className={s.button} type="submit">
          Войти →
        </button>
      </form>
    </div>
  );
};

AuthPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default AuthPage;
