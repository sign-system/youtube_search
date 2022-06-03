import { useEffect, useState } from "react";
import style from "./VideoList.module.css";
import { BiGridAlt } from "react-icons/bi";
import { BsListUl } from "react-icons/bs";

const VideoList = ({ videos }) => {
  const url = "https://www.youtube.com/embed/";
  const videoProps = videos;
  const [isDisplayStyleList, setDisplayStyle] = useState(true);

  useEffect(() => {
    setDisplayStyle(true);
  }, [videoProps]);

  return (
    <>
      <div className={style.button_wrapper}>
        <BsListUl
          className={style.button_change_display_style}
          onClick={() => setDisplayStyle(true)}
        />
        <BiGridAlt
          className={style.button_change_display_style}
          onClick={() => setDisplayStyle(false)}
        />
      </div>
      <div
        className={isDisplayStyleList ? style.videos_list : style.videos_grid}
      >
        {videos.map((video) => (
          <div
            className={
              isDisplayStyleList ? style.videos_list : style.video_grid
            }
            key={video.id.videoId}
          >
            <iframe
              className={
                isDisplayStyleList ? style.iframe_list : style.iframe_grid
              }
              title="YouTube video player"
              width="320"
              height="180"
              src={video.id.videoId ? url + video.id.videoId : url}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
              allowFullScreen
            ></iframe>
            <div
              className={
                isDisplayStyleList
                  ? style.description_wrapper_list
                  : style.description_wrapper_grid
              }
            >
              <div
                className={
                  isDisplayStyleList
                    ? style.video_title_list
                    : style.video_title_grid
                }
              >
                {video.snippet.title}
              </div>
              <div
                className={
                  isDisplayStyleList
                    ? style.video_channel_title_list
                    : style.video_channel_title_grid
                }
              >
                {video.snippet.channelTitle}
              </div>
              <div
                className={
                  isDisplayStyleList
                    ? style.video_description_list
                    : style.video_description_grid
                }
              >
                {video.snippet.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoList;
