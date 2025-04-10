import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store"; // make sure this path matches your actual store file
import "./i18n"; // 👈 import here
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
document.documentElement.dir = dir; // Flip the actual DOM

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

i18n.on('languageChanged', (lng) => {
  if (lng === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
  }
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
);
