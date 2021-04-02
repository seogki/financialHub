import { useEffect, useReducer, useRef, useState } from "react";
import axios from "axios";
import "@Css/main.scss";

const marginStyle = {
  width: "calc(100% - 32px)",
  height: "calc(100% - 32px)",
  margin: "16px",
};

interface Coins {
  new: Array<any>;
  old?: Array<any>;
}

const Main = () => {
  const [newCoins, setNewCoins] = useState<Coins>({ new: [], old: [] });
  const loadingRef = useRef<Boolean>(true);
  const [boxes, setBoxes] = useState<Array<number>>([]);
  const boxTest = () => {
    const tmpArr: Array<number> = [];
    for (let i = 0; i < 8; i++) {
      tmpArr.push(i);
    }
    setBoxes(tmpArr);
  };
  const numberFormat = (number: number) => number.toLocaleString("ko-KR");
  const replace2Thumb = (url: string) => url.replace("/large/", "/thumb/");
  const coinDifference = (newPrice: number, oldPrice: number) => {
    const difference = oldPrice - newPrice;
    if (difference === 0) {
      return "변동없음";
    } else {
      return `${difference.toFixed(2)} W`;
    }
  };
  useEffect(() => {
    boxTest();
    const numberInterval = setInterval(() => {
      axios
        .get("/AllCoin")
        .then((res) => {
          const tmpArr: Array<any> = [];
          const { data } = res;
          const list = data.data.data;
          for (let i = 0; i < 10; i++) {
            tmpArr.push(list[i]);
          }
          loadingRef.current = false;
          setNewCoins((prev) => ({ new: tmpArr, old: prev.new }));
        })
        .catch((err) => {
          console.log(err);
        });
    }, 10000);
    return () => clearInterval(numberInterval);
  }, []);

  return (
    <div className={"main-desktop-layout full-size hide-scroll"}>
      <div className={"navigation"}>
        <div style={marginStyle} className={"box-container flex-vertical"}>
          {boxes.map((m, i) => (
            <div className={"box"} key={i}></div>
          ))}
        </div>
      </div>
      <div className={"main oy-scroll"}>
        <div style={marginStyle} className={"relative"}>
          <div className={"absolute flex-vertical full-size "}>
            {!loadingRef.current ? (
              newCoins.new.map((coin, i) => (
                <div className={"single-container flex-center"} key={coin.id}>
                  <div className={"img-container relative mr8"}>
                    <img
                      src={replace2Thumb(coin.image)}
                      className={"full-size"}
                      alt=""
                    />
                  </div>
                  <div className={"name bold mr16"}>{coin.name} </div>
                  {newCoins.old && newCoins.old[i] ? (
                    <div className={"old-price bold"}>
                      <span>{numberFormat(newCoins.old[i].current_price)}</span>{" "}
                      W
                    </div>
                  ) : null}
                  {newCoins.old && newCoins.old[i] ? (
                    <div className={"measure-price bold"}>
                      <span>
                        {coinDifference(
                          newCoins.new[i].current_price,
                          newCoins.old[i].current_price
                        )}
                      </span>
                    </div>
                  ) : null}
                  <div className={"price mla bold"}>
                    <span>{numberFormat(coin.current_price)}</span> W
                  </div>
                </div>
              ))
            ) : (
              <h3>LOADING....</h3>
            )}
          </div>
        </div>
      </div>
      <div className={"sub"}>
        <div
          style={marginStyle}
          className={"flex-vertical list-container"}
        ></div>
      </div>
    </div>
  );
};
export default Main;
