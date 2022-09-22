export default function TodosList({ todos }) {
  return (
    <ol>
      {todos.map((el) => (
        <li key={el.id}>
          <span>{el.title}</span>
          <span> - </span>
          <span>{el.desc}</span>
        </li>
      ))}
    </ol>
  );
}
