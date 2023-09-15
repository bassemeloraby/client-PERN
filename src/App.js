import React, { Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InputTodo from "./components/InputTodo";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
      </div>
    </Fragment>
  );
}

export default App;
