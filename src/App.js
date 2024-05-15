import React, { useState, useLayoutEffect, useCallback } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";

import Home from "./pages/Home";
import Member from "./pages/Member";
import Staff from "./pages/Staff";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavScrollExample from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="Navbar">
      <NavScrollExample page={page} />
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
                <Route exact path="/staff" element={<Staff setPage={setPage} />} />
              </Routes>
            </HashRouter>
          </ThemeProvider>
        </div>
    </div>
  );
}

export default App;
