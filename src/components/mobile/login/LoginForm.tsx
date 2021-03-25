import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";

const loginFormStyle = {
  width: "400px",
  height: "500px",
};

const marginStyle = {
  width: "calc(100% - 32px)",
  height: "calc(100% - 32px)",
  margin: "16px",
  justifyContent: "center",
};

const inputStyle = {
  height: "30px",
  marginBottom: "8px",
};

const btnStyle = {
  height: "25px",
};

interface User {
  id?: string;
  password?: string;
}

interface Form {
  id: string;
  password: string;
}

const LoginForm = (user: User | undefined) => {
  const history = useHistory();
  const [form, setForm] = useState<Form>({ id: "", password: "" });

  const { id, password } = form;

  const redirectMain = () => {
    history.push("/home");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <Fragment>
      <div id="login-form" style={loginFormStyle}>
        <div
          id="margin-wrapper"
          style={marginStyle}
          className={"flex-vertical"}
        >
          <input
            id="id"
            name="id"
            type="text"
            style={inputStyle}
            placeholder={user?.id}
            value={id}
            onChange={onChange}
          />
          <input
            id="password"
            name="password"
            type="text"
            style={inputStyle}
            placeholder={user?.password}
            value={password}
            onChange={onChange}
          />
          <button style={btnStyle} onClick={redirectMain}>
            모바일
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginForm;
