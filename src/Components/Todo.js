import React, { useState } from "react";
import ShowTodo from "./ShowTodo";
import "./Todo.css";
function Todo() {
  const [task, setTask] = useState("add some task");
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  const onChangeHandler = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault(); //
    const newData = task;
    if (newData !== "") {
      setData([...data, newData]);
      setCount(count + 1);
    }
    setTask(""); // whenever user hit submit this clears the previous task from i/p field.
  };

  const deleteItem = (a) => {
    const finalData = data.filter((curEle, index) => {
      return index !== a;
    });
    setData(finalData);
    setCount(count - 1);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="shadow mt-5">
          <div className="bg-primary text-white">
            <div className="p-2">
              <h4 className="text-center">THISG TO DO ({count})</h4>
            </div>
          </div>
          {data.map((value, index) => {
            return (
              <ShowTodo
                key={index}
                id={index}
                task={value}
                onSelcet={deleteItem}
              />
            );
          })}

          <form onSubmit={submitHandler}>
            <div className="row justify-content-between text-white mx-2 ">
              <div className="form-group col-lg-9 accordion mt-3">
                <input
                  id="todo-input"
                  type="text"
                  className="form-control p-2"
                  value={task}
                  onChange={onChangeHandler}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary mt-3 p-2 mb-2 ml-2 col-lg-3 col-md-3 col-sm-3"
              >
                ADD TODO
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Todo;
