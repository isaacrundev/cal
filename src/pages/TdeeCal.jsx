import React from "react";
import { Container, Typography } from "@mui/material";

export default function TdeeCal() {
  return (
    <>
      <Container sx={{ mt: 3 }} maxWidth="sm">
        <Typography variant="h4" textAlign="center">
          TDEE Calculator
        </Typography>
      </Container>
    </>
  );
}
