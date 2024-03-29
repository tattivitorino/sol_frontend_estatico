import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

// Componentes
import AdminNavbar from 'components/Navbars/AdminNavbar.jsx';
import AdminFooter from 'components/Footers/AdminFooter.jsx';
import Sidebar from 'components/Sidebar/Sidebar.jsx';
import routes from 'routes/atexRoutes.js';

export default class AtexAdmin extends React.Component {
    componentDidUpdate(e) {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.mainContent.scrollTop = 0;
    }

    getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.layout === '/atex') {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };

    getBrandText = path => {
        for (let i = 0; i < routes.length; i++) {
            if (
                this.props.location.pathname.indexOf(
                    routes[i].layout + routes[i].path
                ) !== -1
            ) {
                return routes[i].name;
            }
        }
        return 'Brand';
    };

    render() {
        return (
            <div>
                <Sidebar
                    {...this.props}
                    routes={routes}
                    logo={{
                        innerLink: '/atex/index',
                        imgSrc: require('assets/img/brand/logo-atex.png'),
                        imgAlt: 'ATEX'
                    }}
                    logo_inferior={{
                        innerLink: '/advcloud/index',
                        imgSrc: require('assets/img/brand/logo-adv.png'),
                        imgAlt: 'ADVCloud'
                    }}

                />
                <div className='main-content' ref='mainContent'>
                    <AdminNavbar
                        {...this.props}
                        brandText='ATEX'
                    />
                    <Switch>{this.getRoutes(routes)}</Switch>
                    <Container fluid>
                        <AdminFooter />
                    </Container>
                </div>
            </div>
        );
    }
}