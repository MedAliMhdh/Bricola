import React, { Fragment } from "react";
import spinner from "./spinner.jpg";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        style={{
          width: "200px",
          margin: "auto",
          marginTop: "200px",
          display: "block",
        }}
        alt='Loading'
      />
    </Fragment>
  );
};

export default Spinner;
