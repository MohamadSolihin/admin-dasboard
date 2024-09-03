// Imports Icons
import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";

// import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "./App.css";
import Header from "./components/header/Header";
import SideBar from "./components/sideBar/SideBar";
import Main from "./components/main/Main";

import "echarts";

function App() {
  return (
    <>
      <Header />
      <SideBar />
      <Main />
    </>
  );
}

export default App;
