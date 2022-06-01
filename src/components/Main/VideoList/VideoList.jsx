import s from "./VideoList.module.css";

const VideoList = ({ videos }) => {
  return (
    <div className={s.videos}>
      {videos.map((video) => (
        <div className={s.video} key={video.id.videoId}>
          <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
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
