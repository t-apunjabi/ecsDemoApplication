import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import microsoft from '../images/microsoft.png'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import SearchBar from './SearchBar'
const popover = (
    <Popover id="popover-basic" placement="left">
        <SearchBar />
    </Popover>
);


function Menu() {
   
   
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ width: "100%"}} fixed="top">
                <Container>
                    <Navbar.Brand> <img src={microsoft} alt = "microsoft logo" style={{ maxHeight: '50px', marginLeft: '-50px', marginTop:'-10px' }} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Software" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="https://www.microsoft.com/windows">Windows</NavDropdown.Item>
                                <NavDropdown.Item href="https://www.microsoft.com/en-us/microsoft-365">Microsoft 365</NavDropdown.Item>
                                <NavDropdown.Item href="https://www.microsoft.com/en-us/microsoft-365/office-365">Office</NavDropdown.Item>

                            </NavDropdown>
                            <NavDropdown title="PCs & Devices" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="https://www.microsoft.com/en-us/store/b/pc?icid=CNavDevicesPC">Computers</NavDropdown.Item>
                                <NavDropdown.Item href="https://www.microsoft.com/en-us/store/b/xbox?icid=CNavDevicesXbox">Shop Xbox</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="https://www.microsoft.com/en-us/store/b/mobile?icid=CNavDevicesMobile">Phones</NavDropdown.Item>
                                <NavDropdown.Item href="https://www.microsoft.com/en-us/store/b/accessories?icid=CNavDevicesAccessories">Accesories</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Item>
                                <Nav.Link href= "https://support.microsoft.com/en-us">Support</Nav.Link>
                            </Nav.Item>

                        </Nav>
                        <Nav>
                            <OverlayTrigger trigger="click" placement="left" overlay={popover}>
                            <Nav.Link>Search</Nav.Link>
                            </OverlayTrigger>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
     
 
       
        
    );
}
export default Menu;
