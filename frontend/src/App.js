import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CatList from "./CatList";
import CreateUser from "./CreateUser"
import SuperLogin from "./SuperLogin"

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={"/login"}>
            <SuperLogin />
          </Route>
          <Route path={"/cat-list"}>
            <CatList />
          </Route>
          <Route path={"/createUser"}>
            <CreateUser />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}