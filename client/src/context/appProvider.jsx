import { useState } from "react";
import AppContext from "./appContext.mjs";

const AppProvider = ({ children }) => {
  const [id, setId] = useState(10);

  const values = {
    id,
    setId,
  };

  // @ts-ignore
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
