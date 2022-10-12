import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
