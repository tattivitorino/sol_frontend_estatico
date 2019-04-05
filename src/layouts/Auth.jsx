import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// Componentes
import AuthNavbar from 'components/Navbars/AuthNavbar.jsx';
import AuthFooter from 'components/Footers/AuthFooter.jsx';
import routes from 'routes/authRoutes.js';

class Auth extends React.Component {
    componentDidMount() {
        document.body.classList.add('bg-default');
    }
    componentWillUnmount() {
        document.body.classList.remove('bg-default');
    }
    getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.layout === '/auth') {
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
    render() {
        return (
            <>
                <div className='main-content'>
                    <AuthNavbar />
                    <div className='header bg-gradient-primary py-7 py-lg-8'>
                        <Container>
                            <div className='header-body text-center mb-6'>
                                <Row className='justify-content-center'>
                                    <Col lg='5' md='6'>
                                        <h1 className='text-white'>ATEX e ADVCloud</h1>
                                        <p className='text-lead text-light'>
                                            Martucci Melillo Advogados Associados há mais de 35 anos trabalhamos com ética e respeito.
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                        <div className='separator separator-bottom separator-skew zindex-100'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                preserveAspectRatio='none'
                                version='1.1'
                                viewBox='0 0 3000 100'
                                x='0'
                                y='0'
                            >
                                <polygon
                                    className='fill-default'
                                    points='3000 0 3000 100 0 100'
                                />
                            </svg>
                        </div>
                    </div>
                    <Container className='mt--9 pb-5'>
                        <Row className='justify-content-center'>
                            <Switch>{this.getRoutes(routes)}</Switch>
                        </Row>
                    </Container>
                </div>
                <AuthFooter />
            </>
        );
    }
}

export default Auth;