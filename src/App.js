import AddTodo from "./components/AddTodo/addTodo";
import Header from "./components/Header/header";
import ToDoList from "./components/TodoList/todoList";
import "./App.css"
import { useState } from "react";

const App = () => {
   const [todo, setTodo] = useState([
      {
         id: 1,
         title: "Выполнить 5-ый проект",
         done: false,
      },
      {
         id: 2,
         title: "Залить на гит",
         done: false,
      },
      {
         id: 3,
         title: "Завершить проект",
         done: false,
      },
   ])
   console.log(todo);


   return (
      <section className="main">
         <div className="container">
            <div className="main__content">
               <div className="main__todo">
                  <Header />
                  <AddTodo todo={todo} setTodo={setTodo} />
                  <ToDoList todo={todo} setTodo={setTodo} />
               </div>
            </div>
         </div>
      </section>
   )
}

export default App;