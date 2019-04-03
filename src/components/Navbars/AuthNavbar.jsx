import React from "react";
import { Link } from "react-router-dom";
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

class AdminNavbar extends React.Component {
  render() {
    return (
      <>
        <Navbar
          className='navbar-top navbar-horizontal navbar-dark'
          expand='md'
        >
          <Container className='px-4'>
            <NavbarBrand href="http://martuccimelillo.com.br" target="_blank">
              <img alt='Martucci Melillo' src={require('../../assets/img/brand/logo-martucci-clean.png')} />
            </NavbarBrand>
            <button className='navbar-toggler' id='navbar-collapse-main'>
              <span className='navbar-toggler-icon' />
            </button>
            <UncontrolledCollapse navbar toggler='#navbar-collapse-main'>
              <div className='navbar-collapse-header d-md-none'>
                <Row>
                  <Col className='collapse-brand' xs='6'>
                    <Link to='/'>
                      <img
                        alt='Martucci Melillo'
                        src={require('../../assets/img/brand/logo-martucci.png')}
                      />
                    </Link>
                  </Col>
                  <Col className='collapse-close' xs='6'>
                    <button
                      className='navbar-toggler'
                      id='navbar-collapse-main'
                    >
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <NavLink
                    className='nav-link-icon'
                    to='/auth/login'
                    tag={Link}
                  >
                    <i className='ni ni-curved-next' />
                    <span className='nav-link-inner--text'>Entrar</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className='nav-link-icon'
                    to='/auth/register'
                    tag={Link}
                  >
                    <i className='ni ni-single-02' />
                    <span className='nav-link-inner--text'>Cadastre-se</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default AdminNavbar;