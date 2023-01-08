import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/tdeecal">TDEE Calculator</Link>{" "}
      </nav>
    </>
  );
}
