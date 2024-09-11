import { useState } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = (event) => {
    // synthetic event
    // console.log(event);
    event.preventDefault();
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            // type="button"
            // onSubmit={handleAddButtonClicked}
            className="btn btn-success kg-button"
            // onClick={handleAddButtonClicked}
          >
            {/* Add icon change*/}
            <MdOutlineAddShoppingCart></MdOutlineAddShoppingCart>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
