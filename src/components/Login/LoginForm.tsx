import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";

const loginFormStyle = {
  width: "500px",
  height: "300px",
};

const marginStyle = {
  width: "calc(100% - 32px)",
  height: "calc(100% - 32px)",
  margin: "16px",
  justifyContent: "center",
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
      <div
        id="login-form"
        className={"border-grey round"}
        style={loginFormStyle}
      >
        <div
          id="margin-wrapper"
          style={marginStyle}
          className={"flex-vertical"}
        >
          <input
            id="id"
            name="id"
            type="text"
            placeholder={user?.id}
            value={id}
            onChange={onChange}
          />
          <input
            id="password"
            name="password"
            type="text"
            placeholder={user?.password}
            value={password}
            onChange={onChange}
          />
          <button onClick={redirectMain}>로그인</button>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginForm;
