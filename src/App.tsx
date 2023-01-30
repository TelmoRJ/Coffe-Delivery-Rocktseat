import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/global";
import { CartProvider } from "./hooks/useCart";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <BrowserRouter>
          <GlobalStyles />
          <Router />
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
