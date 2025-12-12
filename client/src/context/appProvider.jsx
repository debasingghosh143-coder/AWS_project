import { useEffect, useState } from "react";
import AppContext from "./appContext.mjs";
import { fetchNotices, SERVER_URL } from "../utils/helper.mjs";

// @ts-ignore
const AppProvider = ({ children }) => {
  const [notices, setNotices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getNotices = async () => {
      setIsLoading(true);
      const result = await fetchNotices();

      if (result.length !== 0) {
        setNotices(result);
      }

      // setIsLoading(false);
    };

    if (notices.length === 0 && isLoading) getNotices();
  });

  const values = {
    notices,
    setNotices,
    isLoading,
    setIsLoading,
  };

  // @ts-ignore
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
