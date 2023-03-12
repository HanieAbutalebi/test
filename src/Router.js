import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './features/components/Home';
import Movie from './features/components/Movie';
import Main from "./features/components/Main";

export default function App() { 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/search" element={<Main />} />

      </Routes>
    </BrowserRouter>
  );
}