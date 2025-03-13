import React from "react";

function GridIcon({
  color = "currentColor"
}: {
  color?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
    >
      <rect width="6" height="6" fill={color} />
      <rect x="9" width="6" height="6" fill={color} />
      <rect y="10" width="6" height="6" fill={color} />
      <rect x="9" y="10" width="6" height="6" fill={color} />
    </svg>
  );
}

export default GridIcon;
