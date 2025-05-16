import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import "./app.css";
import store from "./utils/store";
import { Provider } from "react-redux";
import Profile from "../components/Profile";
import Feed from "../components/feed";
import Body from "./Body";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/profile" element={<Profile/>}></Route>
              <Route path="/feed" element={<Feed />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
