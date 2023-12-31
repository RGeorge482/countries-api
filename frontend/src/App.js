import SearchCountry from "./components/SearchCountry";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchCountry />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
