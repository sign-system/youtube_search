import s from "./Favorites.module.css";
import { useState, useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [isDisplayStyleList, setDisplayStyle] = useState(true);
  const url = "https://www.youtube.com/embed/";

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const removeFavorite = (videoId) => {
    const updated = favorites.filter((v) => v.id.videoId !== videoId);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className={s.container}>
      <div className={s.header}>
        <h1 className={s.title}>❤️ Избранные видео</h1>
        <p className={s.subtitle}>
          {favorites.length === 0
            ? "Здесь появятся ваши любимые видео"
            : `Всего ${favorites.length} видео в избранном`}
        </p>
      </div>

      {favorites.length > 0 && (
        <>
          <div className={s.button_wrapper}>
            <button
              className={`${s.view_btn} ${
                isDisplayStyleList ? s.active : ""
              }`}
              onClick={() => setDisplayStyle(true)}
            >
              Список
            </button>
            <button
              className={`${s.view_btn} ${
                !isDisplayStyleList ? s.active : ""
              }`}
              onClick={() => setDisplayStyle(false)}
            >
              Сетка
            </button>
          </div>

          <div
            className={
              isDisplayStyleList ? s.videos_list : s.videos_grid
            }
          >
            {favorites.map((video) => (
              <div
                className={
                  isDisplayStyleList ? s.video_item_list : s.video_item_grid
                }
                key={video.id.videoId}
              >
                <div className={s.iframe_wrapper}>
                  <iframe
                    className={s.iframe}
                    title="YouTube video player"
                    width="320"
                    height="180"
                    src={url + video.id.videoId}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className={s.info}>
                  <h3 className={s.video_title}>{video.snippet.title}</h3>
                  <p className={s.channel_title}>
                    {video.snippet.channelTitle}
                  </p>
                  <p className={s.description}>{video.snippet.description}</p>
                  <button
                    className={s.remove_btn}
                    onClick={() => removeFavorite(video.id.videoId)}
                  >
                    <AiFillHeart /> Удалить из избранного
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {favorites.length === 0 && (
        <div className={s.empty_state}>
          <div className={s.empty_icon}>📺</div>
          <p className={s.empty_text}>
            Вы еще не добавили видео в избранное
          </p>
          <p className={s.empty_hint}>
            Нажимайте на значок сердца при поиске, чтобы сохранить видео
          </p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
