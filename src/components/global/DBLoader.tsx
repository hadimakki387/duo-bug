"use client";
import { CircularProgress } from "@mui/material";
import React from "react";

function DBLoader() {
  return (
    <CircularProgress
      sx={{
        color: "var(--primary)",
      }}
    />
  );
}

export default DBLoader;
