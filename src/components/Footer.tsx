import React, { Fragment } from "react";

const footerStyle = {
  width: "100%",
  height: "10%",
  backgroundColor: "#191a2e",
};

const marginStyle = {
  width: "calc(100% - 32px)",
  height: "calc(100% - 32px)",
  margin: "16px",
  // border: "2px solid black",
};

const Footer = () => {
  return (
    <Fragment>
      <div style={footerStyle}>
        <div style={marginStyle}></div>
      </div>
    </Fragment>
  );
};

export default Footer;
