import { UserProvider } from "./store/UserContext";
import UpdateUser from "./components/UpdateUser";
function App() {
  return (
    <UserProvider>
      <UpdateUser />
    </UserProvider>
  );
}

export default App;
