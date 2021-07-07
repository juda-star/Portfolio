import React from "react";

export default function Link({ LinkArray }) {
  return (
    <>
      <a href={LinkArray[0]}>
        <img src={LinkArray[1]} alt="tech_logo" />
        <img src={LinkArray[2]} alt="tech_indi" />
      </a>
    </>
  );
}
