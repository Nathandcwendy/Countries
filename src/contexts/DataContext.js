import { createContext, React, useEffect, useState } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Filter By Region");

  useEffect(() => {
    if (search === "") {
      setFilteredResults(countries);
      setFilter("Filter By Region");
    } else if (search !== "") {
      const searchResults = countries.filter(
        (country) =>
          country.name.common.toLowerCase().includes(search.toLowerCase()) ||
          country.name.official.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredResults(searchResults);
      setFilter("Filter By Region");
    } else {
      return;
    }
  }, [countries, search]);

  useEffect(() => {
    if (filter === "Filter By Region" || filter === "All") {
      setFilteredResults(countries);
    } else {
      const result = countries.filter((country) =>
        country.region.toLowerCase().includes(filter.toLowerCase())
      );
      setFilteredResults(result);
    }
  }, [countries, filter]);

  const { data, isLoading, fetchError } = useAxiosFetch(
    "https://restcountries.com/v3.1/all"
  );

  useEffect(() => {
    const indexedData = data.sort((a, b) => {
      const nameA = a.name.common.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.common.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    indexedData.map((dataUnit, index) => {
      dataUnit.trueIndex = index;
      return dataUnit;
    });
    setCountries(indexedData);
  }, [data]);

  return (
    <DataContext.Provider
      value={{
        countries,
        isLoading,
        fetchError,
        filteredResults,
        setFilteredResults,
        search,
        setSearch,
        filter,
        setFilter,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
