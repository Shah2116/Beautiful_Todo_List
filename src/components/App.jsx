import React, { useState } from "react";
import ToDoItem from "../ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

function addItems(inputText){
  setItems((prevValue) =>{
    return[...prevValue, inputText]
  });
  
}


function deleteItem(id){
 setItems((prevValue)=>{
  return prevValue.filter((items, index) =>{
    return index !== id
  })
 })
}
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
     <InputArea 
      onAdd={addItems}
     />
      <div>
        <ul>
        {items.map((todoItem, index) => 
        <ToDoItem 
        key ={index}
        id = {index}
        text= {todoItem}
        onChecked={deleteItem}
        />
        )}
        </ul>
      </div>
    </div>
  );
}

export default App;
