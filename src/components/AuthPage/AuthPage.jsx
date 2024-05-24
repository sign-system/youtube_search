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
        <p className={s.form_title}>Вход</p>
        <p className={s.form_test_title}>
          Для тестирования, логин: Youtube, пароль: 123456{" "}
        </p>
        <label className={s.label}>
          Логин{" "}
          <input
            className={s.input}
            type="text"
            onChange={onLoginChange}
            placeholder="Введите свой login"
          />
        </label>

        <label className={s.label}>
          Пароль
          <input
            className={s.input}
            type="password"
            onChange={onPasswordChange}
            placeholder="Введите свой пароль"
          />
        </label>

        <button className={s.button} type="submit">
          Войти
        </button>
      </form>
    </div>
  );
};

AuthPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};

96c6b-5c934
52ddb-d6eed
bb1a4-59af8
754cd-0a73a
741f5-7365f
f6c7a-2ee20
11700-d1e20
0c6aa-1c108
f1562-93a19
2c520-a6b38
6d270-f2d10
b85a2-62d76
b67b6-82425
b27c9-930ca
9fe5e-94a83
28de7-01856

GH sign-s
____________________________

1. 6635 7770		 6. 3644 4976
2. 7345 0572		 7. 1054 1763
3. 9005 4319		 8. 7859 9958
4. 9038 2129		 9. 3476 7256
5. 2620 6529		10. 6409 7095

psychoanalysis.kg
1 used

export default AuthPage;
