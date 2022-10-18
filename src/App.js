import HomeFeed from "./components/HomeFeed";
import CountryPage from "./components/CountryPage";
import Layout from "./components/Layout";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";

function App() {
  return (
    <ThemeProvider>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeFeed />} />
            <Route path="country/:id" element={<CountryPage />} />
          </Route>
        </Routes>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
