import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import PrivateRoute from "./components/HOC/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./actions";
import Products from "./containers/Products/index";
import User from "./containers/Users";
import { getUsers } from "./actions/users.actions";
import { getProducts } from "./actions/product.action";
function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const product = useSelector((state) => state.product);

  //componentDidMount or componentDidUpdate
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
      dispatch(getUsers());
      dispatch(getProducts());
    }
  }, [auth.authenticate, product]);

  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/" exact component={Home} />

        <PrivateRoute path="/users" component={User} />
        <PrivateRoute path="/products" component={Products} />

        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
