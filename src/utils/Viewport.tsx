import { createContext, useContext, useEffect, useState } from "react";
const viewportContext = createContext({});

export const ViewportProvider = ({ children }: any) => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);
  useEffect(() => {
    const handleWindowSize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleWindowSize);

    return () => window.removeEventListener("resize", handleWindowSize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

export const useViewPort = () => {
  const { width, height } = useContext<any>(viewportContext);
  return { width, height };
};
