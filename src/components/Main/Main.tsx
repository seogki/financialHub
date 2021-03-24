import { useEffect, useState } from "react";

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
  // border: "2px solid black",
};

const singleStyle = {
  width: "10%",
  textAlign: "center" as const,
};

const Main = () => {
  const [numbers, setNumbers] = useState<Array<string>>([]);

  useEffect(() => {
    const numberInterval = setInterval(() => {
      const tmpArr: Array<string> = [];
      for (let i = 0; i < 50; i++) {
        const randNum: string = Math.floor(Math.random() * 100).toString();
        tmpArr.push(randNum);
      }
      setNumbers(tmpArr);
    }, 1000);
    return () => {
      clearInterval(numberInterval);
    };
  }, []);

  return (
    <div className={"flex-horizontal full-size"}>
      <div style={mainStyle}>
        <div style={marginStyle} className={"relative"}>
          <div className={"absolute flex-center flex-wrap full-size"}>
            {numbers.map((m, i) => (
              <div style={singleStyle} key={i}>
                {m}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={navigationStyle}>
        <div style={marginStyle}></div>
      </div>
    </div>
  );
};
export default Main;
