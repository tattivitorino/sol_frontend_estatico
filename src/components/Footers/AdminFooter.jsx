import React from 'react';
import { Row, Col } from 'reactstrap';

class Footer extends React.Component {
    getYear() {
        return new Date().getFullYear();
    }

    render() {
        return (
            <footer className='footer'>
                <Row className='align-items-center justify-content-xl-between'>
                    <Col xl='6'>
                        <div className='copyright text-center text-xl-left text-muted'>
                            © {this.getYear()}{' '}
                            <a
                                className='font-weight-bold ml-1'
                                href='http://martuccimelillo.com.br/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Martucci Melillo
                            </a>
                        </div>
                    </Col>

                </Row>
            </footer>
        );
    }
}

export default Footer;