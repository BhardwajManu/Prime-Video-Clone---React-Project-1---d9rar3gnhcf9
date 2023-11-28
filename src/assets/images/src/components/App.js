import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Main from "./HomePage/Main";
import MainFooter from "./Footer/MainFooter";
import LoginComponent from "./Login/LoginComponent";
import { Stickyheader } from "./stickeyheader/Stickyheader";

function App() {
  return (
    <div className="App">
      <Stickyheader />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Main />} />
        </Routes>
      </BrowserRouter>

      {/* <LoginComponent /> */}
      <MainFooter />
    </div>
  );
}

export default App;
