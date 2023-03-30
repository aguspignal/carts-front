import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CartsContextProvider from "./context/CartsContextProvider";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")).render(
   <CartsContextProvider>
      <MantineProvider>
         <App />
      </MantineProvider>
   </CartsContextProvider>
);
