import { ThemeProvider } from "styled-components";
import { MainBody, BgImage } from "./styles/App.styles";
import Card from "./Components/Card";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
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
      <MainBody>
        <GlobalStyles />

        <Card setTheme={toggleTheme} />
        <BgImage>
          <source srcSet={bg.secundary} media="(max-width: 900px)" />
          <img src={bg.primary} alt="" />
        </BgImage>
      </MainBody>
    </ThemeProvider>
  );
}

export default App;
