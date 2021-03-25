import { ViewportProvider } from "@Utils/Viewport";
import Detector from "@Utils/Detector";
const App = () => (
  <div className={"flex-vertical full-size"}>
    <ViewportProvider>
      <Detector />
    </ViewportProvider>
  </div>
);

export default App;
