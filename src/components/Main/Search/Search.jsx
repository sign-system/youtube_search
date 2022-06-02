import s from "./Search.module.css";
import youtube from "../../../youtube";
import { useState } from "react";
import SearchForm from "./SearchForm/SearchForm";
import VideoList from "../VideoList/VideoList";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [videos, setVideos] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    youtube
      .get("/search", {
        params: {
          q: searchTerm,
        },
      })
      .then((response) => {
        console.log(response.data.items[0]);
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
