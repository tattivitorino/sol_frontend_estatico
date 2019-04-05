import React from 'react';
import { NavLink as NavLinkRRD, Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Collapse,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Media,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Progress,
    Table,
    Container,
    Row,
    Col
} from 'reactstrap';

var ps;

class Sidebar extends React.Component {
    state = {
        collapseOpen: false
    };
    constructor(props) {
        super(props);
        this.activeRoute.bind(this);
    }
    // verifica se routeName é o ativo (na entrada do navegador)
    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
    }
    // alterna o recolhimento entre aberto e fechado  (true/false)
    toggleCollapse = () => {
        this.setState({
            collapseOpen: !this.state.collapseOpen
        });
    };
    // fecha o collapse
    closeCollapse = () => {
        this.setState({
            collapseOpen: false
        });
    };
    // cria os links que aparecem no menu à esquerda / Sidebar
    createLinks = routes => {
        return routes.map((prop, key) => {
            return (
                <NavItem key={key}>
                    <NavLink
                        to={prop.layout + prop.path}
                        tag={NavLinkRRD}
                        onClick={this.closeCollapse}
                        activeClassName='active'
                        className={prop.classTipo}
                    >
                        <i className={prop.icon} />
                        {prop.name}
                    </NavLink>
                </NavItem>
            );
        });
    };
    render() {
        const { bgColor, routes, logo } = this.props;
        let navbarBrandProps;
        if (logo && logo.innerLink) {
            navbarBrandProps = {
                to: logo.innerLink,
                tag: Link
            };
        } else if (logo && logo.outterLink) {
            navbarBrandProps = {
                href: logo.outterLink,
                target: '_blank'
            };
        }
        return (
            <Navbar
                className='navbar-vertical fixed-left navbar-light bg-white'
                expand='md'
                id='sidenav-main'
            >
                <Container fluid>
                    {/* Toggler */}
                    <button
                        className='navbar-toggler'
                        type='button'
                        onClick={this.toggleCollapse}
                    >
                        <span className='navbar-toggler-icon' />
                    </button>
                    {/* Brand */}
                    {logo ? (
                        <NavbarBrand className='pt-0' {...navbarBrandProps}>
                            <img
                                alt={logo.imgAlt}
                                className='navbar-brand-img'
                                src={logo.imgSrc}
                            />
                        </NavbarBrand>
                    ) : null}
                    {/* User */}
                    <Nav className='align-items-center d-md-none'>
                        <UncontrolledDropdown nav>
                            <DropdownToggle nav className='nav-link-icon'>
                                <i className='ni ni-bell-55' />
                            </DropdownToggle>
                            <DropdownMenu
                                aria-labelledby='navbar-default_dropdown_1'
                                className='dropdown-menu-arrow'
                                right
                            >
                                <DropdownItem>Action</DropdownItem>
                                <DropdownItem>Another action</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Something else here</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav>
                            <DropdownToggle nav>
                                <Media className='align-items-center'>
                                    <span className='avatar avatar-sm rounded-circle'>
                                        <img
                                            alt='...'
                                            src={require('assets/img/theme/team-1-800x800.jpg')}
                                        />
                                    </span>
                                </Media>
                            </DropdownToggle>
                            <DropdownMenu className='dropdown-menu-arrow' right>
                                <DropdownItem className='noti-title' header tag='div'>
                                    <h6 className='text-overflow m-0'>Welcome!</h6>
                                </DropdownItem>
                                <DropdownItem to='/admin/user-profile' tag={Link}>
                                    <i className='ni ni-single-02' />
                                    <span>My profile</span>
                                </DropdownItem>
                                <DropdownItem to='/admin/user-profile' tag={Link}>
                                    <i className='ni ni-settings-gear-65' />
                                    <span>Settings</span>
                                </DropdownItem>
                                <DropdownItem to='/admin/user-profile' tag={Link}>
                                    <i className='ni ni-calendar-grid-58' />
                                    <span>Activity</span>
                                </DropdownItem>
                                <DropdownItem to='/admin/user-profile' tag={Link}>
                                    <i className='ni ni-support-16' />
                                    <span>Support</span>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem href='#pablo' onClick={e => e.preventDefault()}>
                                    <i className='ni ni-user-run' />
                                    <span>Logout</span>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    {/* Collapse */}
                    <Collapse navbar isOpen={this.state.collapseOpen}>
                        {/* Collapse header */}
                        <div className='navbar-collapse-header d-md-none'>
                            <Row>
                                {logo ? (
                                    <Col className='collapse-brand' xs='6'>
                                        {logo.innerLink ? (
                                            <Link to={logo.innerLink}>
                                                <img alt={logo.imgAlt} src={logo.imgSrc} />
                                            </Link>
                                        ) : (
                                                <a href={logo.outterLink}>
                                                    <img alt={logo.imgAlt} src={logo.imgSrc} />
                                                </a>
                                            )}
                                    </Col>
                                ) : null}
                                <Col className='collapse-close' xs='6'>
                                    <button
                                        className='navbar-toggler'
                                        type='button'
                                        onClick={this.toggleCollapse}
                                    >
                                        <span />
                                        <span />
                                    </button>
                                </Col>
                            </Row>
                        </div>
                        {/* Form */}
                        <Form className='mt-4 mb-3 d-md-none'>
                            <InputGroup className='input-group-rounded input-group-merge'>
                                <Input
                                    aria-label='Search'
                                    className='form-control-rounded form-control-prepended'
                                    placeholder='Search'
                                    type='search'
                                />
                                <InputGroupAddon addonType='prepend'>
                                    <InputGroupText>
                                        <span className='fa fa-search' />
                                    </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        </Form>

                        {/* Navigation rotas */}
                        <Nav navbar>{this.createLinks(routes)}</Nav>

                        {/* Navigation fixo */}
                        <hr className='my-3' />
                        <h6 className='navbar-heading text-muted'>Departamentos</h6>
                        <Nav className='mb-md-3' navbar>
                            <NavItem>
                                <NavLink to='/dashboard/index' tag={Link}>
                                    <i className='fa fa-home' />
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to='/atex/index' tag={Link}>
                                    <i className='fa fa-refresh' />
                                    ATEX
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to='/advcloud/index' tag={Link}>
                                    <i className='fa fa-cloud' />
                                    ADVCloud
                                </NavLink>
                            </NavItem>
                        </Nav>

                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

Sidebar.defaultProps = {
    routes: [{}]
};

export default Sidebar;