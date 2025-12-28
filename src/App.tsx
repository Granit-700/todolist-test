import TodoList from "./components/TodoList";

function App() {

  const todos = [
    {
      id: 1,
      text: "todo"
    },
    {
      id: 2,
      text: "todo"
    },
  ];

  return (
    <div>
      <TodoList todos={todos}/>
    </div>
  );
};

export default App;
