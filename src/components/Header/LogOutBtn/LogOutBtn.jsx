import s from "./LogOutBtn.module.css";

const LogOutBtn = () => {
  return (
    <button
      className={s.header_logout_title}
      onClick={() => {
        localStorage.clear();
        window.location.reload();
      }}
    >
      Выйти
    </button>
  );
};

export default LogOutBtn;
