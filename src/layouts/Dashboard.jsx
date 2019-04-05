import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

// Componentes
import AdminHomeNavbar from 'components/Navbars/AdminHomeNavbar.jsx';
import AdminFooter from 'components/Footers/AdminFooter.jsx';
import routes from 'routes/dashboardRoutes.js';

export default class Dashboard extends React.Component {
    componentDidUpdate(e) {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.mainContent.scrollTop = 0;
    }
    getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.layout === '/dashboard') {
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
            <>
                <div className='main-content' ref='mainContent'>
                    <AdminHomeNavbar {...this.props}/>
                    <Switch>{this.getRoutes(routes)}</Switch>
                    <Container fluid>
                        <AdminFooter />
                    </Container>
                </div>
            </>
        );
    }
}