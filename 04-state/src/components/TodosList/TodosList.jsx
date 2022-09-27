import { ReactComponent as DeleteImg } from 'images/delete.svg';

export default function TodosList({
  todos,
  handleDeleteTodo,
  toggleIsDone,
}) {
  return (
    <ol
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10',
      }}>
      {todos.map((el) => (
        <li
          key={el.id}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            background: el.isDone ? 'green' : 'red',
            borderRadius: '8px',
            padding: '10px',
          }}>
          <span>{el.title}</span>
          <span> - </span>
          <span>{el.desc}</span>
          <label>
            Done
            <input
              type='checkbox'
              value={el.isDone}
              onChange={() => toggleIsDone(el.id)}
            />
          </label>

          <button
            type='button'
            onClick={() => handleDeleteTodo(el.id)}>
            <DeleteImg
              style={{
                width: '32px',
                height: '32px',
                fill: 'red',
              }}
            />
          </button>
        </li>
      ))}
    </ol>
  );
}
