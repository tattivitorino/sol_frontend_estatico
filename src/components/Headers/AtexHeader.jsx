import React from 'react';
import MatchHeight from 'matchheight';
import {
    Card,
    CardBody,
    CardTitle,
    Container,
    Row,
    Col
} from 'reactstrap';

class AtexHeader extends React.Component {

    componentDidMount() {
        MatchHeight.init();
    }

    render() {
        return (
            <>
                <div className='header bg-gradient-atex pb-8 pt-5 pt-md-8'>
                    <Container fluid>
                        <div className='header-body'>

                            {/* Card */}
                            <Row>
                                <Col lg='6' xl='3'>
                                    <Card data-mh className='clascard-stats mb-4'>
                                        <CardBody>
                                            <Row>
                                                <div className='col'>
                                                    <CardTitle
                                                        tag='h5'
                                                        className='text-uppercase text-muted mb-0'
                                                    >
                                                        Colaboradores externos
                                                    </CardTitle>
                                                    <span className='h1 font-weight-bold mb-0'>
                                                        199
                                                    </span>
                                                </div>
                                                <Col className='col-auto'>
                                                    <div className='icon icon-shape bg-teal text-white rounded-circle shadow'>
                                                        <i className='fa fa-users' />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <p className='mt-3 mb-0 text-muted text-sm'>
                                                <span className='text-success mr-2'>
                                                    <i className='fa fa-arrow-up' /> 3.48%
                                                </span>{' '}
                                                <span className='text-nowrap-no'>Desde o último mês</span>
                                            </p>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg='6' xl='3'>
                                    <Card data-mh className='clascard-stats mb-4'>
                                        <CardBody>
                                            <Row>
                                                <div className='col'>
                                                    <CardTitle
                                                        tag='h5'
                                                        className='text-uppercase text-muted mb-0'
                                                    >
                                                        Clientes prospectados
                                                    </CardTitle>
                                                    <span className='h1 font-weight-bold mb-0'>
                                                        899
                                                    </span>
                                                </div>
                                                <Col className='col-auto'>
                                                    <div className='icon icon-shape bg-warning text-white rounded-circle shadow'>
                                                        <i className='fa fa-pie-chart' />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <p className='mt-3 mb-0 text-muted text-sm'>
                                                <span className='text-danger mr-2'>
                                                    <i className='fas fa-arrow-down' /> 1.56%
                                                </span>{' '}
                                                <span className='text-nowrap-no'>Desde a semana passada</span>
                                            </p>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg='6' xl='3'>
                                    <Card data-mh className='clascard-stats mb-4'>
                                        <CardBody>
                                            <Row>
                                                <div className='col'>
                                                    <CardTitle
                                                        tag='h5'
                                                        className='text-uppercase text-muted mb-0'
                                                    >
                                                        Clientes cadastrados
                                                    </CardTitle>
                                                    <span className='h1 font-weight-bold mb-0'>39</span>
                                                </div>
                                                <Col className='col-auto'>
                                                    <div className='icon icon-shape bg-purple text-white rounded-circle shadow'>
                                                        <i className='fa fa-user-plus' />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <p className='mt-3 mb-0 text-muted text-sm'>
                                                <span className='text-success mr-2'>
                                                    <i className='fas fa-arrow-up' /> 12%
                                                </span>{' '}
                                                <span className='text-nowrap-no'>Desde ontem</span>
                                            </p>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg='6' xl='3'>
                                    <Card data-mh className='clascard-stats mb-4'>
                                        <CardBody>
                                            <Row>
                                                <div className='col'>
                                                    <CardTitle
                                                        tag='h5'
                                                        className='text-uppercase text-muted mb-0'
                                                    >
                                                        Atendimentos realizados
                                                    </CardTitle>
                                                    <span className='h1 font-weight-bold mb-0'>
                                                        99
                                                    </span>
                                                </div>
                                                <Col className='col-auto'>
                                                    <div className='icon icon-shape bg-green text-white rounded-circle shadow'>
                                                        <i className='fa fa-commenting' />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <p className='mt-3 mb-0 text-muted text-sm'>
                                                <span className='text-success mr-2'>
                                                    <i className='fas fa-arrow-up' /> 12%
                                                </span>{' '}
                                                <span className='text-nowrap-no'>Desde o último mês</span>
                                            </p>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg='6' xl='3'>
                                    <Card data-mh className='clascard-stats mb-4'>
                                        <CardBody>
                                            <Row>
                                                <div className='col'>
                                                    <CardTitle
                                                        tag='h5'
                                                        className='text-uppercase text-muted mb-0'
                                                    >
                                                        Tempo médio dos atendimentos
                                                    </CardTitle>
                                                    <span className='h1 font-weight-bold mb-0'>
                                                        00:45
                                                    </span>
                                                </div>
                                                <Col className='col-auto'>
                                                    <div className='icon icon-shape bg-indigo text-white rounded-circle shadow'>
                                                        <i className='fa fa-hourglass-end' />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <p className='mt-3 mb-0 text-muted text-sm'>
                                                <span className='text-nowrap-no'>Por dia</span>
                                            </p>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg='6' xl='3'>
                                    <Card data-mh className='clascard-stats mb-4'>
                                        <CardBody>
                                            <Row>
                                                <div className='col'>
                                                    <CardTitle
                                                        tag='h5'
                                                        className='text-uppercase text-muted mb-0'
                                                    >
                                                        Satisfação dos clientes
                                                    </CardTitle>
                                                    <span className='h1 font-weight-bold mb-0'>
                                                        88%
                                                    </span>
                                                </div>
                                                <Col className='col-auto'>
                                                    <div className='icon icon-shape bg-red text-white rounded-circle shadow'>
                                                        <i className='fa fa-heart' />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <p className='mt-3 mb-0 text-muted text-sm'>
                                                <span className='text-nowrap-no'>Geral</span>
                                            </p>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg='6' xl='3'>
                                    <Card data-mh className='clascard-stats mb-4'>
                                        <CardBody>
                                            <Row>
                                                <div className='col'>
                                                    <CardTitle
                                                        tag='h5'
                                                        className='text-uppercase text-muted mb-0'
                                                    >
                                                        Locais de atendimentos
                                                    </CardTitle>
                                                    <span className='h1 font-weight-bold mb-0'>
                                                        33
                                                    </span>
                                                </div>
                                                <Col className='col-auto'>
                                                    <div className='icon icon-shape bg-yellow text-white rounded-circle shadow'>
                                                        <i className='fa fa-flag' />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <p className='mt-3 mb-0 text-muted text-sm'>
                                                <span className='text-nowrap-no'>Mais e menos realizados</span>
                                            </p>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg='6' xl='3'>
                                    <Card data-mh className='clascard-stats mb-4'>
                                        <CardBody>
                                            <Row>
                                                <div className='col'>
                                                    <CardTitle
                                                        tag='h5'
                                                        className='text-uppercase text-muted mb-0'
                                                    >
                                                        Número de atendimento
                                                    </CardTitle>
                                                    <span className='h1 font-weight-bold mb-0'>
                                                        99
                                                    </span>
                                                </div>
                                                <Col className='col-auto'>
                                                    <div className='icon icon-shape bg-pink text-white rounded-circle shadow'>
                                                        <i className='fa fa-filter' />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <p className='mt-3 mb-0 text-muted text-sm'>
                                                <span className='text-nowrap-no'>Por colaborador</span>
                                            </p>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </>
        );
    }
}

export default AtexHeader;