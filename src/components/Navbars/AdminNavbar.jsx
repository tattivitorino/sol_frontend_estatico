import React from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    Container,
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

                        {/* Menu Usuário */}
                        <DropdownMenuUser />

                    </Container>
                </Navbar>
            </>
        );
    }
}

export default AdminNavbar;