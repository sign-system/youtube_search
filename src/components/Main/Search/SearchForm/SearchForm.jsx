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


// 96c6b-5c934 used 23.10.24
// 52ddb-d6eed used 12.12.24
// bb1a4-59af8
// 754cd-0a73a
// 741f5-7365f
// f6c7a-2ee20
// 11700-d1e20
// 0c6aa-1c108
// f1562-93a19
// 2c520-a6b38
// 6d270-f2d10
// b85a2-62d76
// b67b6-82425
// b27c9-930ca
// 9fe5e-94a83
// 28de7-01856

____________________________

// 1. 6635 7770		 6. 3644 4976
// 2. 7345 0572		 7. 1054 1763
// 3. 9005 4319		 8. 7859 9958
// 4. 9038 2129		 9. 3476 7256
// 5. 2620 6529		10. 6409 7095

// PA analysis kg
// 1 used

____________________________

// limelight-useable-married-january-underwent
// bdn

____________________________

// island flower dilemma little 
// heart car orange scatter round 
// purse violin front laptop enhance
// security coffee lift such grant 
// top iron federal lonely spice

// not space