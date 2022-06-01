import s from "./Search.module.css";
import youtube from "../../../youtube";
import { useState } from "react";
import SearchForm from "./SearchForm/SearchForm";
import VideoList from "../VideoList/VideoList";

const Search = () => {
  const KEY = "AIzaSyC7php9QeYlRT1IcNN7f0BSzQMNj9K3TnY";
  const [searchTerm, setSearchTerm] = useState("");
  const [videos, setVideos] = useState([]);

  const handleChange = (event) => {
    setSearchTerm({
      term: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    youtube
      .get("/search", {
        params: {
          // part: "snippet",
          maxResults: 12,
          key: KEY,
          q: searchTerm.term,
        },
      })
      .then((response) => {
        console.log(response);
        setVideos(response.data.items);
      });
  };

  return (
    <div className={s.seacrh}>
      <SearchForm handleSubmit={handleSubmit} handleChange={handleChange} />
      <VideoList videos={videos} />
    </div>
  );
};

export default Search;
