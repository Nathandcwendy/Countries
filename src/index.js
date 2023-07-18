import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomeFeed from "./Pages/HomeFeed";
import CountryPage from "./Pages/CountryPage";
import Missing from "./components/Missing";

import "animate.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/*" element={<App />}>
      <Route index element={<HomeFeed />} />
      <Route path="country/:id" element={<CountryPage />} />
      <Route path="*" element={<Missing />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  // <BrowserRouter>
  //   <ScrollToTop />
  //   <Routes>
  //     <Route path="/*" element={<App />} />
  //   </Routes>
  // </BrowserRouter>
);
