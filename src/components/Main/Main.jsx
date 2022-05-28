import s from "./Main.module.css";
import axios from "axios";
import { useState } from "react";

const Main = () => {
  const [users, setUsers] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://typ-back.herokuapp.com/api/auth/login", {
        login: "Youtube",
        password: "123456",
      })
      .then((res) => {
        console.log(res.data.isAdmin);
      });
  };
  const getUserNameByID = () => {
    axios
      .get("http://typ-back.herokuapp.com/api/users/", {
        id: "109",
      })
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      });
  };

  return (
    <main>
      <h1>Main</h1>
      <form className={s.form} onSubmit={onSubmit}>
        <label>Login</label>
        <input type="text" placeholder="Введите свой login" />
        <label>Password</label>
        <input
          type="password"
          onSubmit={onSubmit}
          placeholder="Введите свой пароль"
        />
        <button className={s.button} type="submit">
          Войти
        </button>
      </form>
      <button onClick={getUserNameByID}>Получить имя пользователя</button>
      <ul>
        {users.map((person) => (
          <li key={person.id}>
            {"Name: " +
              person.lastName +
              " " +
              person.firstName +
              " " +
              "Email: " +
              person.login}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Main;
