import s from "./SearchForm.module.css";

const SearchForm = ({ handleSubmit, handleChange }) => {
  return (
    <>
      <div className={s.seacrh_title}>Поиск видео</div>
      <form onSubmit={handleSubmit}>
        <input
          className={s.search_input}
          onChange={handleChange}
          type="search"
          name="video-search"
          placeholder="Введите запрос"
        />
        <button className={s.search_button}>Найти</button>
      </form>
    </>
  );
};

export default SearchForm;
