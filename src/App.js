import { ConfigProvider } from "antd";
import "./App.css";
import AboutUspage from "./sections/AboutUs/About";
import Banner from "./sections/Banner/Banner";
import Best from "./sections/Best/Section/Best";
import Bigpromopage from "./sections/Bigpromo/Bigpromo";
import FooterPage from "./sections/Footer/Sections/Footer";
// import AboutUs from "./sections/AboutUs/";
import Header from "./sections/Header/";
import Main from "./sections/Main/";
import Recommend from "./sections/Recommed/Section/Recommend";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Raleway",
          fontSize: 15,
        },
      }}
    >
      <div className="">
        <Header />
        <Main />
        <Bigpromopage />
        <Recommend />
        <Best />
        <Banner />
        <FooterPage />
      </div>
    </ConfigProvider>
  );
}

export default App;
