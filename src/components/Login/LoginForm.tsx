import React, {Fragment} from "react";
import { useHistory } from "react-router-dom";

const loginFormStyle = {
    width: "500px",
    height: "300px"
}

const marginStyle = {
    width : "calc(100% - 32px)",
    height: "calc(100% - 32px)",
    margin : "16px",
    justifyContent : "center"
}

const LoginForm = () => {
    const history = useHistory();
    const redirectMain = () => {
        history.push("/home");
    }

    return (
        <Fragment>
            <div id="login-form" className={"border-grey round"} style={loginFormStyle}>
                <div id="margin-wrapper" style={marginStyle} className={"flex-vertical"} >
                    <input type="text"></input>
                    <input type="text"></input>
                    <button onClick={redirectMain}>
                        로그인
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default LoginForm;