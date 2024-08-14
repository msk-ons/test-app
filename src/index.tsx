import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Posts } from "./Posts";
import { Header } from "./Header";
import Article from "./Article";

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </Router>
  );
};

// npm install
// npm run dev
