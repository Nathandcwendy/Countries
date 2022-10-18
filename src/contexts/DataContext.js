import { createContext, React, useEffect, useState } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  const { data, isLoading, fetchError } = useAxiosFetch(
    "https://restcountries.com/v3.1/all"
  );

  useEffect(() => {
    setCountries(data);
  }, [data]);

  return (
    <DataContext.Provider value={{ countries, isLoading, fetchError }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
