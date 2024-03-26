import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import TodoInput from "./Components/TodoInput";
import InputList from "./Components/InputList";
import { useState } from "react";
import Congratulation from "./Components/Congratulation";
function App() {
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [listItems, setListItems] = useState([
    { name: "irshad", date: "13-03-2024" },
    { name: "alam", date: "13-03-2024" },
    { name: "irish", date: "13-03-2024" },
  ]);

  const handelInputChange = (event) => {
    setName(event.target.value);
  };
  const handelDateChange = (event) => {
    setDate(event.target.value);
  };
  const HandelAddButtonClick = () => {
    const newListItmes = { name: name, date: date };
    const newItems = [newListItmes, ...listItems];
    setListItems(newItems);
  };
  const handelDeleteClick = (todoName) => {
    const updateList = listItems.filter((itemss) => itemss.name !== todoName);
    setListItems(updateList);
  };
  return (
    <div className="main-cont">
      <div className="containers">
        <Header />
        <TodoInput
          inputChange={handelInputChange}
          dateChange={handelDateChange}
          addButtonClick={HandelAddButtonClick}
        />
        {listItems.length === 0 && <Congratulation />}

        <InputList listItems={listItems} deleteClick={handelDeleteClick} />
      </div>
    </div>
  );
}

export default App;
