import { Fragment, useEffect, useState } from "react";

const navigationStyle = {
  width: "20%",
};

const mainStyle = {
  width: "80%",
};

const marginStyle = {
  width: "calc(100% - 32px)",
  height: "calc(100% - 32px)",
  margin: "16px",
  border: "2px solid black",
};

const Main = () => {
  const [numbers, setNumbers] = useState<Array<string>>([]);
  const onCreate = () => {
    setInterval(() => {
      for (let i = 0; i < 50; i++) {
        const randNum: string = Math.floor(Math.random() * 100).toString();
        setNumbers((numbers) => [...numbers, randNum]);
      }
      console.log(numbers);
    }, 10000);
  };
  // onCreate();
  return (
    <div className={"flex-horizontal full-size"}>
      <div style={mainStyle}>
        <div style={marginStyle}></div>
      </div>
      <div style={navigationStyle}>
        <div style={marginStyle}></div>
      </div>
    </div>
  );
};
export default Main;
