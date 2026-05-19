import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

import { Route as IndexRoute } from "./routes/index";
import { Route as VehiculesRoute } from "./routes/vehicules";
import { Route as ServicesRoute } from "./routes/services";
import { Route as AProposRoute } from "./routes/a-propos";
import { Route as ContactRoute } from "./routes/contact";

function App() {
  const path = window.location.pathname;

  if (path.startsWith("/vehicules")) {
    return <VehiculesRoute.component />;
  }

  if (path.startsWith("/services")) {
    return <ServicesRoute.component />;
  }

  if (path.startsWith("/a-propos")) {
    return <AProposRoute.component />;
  }

  if (path.startsWith("/contact")) {
    return <ContactRoute.component />;
  }

  return <IndexRoute.component />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
