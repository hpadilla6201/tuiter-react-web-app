import TodoItem from "./TodoItem.js";
import todos from "./todos.js";
const TodoList = () => {
   return(`
      <ul>
         ${
            todos.map(todo => 
               <TodoItem todo={todo} index={index} />
            ).join('')
         }
      </ul>
   `);
}
export default TodoList;