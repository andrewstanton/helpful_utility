import React, { useRef, useEffect } from "react";

const useInsideClick = ref => {
  const handleClickInside = e => {
    if (ref.current && ref.current.contains(e.target)) {
      console.log("SUH BOO");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickInside);
    return () => {
      document.removeEventListener("mousedown", handleClickInside);
    };
  });
};

export const InsideClick = ({ children }) => {
  const wrapRef = useRef(null);
  useInsideClick(wrapRef);

  return <div ref={wrapRef}>{children}</div>;
};
