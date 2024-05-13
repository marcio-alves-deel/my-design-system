import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import { defaultTheme } from "./themes/defaultTheme";
import { CssBaseline } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </ThemeProvider>
  );
}

export default App;
