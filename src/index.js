import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import i18n from "./i18n";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Main from "./components/Main";
import Admins from "./components/Admins";
import Blogs from "./components/Blogs";
import StoreContextProvider from "./contexts/StoreContextProvider";
import News from "./components/News";
import Home from "./components/home/Home";
import BlogPage from "./components/BlogPage";
import NotFound from "./components/NotFound";
import SearchResult from './components/SearchResult';
import { ToastContainer } from 'react-toastify';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <StoreContextProvider>
      <BrowserRouter>
        <Routes>
        <Route path="/" exact element={<Navigate to="/home" />} />


          <Route path="/" element={<App />}>
            <Route path="home" element={<Home />} />
            <Route path="news" element={<News />} />
            <Route path="news/:id" element={<BlogPage />} />
            <Route path="search/?" element={<SearchResult />} />
          </Route>

          <Route path="/admin" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="" element={<Main />} />
            <Route path="admins" element={<Admins />} />
            <Route path="blogs" element={<Blogs />} />
          </Route>
          <Route path="*" element={<NotFound />}/>
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </StoreContextProvider>
  </ThemeProvider>
);
