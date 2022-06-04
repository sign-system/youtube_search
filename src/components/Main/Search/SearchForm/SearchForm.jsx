import s from "./SearchForm.module.css";
import { AiOutlineHeart } from "react-icons/ai";

const SearchForm = ({ handleSubmit, handleChange }) => {
  return (
    <div className={s.search}>
      <div className={s.search_title}>Поиск видео</div>

      <form className={s.search_form} onSubmit={handleSubmit}>
        <div className={s.input_and_favicon}>
          <input
            className={s.search_input}
            onChange={handleChange}
            type="text"
            name="video-search"
            placeholder="Введите запрос"
          />
          <AiOutlineHeart className={s.favourites_icon} />
        </div>
        <button className={s.search_button}>Найти</button>
      </form>
    </div>
  );
};

export default SearchForm;
