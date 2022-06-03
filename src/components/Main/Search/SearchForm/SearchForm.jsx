import s from "./SearchForm.module.css";

const SearchForm = ({ handleSubmit, handleChange }) => {
  return (
    <div className={s.search}>
      <div className={s.search_title}>Поиск видео</div>
      <form className={s.search_form} onSubmit={handleSubmit}>
        <input
          className={s.search_input}
          onChange={handleChange}
          type="search"
          name="video-search"
          placeholder="Введите запрос"
        />
        <button className={s.search_button}>Найти</button>
      </form>
    </div>
  );
};

export default SearchForm;
