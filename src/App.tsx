import { Toaster } from "react-hot-toast";
import { Routes } from "./Routes";
import GlobalStyle from "./Styles/global";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        <Toaster />
      </div>
      <Routes />
    </>
  );
};

export default App;
