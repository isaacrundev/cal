import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import TdeeCal from "./pages/TdeeCal";
import Dashboard from "./pages/Dashboard";
import { CssBaseline, AppBar, Toolbar, Typography } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalculateIcon from "@mui/icons-material/Calculate";

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h4">
            <FitnessCenterIcon fontSize="large" />
            <Link to="/">Website Title</Link>
          </Typography>
          <Typography variant="h6">
            <DashboardIcon />
            <Link to="/dashboard">Dashboard</Link>
          </Typography>
          <Typography>
            <CalculateIcon />
            <Link to="/tdeecal">TDEE Calculator</Link>
          </Typography>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tdeecal" element={<TdeeCal />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
