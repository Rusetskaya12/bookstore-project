import { Book } from "components/Book/Book";
import { Header } from "components/Header/Header";
import { useState, useEffect } from "react";
import { AppWrapper } from "ui/Wrapper";



type Theme = "light" | "dark";

export const App = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const handlTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  return (
    <AppWrapper>
      <Header />
      <Book />

      <button onClick={handlTheme}>DFDRRG</button>
    </AppWrapper>
  );
};
