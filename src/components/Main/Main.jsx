import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import s from "./Main.module.css";

const Main = () => {
  return (
    <>
      <Header />
      <main className={s.main}>
        <Outlet />
      </main>
    </>
  );
};

export default Main;
