import { UserProvider } from "./store/UserContext";
import UpdateUser from "./components/useState/UpdateUser";
import Products from "./components/useState/Products";
import Counter from "./components/useReducer/Counter";
import AnotherCounter from "./components/useReducer/AnotherCounter";
import Refs from "./components/useRef/Refs";
import Timer from "./components/useRef/Timer";
import JsonDataFetch from "./components/customHooks/JsonDataFetch";
import UniqueIDs from "./components/useID/UniqueIDs";
function App() {
  return (
    <UserProvider>
      <UpdateUser />
      <Products />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Counter />
        <AnotherCounter />
      </div>
      <Refs />
      <Timer />
      <JsonDataFetch />
      {/* useId is unique for each component of the UniqueID component */}
      <UniqueIDs />
      <UniqueIDs />
    </UserProvider>
  );
}

export default App;
