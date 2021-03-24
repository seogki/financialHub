import { Fragment } from "react";

const headerStyle = {
  width: "100%",
  height: "10%",
  boxShadow: "0 6px 15px 0px grey",
  backgroundColor: "#f0f0f0",
};

const marginStyle = {
  width: "calc(100% - 32px)",
  height: "calc(100% - 32px)",
  margin: "16px",
};

const Header = () => {
  return (
    <Fragment>
      <div style={headerStyle}>
        <div style={marginStyle} className={"flex"}>
          <div className={"flex-center"}>COIN HUB</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
