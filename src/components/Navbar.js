import { Navbar, Nav } from "react-bootstrap";

const MyNavbar = (props) => {
  const { page } = props;

  return (
    <Navbar
      bg="dark"
      expand="lg"
      className="navbar navbar-dark bg-dark fixed-top"
    >
      <Navbar.Brand
        href="#home"
        style={{ padding: "0 32px" }}
        className="font-subheader"
      >
        <span className="color-tertiary">K</span>IDDEE
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-between"
      >
        <Nav style={{ padding: "0 10px" }}>
          {/* <Nav.Link href="#link"></Nav.Link> */}
        </Nav>
        <Nav style={{ padding: "0 32px" }} className="font-body">
          <Nav.Link href="/#/">Home</Nav.Link>
          <Nav.Link href="/#/members">Members</Nav.Link>
          <Nav.Link href="/#/gallery">Gallery</Nav.Link>
          <Nav.Link href="/#/contact">Recognition</Nav.Link>
          <Nav.Link href="/#/clip">Clip</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
