import React from "react";

export const Error = (props) => {
  if (!props.message) return null;

  return <p className="text-sm text-red-700">{props.message}</p>;
};
