import { ThemeProvider } from "styled-components";
import { MainBody } from "./styles/App.styles";
import Card from "./Components/Card";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import GlobalStyles from "./styles/global.styles.js";
import usePersistedState from "./utils/UsePersistedState";

function App() {
  const [theme, setTheme] = usePersistedState("theme", dark);
  const bg = {
    primary: "images/pattern-background-desktop.svg",
    secundary: "images/pattern-background-mobile.svg",
  };

  const toggleTheme = () => {
    setTheme(theme.title == "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <MainBody bg={bg}>
        <GlobalStyles />
        <Card setTheme={toggleTheme} />
      </MainBody>
    </ThemeProvider>
  );
}

export default App;
