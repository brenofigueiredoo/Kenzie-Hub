import "./App.css";
import { RoutersMain } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import ContextProvider from "./contexts/UserContext";

function App() {
  return (
    <>
      <ContextProvider>
        <div className="divMain">
          <div className="divForm">
            <RoutersMain />
          </div>
        </div>
        <ToastContainer />
      </ContextProvider>
    </>
  );
}

export default App;
