import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home/home";
import { HomeCard } from "./components/Homecard";
import { MainCard } from "./components/MainCard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/home/:id" element={<HomeCard />} />
        <Route path="/product/:id" element={<MainCard />} />
      </Routes>
    </>
  );
}

export default App;
