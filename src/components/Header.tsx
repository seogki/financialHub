import { Fragment } from "react";

const headerStyle = {
    width: "100%",
    height: "10%",
    backgroundColor : "grey"
}

const Header = () => {
    return (
        <Fragment>
            <div style={headerStyle}>
                Header
            </div>
        </Fragment>
    )
}

export default Header;