import s from "./Header.module.css";
import logo from "../../assets/vricon2.png";
import { NavLink } from "react-router-dom";
import LogOutBtn from "./LogOutBtn/LogOutBtn";

const Header = () => {
  let activeStyle = {
    textDecoration: "underline",
    color: "#ffc107",
    fontWeight: "bold",
  };

  return (
    <header className="header">
      <div className={s.header_group}>
        <img className={s.logo} src={logo} alt="logo"></img>
        <nav>
          <ul className={s.ul}>
            <li>
              <NavLink
                className={s.header_search_title}
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Поиск
              </NavLink>
            </li>
            <li>
              <NavLink
                className={s.header_favorites_title}
                to="favorites"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Избранное
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <LogOutBtn />
    </header>
  );
};
export default Header;
