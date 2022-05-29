import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AuthPage from "./components/AuthPage/AuthPage";
import Main from "./components/Main/Main";
import useToken from "./useToken";

function App() {
  const { token, setToken } = useToken();
  if (!token) {
    return <AuthPage setToken={setToken} />;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
