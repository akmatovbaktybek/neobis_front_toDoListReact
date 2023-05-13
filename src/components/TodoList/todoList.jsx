import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const ToDoList = ({ todo, setTodo }) => {

   const [edit, setEdit] = useState('');

   const [value, setValue] = useState('');

   const deleteToDo = (id) => {
      let newToDo = [...todo].filter(item => item.id !== id);
      setTodo(newToDo)
   };

   const statusToDo = (id) => {
      let newTodo = [...todo].filter(item => {
         if (item.id === id) {
            item.done = !item.done
         }
         return item
      })
      setTodo(newTodo)
   }

   const editToDo = (id, title) => {
      setEdit(id)
      setValue(title)
   }

   const saveToDo = (id) => {
      let newTodo = [...todo].map((item) => {
         if (item.id === id) {
            item.title = value;
         }
         return item;
      })
      setTodo(newTodo);
      setEdit(null);
   }

   return (
      <>
         <div className="todo__title">Todo list</div>

         <ol className="todo__task-list">
            {
               todo.map(item => (

                  <li key={item.id} className="todo__list-item">
                     <div className="todo__item-content">
                        <div className="todo__task-description">
                           {/* <div className="todo__description-category"></div> */}
                           {
                              edit === item.id ?
                                 <div>
                                    <input onChange={(e) => { setValue(e.target.value) }} value={value} className="todo__description-text"
                                       id="description-input" />
                                 </div> :
                                 <div className={item.done ? "close" : ""}>{item.title}</div>
                           }
                        </div>
                        {
                           edit === item.id ?
                              <div className="todo__task-buttons">
                                 <button onClick={() => { saveToDo(item.id) }} className="todo__task-button ok-button">Save</button>
                              </div>
                              :
                              <div className="todo__task-buttons">
                                 <button onClick={() => { statusToDo(item.id) }} className={item.done ? "todo__task-button done-button" : "todo__task-button ok-button"}><FontAwesomeIcon icon={faCheck} /></button>
                                 <button onClick={() => { editToDo(item.id, item.title) }} className="todo__task-button edit-button">Edit</button>
                                 <button onClick={() => { deleteToDo(item.id) }} className="todo__task-button delete-button">Delete</button>
                              </div>
                        }
                     </div>
                  </li>
               ))
            }
         </ol>
      </>
   )
};

export default ToDoList;