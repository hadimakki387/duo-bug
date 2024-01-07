import { IconProps } from "@/services/types";
import React from "react";

export const ExpandMore: React.FC<IconProps> = ({
  size = 10,
  fill = "#4C4E64",
  ...rest
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M0 0.5L5 5.5L10 0.5H0Z" fill={fill} fillOpacity="0.54" />
    </svg>
  );
};
