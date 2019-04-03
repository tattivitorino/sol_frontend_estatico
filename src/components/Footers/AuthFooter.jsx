import React from "react";
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

class Login extends React.Component {
  getYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <>
        <footer className="pt-6 pb-3">
          <Container>
            <Row className="align-items-center justify-content-xl-between">
              <Col xl="6">
                <div className="copyright text-center text-xl-left text-muted">
                  © {this.getYear()}{" "}
                  <a
                    className="font-weight-bold ml-1"
                    href="http://martuccimelillo.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Martucci Melillo
                  </a>
                </div>
              </Col>
              <Col xl="6">
                <Nav className="nav-footer justify-content-center justify-content-xl-end">
                  <NavItem>
                    <NavLink
                      href="http://martuccimelillo.com.br/escritorio"
                      target="_blank"
                    >
                      Sobre nós
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="http://martuccimelillo.com.br/servicos"
                      target="_blank"
                    >
                      Serviços
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="http://martuccimelillo.com.br/artigos"
                      target="_blank"
                    >
                      Artigos
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="http://martuccimelillo.com.br/contato"
                      target="_blank"
                    >
                      Contato
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default Login;