import { useEffect, useState } from "react";
import { BooksList } from "./components/BooksList/BooksList";
import { Header } from "./components/Header/Header";


export const App = () => {
  const [theme] = useState("light");
  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  return (
 
    <><Header /><BooksList /></>

  );
};