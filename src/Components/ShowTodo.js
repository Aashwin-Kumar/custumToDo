import React, { useState } from "react";
import "./Todo.css";

function ShowTodo(props) {
  const [selected, setSelected] = useState("");

  const selectHandler = () => {
    console.log("seleccted");
    setSelected("✔️");
  };
  return (
    <div className="container">
      <div className="row col-12">
        <div className="d-flex d-flex col-8 col-lg-8 col-sm-5">
          <div className="form-check m-2 overflow-auto">
            <input
              className="form-check-input shadow-none"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onClick={selectHandler}
            />
            <label className="form-check-label d-block" htmlFor="flexCheckDefault">
              {props.task}
            </label>
          </div>
        </div>
        <div className="col-2 d-flex justify-content-center">
          <button
            className="btn m-2 w-10"
            onClick={() => {
              props.onSelcet(props.id);
            }}
          >
            ❌
          </button>
        </div>
        <h4 className="text-start d-flex col-1 mt-2">{selected}</h4>
      </div>
    </div>
  );
}

export default ShowTodo;
