import { UserProvider } from "./store/UserContext";
import UpdateUser from "./components/UpdateUser";
import ListSate from "./components/useState/ListSate";
import Products from "./components/useState/Products";
function App() {
  return (
    <UserProvider>
      <UpdateUser />
      <Products />
    </UserProvider>
  );
}

export default App;
