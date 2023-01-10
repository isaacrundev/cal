import React from "react";
import { CssBaseline, AppBar, Toolbar, Typography, Box } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalculateIcon from "@mui/icons-material/Calculate";
import TdeeCal from "../pages/TdeeCal";
// import { Link } from "react-router-dom";

export default function Header() {
  const clickHandler = () => {
    return <TdeeCal />;
  };
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              maxWidth: "1366px",
              margin: "0 auto",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                {/* <Link to="/"> */}
                <FitnessCenterIcon />
                <Typography variant="h5">Website Title</Typography>
                {/* </Link> */}
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                {/* <Link to="/dashboard"> */}
                <DashboardIcon fontSize="small" />
                <Typography variant="subtitle1">Dashboard</Typography>
                {/* </Link> */}
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <button onClick={clickHandler}>
                  {/* <Link to="/tdeecal"> */}
                  <CalculateIcon fontSize="small" />
                  <Typography variant="subtitle1">Calculator</Typography>
                </button>
                {/* </Link> */}
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
