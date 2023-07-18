import { createContext, React, useEffect, useState } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [finalResults, setFinalResults] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Filter by Region");

  useEffect(() => {
    if (search === "") {
      setFinalResults(filteredResults);
    } else if (search !== "") {
      const searchResults = filteredResults.filter(
        (country) =>
          country.name.common
            .toLowerCase()
            .includes(search.toLowerCase().trim()) ||
          country.name.official
            .toLowerCase()
            .includes(search.toLowerCase().trim())
      );
      setFinalResults(searchResults);
    } else {
      return;
    }
  }, [countries, search, filteredResults]);

  useEffect(() => {
    if (filter === "Filter by Region" || filter === "All") {
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
    const indexedData = data.sort((a, b) =>
      a.name.common.toUpperCase().localeCompare(b.name.common.toUpperCase())
    );
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
        finalResults,
        setFinalResults,
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
