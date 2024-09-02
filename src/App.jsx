import "./App.css";
import { router } from "./router/index";
import { RouterProvider } from "react-router-dom";
import ContextUser from "./Context/contextUser";
// import Header from "./Components/Header";
// import Bare from "./Components/Bare";

function App() {
  return (
    <>
      <ContextUser>
        <RouterProvider router={router} />
      </ContextUser>
    </>
  );
}

export default App;
