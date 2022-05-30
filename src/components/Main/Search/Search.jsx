import s from "./Search.module.css";

const Search = () => {
  return (
    <div className="search">
      <div className={s.seacrh_title}>Поиск видео</div>
      <input type="search" placeholder="Search" />
      <button>Search</button>
    </div>
  );
};

export default Search;
