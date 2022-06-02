import s from "./VideoList.module.css";

const VideoList = ({ videos }) => {
  const url = "https://www.youtube.com/embed/";

  return (
    <div className={s.videos}>
      {videos.map((video) => (
        <div className={s.video} key={video.id.videoId}>
          <iframe
            title="YouTube video player"
            width="320"
            height="180"
            src={video.id.videoId ? url + video.id.videoId : url}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
            allowFullScreen
          ></iframe>
          <div className={s.video_title}>{video.snippet.title}</div>
          <div className={s.video_published_at}>
            {video.snippet.publishedAt}
          </div>
          <div className={s.video_channel_title}>
            {video.snippet.channelTitle}
          </div>
          <div className={s.video_description}>{video.snippet.description}</div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
