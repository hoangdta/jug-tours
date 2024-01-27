import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

function AppNavbar() {
  return (
    <div>
      <Navbar color="dark" dark expand="md" style={{ marginBottom: "48px" }}>
        <NavbarBrand href="/">Home</NavbarBrand>
        <Nav
          className="justify-content-end"
          style={{ width: "100%", marginLeft: "16px" }}
          navbar
        >
          <NavItem
            style={{
              display: "flex",
              justifyContent: "center",
              marginRight: "16px",
            }}
          >
            <NavbarText>by @hoangdta</NavbarText>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/hoangdta/jug-tours">
              GitHub
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default AppNavbar;
