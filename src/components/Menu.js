import React, { useState } from "react";
// import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Menu = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          Welcome to our Online Store
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/product">Products</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>

    // <nav className="mainMenu">
    //   <div className="Container">
    //     <Link to="/">
    //       <li>Home</li>
    //     </Link>
    //     <Link to="/product">
    //       <li>Product</li>
    //     </Link>
    //     <Link to="/about">
    //       <li>About</li>
    //     </Link>
    //   </div>
    // </nav>
  );
};

export default Menu;
