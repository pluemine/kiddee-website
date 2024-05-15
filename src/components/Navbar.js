import { Navbar, Nav } from 'react-bootstrap';

const MyNavbar = (props) => {
    const { page } = props;

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home" style={{ padding: '0 10px'}} className="font-subheader">KIDDEE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                <Nav style={{ padding: '0 10px' }}>
                    <Nav.Link href="#link"></Nav.Link>
                </Nav>
                <Nav style={{ padding: '0 10px' }} className="font-body">
                    <Nav.Link href="/" className={page==="Home"?"navbar-selected" : undefined}>Home</Nav.Link>
                    <Nav.Link href="/#/about">About us</Nav.Link>
                    <Nav.Link href="/#/member" className={page==="Member"?"navbar-selected" : undefined}>Member</Nav.Link>
                    <Nav.Link href="#contact">Gallery</Nav.Link>
                    <Nav.Link href="#contact">Recognition</Nav.Link>
                    <Nav.Link href="#contact">Clip</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;
