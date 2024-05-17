import React, { useState, useLayoutEffect, useCallback } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";

import Home from "./pages/Home";
import Member from "./pages/Member";
import Clip from "./pages/Clip";
import Gallery from "./pages/Gallery";
import Recognition from "./pages/Recognition";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavScrollExample from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { ModalFooter } from "react-bootstrap";
import { SiteButton } from "./components/SiteButton";

import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  const [page, setPage] = useState();
  //const [show, setShow] = useState(true);

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

  // function handleClose() {
  //   setShow(false);
  // }

  return (
    <div className="Navbar">
      <NavScrollExample />
      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <img src="welcome.png" style={{ width: "100%" }} />
        </Modal.Body>
        <ModalFooter>
          <SiteButton
            variant="contained"
            style={{ backgroundColor: "#075208" }}
            onClick={(e) => handleClose()}
          >
            เข้าสู่เว็บไซต์
          </SiteButton>
        </ModalFooter>
      </Modal> */}
      <div className="body">
        <ThemeProvider theme={theme}>
          <HashRouter scrollIndicatorInsets={{ right: 1 }}>
            <ScrollToTopButton />
            <Routes>
              <Route exact path="/" element={<Home setPage={setPage} />} />
              <Route
                exact
                path="/members"
                element={<Member setPage={setPage} />}
              />
              <Route exact path="/clip" element={<Clip setPage={setPage} />} />
              <Route
                exact
                path="/gallery"
                element={<Gallery setPage={setPage} />}
              />
              <Route
                exact
                path="/recognition"
                element={<Recognition setPage={setPage} />}
              />
            </Routes>
          </HashRouter>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
