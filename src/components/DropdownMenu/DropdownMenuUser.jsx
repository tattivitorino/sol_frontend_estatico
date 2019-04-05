import React from 'react';
import { Link } from 'react-router-dom';
import {
    Nav,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media
} from 'reactstrap';

class DropdownMenuUser extends React.Component {
    render() {
        return (
            <>
                <Nav className='align-items-center' navbar>
                    <UncontrolledDropdown nav>
                        <DropdownToggle className='pr-0' nav>
                            <Media className='align-items-center'>
                                <span className='avatar avatar-sm rounded-circle'>
                                    <img
                                        alt='Avatar'
                                        src={require('assets/img/theme/avatar.jpg')}
                                    />
                                </span>
                                <Media className='ml-2 d-none d-lg-block'>
                                    <span className='mb-0 text-sm font-weight-bold'>
                                        Alan Turing
                                    </span>
                                </Media>
                            </Media>
                        </DropdownToggle>
                        <DropdownMenu className='dropdown-menu-arrow' right>
                            <DropdownItem className='noti-title' header tag='div'>
                                <h6 className='text-overflow m-0'>Bem vindo!</h6>
                            </DropdownItem>
                            <DropdownItem to='/admin/user-profile' tag={Link}>
                                <i className='ni ni-single-02' />
                                <span>Meu perfil</span>
                            </DropdownItem>
                            <DropdownItem to='/admin/user-profile' tag={Link}>
                                <i className='ni ni-settings-gear-65' />
                                <span>Configurações</span>
                            </DropdownItem>
                            <DropdownItem to='/admin/user-profile' tag={Link}>
                                <i className='ni ni-bell-55' />
                                <span>Notificações</span>
                            </DropdownItem>
                            <DropdownItem to='/admin/user-profile' tag={Link}>
                                <i className='ni ni-chat-round' />
                                <span>Chat</span>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem to='/' tag={Link}>
                                <i className='ni ni-user-run' />
                                <span>Sair</span>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </>
        );
    }
}

export default DropdownMenuUser;