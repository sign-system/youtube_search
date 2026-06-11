import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Favorites from "./components/Main/Favorites/Favorites";
import Main from "./components/Main/Main";
import Search from "./components/Main/Search/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Search />} />
            <Route path="favorites" element={<Favorites />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
