import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componenst/Header";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
