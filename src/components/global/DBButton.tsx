"use client";
import { Button, ButtonProps } from "@mui/material";
import React, { ReactNode } from "react";

export interface DBButtonProps extends ButtonProps {
  label: any;
  variant?: "text" | "outlined" | "contained";
  color?: "primary" | "secondary" | "error";
  padding?: string;
  rounded?: boolean;
  radius?: string;
  iconBefore?: ReactNode;
  disabled?: boolean;
}

const sxOptions = (
  color: "primary" | "secondary" | "error",
  disabled: boolean
) => ({
  text: {
    color: `var(--${!disabled ? color : "deactivated-text"}) !important`,
    backgroundColor: "transparent !important",
    border: "none !important",
  },
  outlined: {
    color: `var(--${!disabled ? color : "deactivated-text"}) !important`,
    backgroundColor: "transparent !important",
    border: `1px solid  var(--${!disabled ? color : "deactivated-text"}) !important`,
  },
  contained: {
    color: "white !important",
    backgroundColor: `var(--${!disabled ? color : "deactivated-text"}) !important`,
    border: `1px solid  var(--${!disabled ? color : "deactivated-text"}) !important`,
  },
});

function DBButton({
  label,
  variant,
  color,
  onClick,
  padding,
  rounded,
  radius,
  sx,
  iconBefore,
  disabled = false,
  ...rest
}: DBButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant={"text"}
      sx={{
        minWidth: "100px",
        borderRadius:
          radius ??
          (!rounded
            ? "var(--button-border-radius) !important"
            : "9999999px !important"),
        padding: padding || "var(--button-padding) !important",
        whiteSpace: "nowrap",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        textTransform: "none",
        ...sxOptions(color || "primary", disabled)[variant || "text"],
        ...sx,
      }}
      startIcon={rest.startIcon}
      endIcon={rest.endIcon}
      {...rest}
    >
      <div>{label}</div>
    </Button>
  );
}

export default DBButton;
