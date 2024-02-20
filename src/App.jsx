import { ToastContainer } from "react-toastify";
import "./App.css";
import AuthContextProvider from "./Context/AuthContext";
import WatchlistContextProvider from "./Context/WatchlistContext";
import Routing from "./components/Routes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <AuthContextProvider>
        <WatchlistContextProvider>
          <ToastContainer />

          <Routing />
        </WatchlistContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
