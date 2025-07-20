import useFetch from "./useFetch";

const JsonDataFetch = () => {
  const { data, error, loading } = useFetch(
    "https://jsonplaceh5older.typicode.com/todos"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
          <p>{todo.completed ? "Completed" : "Not Completed"}</p>
        </div>
      ))}
    </div>
  );
};

export default JsonDataFetch;
