import { useEffect, useState } from "react";
import "@Css/main.scss";

const marginStyle = {
  width: "calc(100% - 32px)",
  height: "calc(100% - 32px)",
  margin: "16px",
  // border: "2px solid black",
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
    <div className={"main-mobile-layout full-size"}>
      <div className={"navigation"}>
        <div style={marginStyle}></div>
      </div>
      <div className={"main"}>
        <div style={marginStyle} className={"relative"}>
          <div className={"absolute flex-center flex-wrap full-size"}>
            {numbers.map((m, i) => (
              <div className={"single flex-center"} key={i}>
                {m}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
