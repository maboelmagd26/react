import { createContext, useState } from "react";
//ToDo: 1. create context [UserContext]
const UserContext = createContext();
//ToDo: 2. create Provider for it [UserProvider]
const UserProvider = ({ children }) => {
  //3. inside the provider
  //ToDo: 3.1 create states and functions
  const [user, setUser] = useState({ name: "Mahmoud" });
  const [inputValue, setInputValue] = useState("");
  const updateUserName = (newName) => {
    setUser({ name: newName });
    setInputValue("");
  };

  //ToDo: 3.2 return .Provider for you context with the children and the value object
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        inputValue,
        setInputValue,
        updateUserName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
//ToDo: 4. export context and Provider
export { UserContext, UserProvider };
