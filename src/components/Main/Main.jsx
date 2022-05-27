import s from "./Main.module.css";

const Main = () => {
  return (
    <main>
      <h1>Main</h1>
      <form className={s.form}>
        <label>Email</label>
        <input type="email" placeholder="Введите свой email" />
        <label>Password</label>
        <input type="password" placeholder="Введите свой пароль" />
      </form>
    </main>
  );
};

export default Main;
