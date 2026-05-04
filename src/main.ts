import "./styles/index.css";
import { renderApp } from "./app";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App root not found");
}

renderApp(app);
