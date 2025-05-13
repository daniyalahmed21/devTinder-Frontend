import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "../components/Navbar";
import Body from "./body";
import Login from "../components/Login";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
