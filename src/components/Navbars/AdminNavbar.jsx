import React from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    Container,
    Collapse,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Nav
} from 'reactstrap';

// Componentes
import DropdownMenuUser from 'components/DropdownMenu/DropdownMenuUser.jsx';

class AdminNavbar extends React.Component {
    render() {
        return (
            <>
                <Navbar className='navbar-top navbar-horizontal navbar-dark' expand='md' id='navbar-main'>
                    <Container fluid>

                        <Link className='h1 mb-0 text-white d-none d-lg-inline-block' to='/'>
                            {this.props.brandText}
                        </Link>

                        <div className='d-flex justify-content-end'>
                            <Nav className='align-items-center' navbar>
                                <UncontrolledDropdown nav>
                                    <DropdownToggle nav className='nav-link-icon'>
                                        <i className='ni ni-bell-55 text-white' />
                                    </DropdownToggle>
                                    <DropdownMenu
                                        aria-labelledby='navbar-default_dropdown_1'
                                        className='dropdown-menu-arrow'
                                        right
                                    >
                                        <DropdownItem>Item</DropdownItem>
                                        <DropdownItem>Item</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Item</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>

                            {/* Menu Usuário */}
                            <DropdownMenuUser />
                        </div>

                    </Container>
                </Navbar>
            </>
        );
    }
}

export default AdminNavbar;