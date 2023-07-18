// import HomeFeed from "./Pages/HomeFeed";
// import CountryPage from "./Pages/CountryPage";
// import Layout from "./components/Layout";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";
// import Missing from "./components/Missing";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <ThemeProvider>
      <DataProvider>
        <div className="flex flex-col font-body justify-center items-center w-screen min-h-screen h-auto overflow-y-auto overflow-x-hidden bg-lm-bg-vlGray dark:bg-dm-bg-vdBlue">
          <div className="relative flex flex-col justify-start items-center gap-12 w-full max-w-[1550px] min-h-screen antialiased h-auto pb-16">
            <Header />
            <Outlet />
            <Footer />
            <ScrollRestoration
              getKey={(location, matches) => {
                return location.key;
              }}
            />
          </div>
        </div>
        {/* <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeFeed />} />
            <Route path="country/:id" element={<CountryPage />} />
            <Route path="*" element={<Missing />} />
          </Route>
        </Routes> */}
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
