import "./App.css";
import { BrowserRouter as Routes, Route, Router } from "react-router-dom";
import { Posts } from "./Posts";
import { Header } from "./page/Header";
// import Home from "./components/Home";
// import Page1 from "./components/Page1";
// import Page2 from "./components/Page2";
// import { Contact } from "./page/Contact";
// import { Button } from "./Button";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Header />
        <Posts />
        {/* <Contact /> */}
      </Routes>
    </Router>
  );
};

// npm install
// npm run dev
