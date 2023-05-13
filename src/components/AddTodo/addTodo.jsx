import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const AddTodo = ({ todo, setTodo }) => {

   const [value, setValue] = useState('');

   const saveTodo = () => {
      setTodo(
         [...todo, {
            id: uuidv4(),
            title: value,
            done: false,
         }]
      )
      setValue('');
   }

   return (
      <>
         <div className="todo__title">Create a todo</div>

         <div className="todo__form">
            <div className="todo__inputbox">
               <label className="todo__input-title">What's on your todo list?</label>
               <input className="todo__input" placeholder="e.g. get a milk" value={value} onChange={(e) => setValue(e.target.value)} />
            </div>

            {/* <div className="todo__category">
               <div className="todo__category-title">Pick a category</div>
               <div className="todo__category-pickbox">
                  <div className="todo__pickbox-item">
                     <input type="radio" className="todo__input-radio" id="radio" />
                     <label htmlFor="radio" className="todo__input-description">Business</label>
                  </div>
                  <div className="todo__pickbox-item">
                     <input type="radio" className="todo__input-radio red-radio" id="radio-2" />
                     <label htmlFor="radio-2" className="todo__input-description">Personal</label>
                  </div>
               </div>
            </div> */}

            <button onClick={saveTodo} className="todo__add-button">
               Add todo
            </button>
         </div>
      </>
   )
}

export default AddTodo;