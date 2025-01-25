import { Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Details from "./components/details/Details";
import Store from "./components/store/Store";
import Routers from "./routers/Routers";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Routers />} path="/" />
        <Route element={<Details />} path="/details" />
        <Route element={<Store />} path="/store" />
        <Route element={<About />} path="/about" />
      </Routes>
    </>
  );
}
