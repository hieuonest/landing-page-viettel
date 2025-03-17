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
      {numberValue === 120 && " triệu"}
      {numberValue === 4000 && "+"}
    </>
  );
}

export default HomeCounUp;
