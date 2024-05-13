import { DefaultThemeProvider } from "@/providers";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DefaultThemeProvider>
      {/* // <Button>This is my test button</Button> */}
      <>Test</>
    </DefaultThemeProvider>
  </React.StrictMode>
);
