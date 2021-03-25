import { useViewPort } from "@Utils/Viewport";
import MobileComponent from "@Components/mobile/Mobile";
import DesktopComponent from "@Components/desktop/Desktop";
const Detector = () => {
  const { width } = useViewPort();
  const breakpoint: number = 720;

  return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};

export default Detector;
