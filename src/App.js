import React, { useState, useLayoutEffect, useCallback } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";

import Home from "./pages/Home";
import Member from "./pages/Member";

function App() {
  const [page, setPage] = useState();

  const theme = createTheme({
    palette: {
      primary: {
        main: "#075208",
      },
      secondary: {
        main: "#217922",
      },
    },
  });

  return (
    <div className="body">
      <ThemeProvider theme={theme}>
        <HashRouter scrollIndicatorInsets={{ right: 1 }}>
          <Routes>
            <Route exact path="/" element={<Home setPage={setPage} />} />
            <Route
              exact
              path="/member"
              element={<Member setPage={setPage} />}
            />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
