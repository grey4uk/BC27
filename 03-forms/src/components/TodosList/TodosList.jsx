const TodosList = ({ todos, filteredTodos }) => {
  return (
    <ol>
      {filteredTodos.map((item) => {
        const {
          title,
          desc,
          agree,
          priority,
          category,
          id,
        } = item;
        return (
          <li key={id}>
            <h4>{title}</h4>
            <h5>{desc}</h5>
            <p>{agree ? 'Agreed' : 'Non Agreed'}</p>
            <p>Category: '{category}'</p>
            <p>Order in list: {todos.indexOf(item) + 1}</p>
          </li>
        );
      })}
    </ol>
  );
};

export default TodosList;
