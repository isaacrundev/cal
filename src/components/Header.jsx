import React from "react";
import { CssBaseline, AppBar, Toolbar, Typography, Box } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalculateIcon from "@mui/icons-material/Calculate";
import { Link } from "react-router-dom";
import { Height } from "@mui/icons-material";

export default function Header() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Link to="/">
                <Typography variant="h4">
                  <FitnessCenterIcon fontSize="large" />
                  Website Title
                </Typography>
              </Link>
            </Box>
            <Box>
              <Link to="/dashboard">
                <Typography variant="h6">
                  <DashboardIcon />
                  Dashboard
                </Typography>
              </Link>
            </Box>
            <Box>
              <Link to="/tdeecal">
                <Typography variant="h6">
                  <CalculateIcon />
                  TDEE Calculator
                </Typography>
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
