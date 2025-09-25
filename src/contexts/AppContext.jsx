import { createContext, useContext } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  // Пока заглушка - позже добавим состояние
  const value = {
    theme: "light",
    user: null,
    cart: [],
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
}
