import React from "react";
import { Route } from "react-router-dom";
import logoSvg from "./assets/img/pizza-logo.svg";
import { Header } from "./Components";
import { Home, Cart } from "./pages";
import store from "./redux/store";
import { useDispatch } from "react-redux";
import { filters } from "./redux/reducers/filters";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
