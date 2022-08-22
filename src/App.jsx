import { ThemeProvider } from "styled-components";
import { MainBody, WaveBg } from "./styles/App.styles";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import GlobalStyles from "./styles/global.styles.js";
import usePersistedState from "./utils/UsePersistedState";
import Card from "./Components/Card";

function App() {
  const [theme, setTheme] = usePersistedState("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title == "light" ? dark : light);
  };

  const bg = {
    primary: "images/pattern-background-desktop.svg",
    secundary: "images/pattern-background-mobile.svg",
  };

  return (
    <ThemeProvider theme={theme}>
      <MainBody>
        <GlobalStyles />
        <WaveBg bg={bg} />
        <Card setTheme={toggleTheme} />
      </MainBody>
    </ThemeProvider>
  );
}

export default App;
