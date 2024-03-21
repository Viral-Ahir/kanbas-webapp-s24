import Nav from "../nav";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import { Navigate } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";

function Labs() {
  return (
    // <div className="container-fluid">
    <Provider store={store}>
      <Nav />
      <h1>Labs</h1>
      <Link to="/Labs/a3">Assignment 3</Link> |
      <Link to="/Labs/a4">Assignment 4</Link>
      <Routes>
        <Route path="/" element={<Navigate to="a3" />} />
        <Route path="/a3/*" element={<Assignment3 />} />
        <Route path="/a4" element={<Assignment4 />} />
      </Routes>
    </Provider>
    // </div>
  );
}
export default Labs;
