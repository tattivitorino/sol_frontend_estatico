import React from 'react';
import { Link } from 'react-router-dom';
import {
    NavbarBrand,
    Navbar,
    Container,
} from 'reactstrap';

// Componentes
import DropdownMenuUser from 'components/DropdownMenu/DropdownMenuUser.jsx';

class AdminHomeNavbar extends React.Component {
    render() {
        return (
            <>
                <Navbar className='navbar-top navbar-horizontal navbar-dark' id='navbar-main'>
                    <Container fluid>

                        <NavbarBrand to='/' tag={Link}>
                            <img alt='Martucci Melillo' src={require('../../assets/img/brand/logo-martucci-clean.png')} />
                        </NavbarBrand>
                        
                        {/* Menu Usuário */}
                        <DropdownMenuUser />

                    </Container>
                </Navbar>
            </>
        );
    }
}

export default AdminHomeNavbar;