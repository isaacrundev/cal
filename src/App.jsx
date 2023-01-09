import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TdeeCal from "./pages/TdeeCal";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tdeecal" element={<TdeeCal />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
