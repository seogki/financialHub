import { Fragment } from "react";
import LoginBtn from "@Components/fragment/button/Login";
const headerStyle = {
  width: "100%",
  height: "7%",
  // boxShadow: "0 6px 15px 0px grey",
  backgroundColor: "white",
  borderBottom: "1px solid #dbdbdb",
  color: "#2196F3",
  fontWeight: "bold" as const,
};

const marginStyle = {
  width: "calc(100% - 24px)",
  height: "calc(100% - 24px)",
  margin: "12px",
  justifyContent: "space-between",
};

const titleStyle = {
  marginLeft: "3%",
};

const btnStyle = { marginRight: "3%" };

const Header = () => {
  return (
    <Fragment>
      <div style={headerStyle}>
        <div style={marginStyle} className={"flex"}>
          <div className={"flex-center"} style={titleStyle}>
            TITLE
          </div>
          <div className={"flex-center"} style={btnStyle}>
            <LoginBtn />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
