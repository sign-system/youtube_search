import axios from "axios";

const KEY = "AIzaSyC7php9QeYlRT1IcNN7f0BSzQMNj9K3TnY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 12,
    key: KEY,
  },
});
