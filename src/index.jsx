import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Posts } from "./Posts";
import { Header } from "./page/Header";
import { Form } from "./page/contact/Form";
import { Article } from "./Article";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/contact" element={<Form />} />
      </Routes>
    </>
  );
};

// npm install
// npm run dev
