const TodoItem = ({todo, index}) => {
    return(`
      <li key={index}>
        <input type="checkbox"
          ${todo.done ? 'checked' : ''}/>
        ${todo.title}
        (${todo.status})
      </li>`
    );
  }
  export default TodoItem;