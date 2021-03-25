import { Fragment } from "react";

const headerStyle = {
  width: "100%",
  height: "5%",
  boxShadow: "0 6px 15px 0px grey",
  backgroundColor: "#f0f0f0",
  color: "#3B2B3E",
  fontWeight: "bold" as const,
};

const marginStyle = {
  width: "calc(100% - 32px)",
  height: "calc(100% - 32px)",
  margin: "16px",
};

const titleStyle = {
  marginLeft: "calc(10% - 16px)",
};

const Header = () => {
  return (
    <Fragment>
      <div style={headerStyle}>
        <div style={marginStyle} className={"flex"}>
          <div className={"flex-center"} style={titleStyle}>
            COIN HUB
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
