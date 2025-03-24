"use client";
import React from "react";
import { useCountUp } from "./use-count-up";
function HomeCounUp({
  numberValue,
}: {
  numberValue: number;
}) {
  return (
    <>
      {useCountUp(numberValue)}
      {(numberValue === 4000 || numberValue === 20) && "+"}
    </>
  );
}

export default HomeCounUp;
