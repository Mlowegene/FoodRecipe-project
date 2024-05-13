import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Home from "./Pages/home";
import Favorites from "./Pages/favorites";
import Details from "./Pages/details";

function App() {
  return (
    <>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/recipe-item/:id" element={<Details />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
