import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Main from './components/Main';
import Admins from './components/Admins';
import Blogs from "./components/Blogs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Main />} />
          <Route path="admins" element={<Admins />} />
          <Route path="blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
