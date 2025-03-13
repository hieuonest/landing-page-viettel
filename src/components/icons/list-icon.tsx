import React from "react";

function ListIcon({
  color = "currentColor"
}: {
  color?: string
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
    >
      <rect width="17" height="4" fill={color} />
      <rect y="6" width="17" height="4" fill={color} />
      <rect y="12" width="17" height="4" fill={color} />
    </svg>
  );
}

export default ListIcon;
