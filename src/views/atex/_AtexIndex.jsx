import React from 'react';
import { Link } from 'react-router-dom';
import MatchHeight from 'matchheight';
import {
    Card,
    CardHeader,
    Container,
    Row,
    Col,
    CardBody,
    Button,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    CardImg,
    CardTitle,
    CardText,
    Badge,
    UncontrolledAlert,
    NavItem,
    NavLink,
    Nav
} from 'reactstrap';

// Componentes
import Header from 'components/Headers/AtexHeader.jsx';

// Gráficos
import classnames from 'classnames';
import Chart from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import {
    chartOptions,
    parseOptions,
    chartExample1,
    chartExample2
} from '../../variables/charts.jsx';

class AtexIndex extends React.Component {
    state = {
        activeNav: 1,
        chartExample1Data: 'data1'
    };
    
    toggleNavs = (e, index) => {
        e.preventDefault();
        this.setState({
            activeNav: index,
            chartExample1Data:
                this.state.chartExample1Data === 'data1' ? 'data2' : 'data1'
        });
        let wow = () => {
            console.log(this.state);
        };
        wow.bind(this);
        setTimeout(() => wow(), 1000);
    };

    componentWillMount() {
        if (window.Chart) {
            parseOptions(Chart, chartOptions());
        }
    }

    render() {
        return (
            <>
                <Header />

                {/* Conteúdo */}
                <Container className='mt--7' fluid>
                    <Row>

                        <Col className='mb-5 mb-xl-0' xl='8'>
                            <Card className='bg-gradient-default shadow'>
                                <CardHeader className='bg-transparent'>
                                    <Row className='align-items-center'>
                                        <div className='col'>
                                            <h6 className='text-uppercase text-light ls-1 mb-1'>
                                                Visão global
                                            </h6>
                                            <h2 className='text-white mb-0'>Tempo médio dos atendimentos</h2>
                                        </div>
                                        <div className='col'>
                                            <Nav className='justify-content-end' pills>
                                                <NavItem>
                                                    <NavLink
                                                        className={classnames('py-2 px-3', {
                                                            active: this.state.activeNav === 1
                                                        })}
                                                        href='#pablo'
                                                        onClick={e => this.toggleNavs(e, 1)}
                                                    >
                                                        <span className='d-none d-md-block'>Mês</span>
                                                        <span className='d-md-none'>M</span>
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink
                                                        className={classnames('py-2 px-3', {
                                                            active: this.state.activeNav === 2
                                                        })}
                                                        data-toggle='tab'
                                                        href='#pablo'
                                                        onClick={e => this.toggleNavs(e, 2)}
                                                    >
                                                        <span className='d-none d-md-block'>Semana</span>
                                                        <span className='d-md-none'>S</span>
                                                    </NavLink>
                                                </NavItem>
                                            </Nav>
                                        </div>
                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <div className='chart'>
                                        <Line
                                            data={chartExample1[this.state.chartExample1Data]}
                                            options={chartExample1.options}
                                            getDatasetAtEvent={e => console.log(e)}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>


                        {/* 
                        <Col className='mb-5 mb-xl-0'>
                            <Card className='shadow'>

                                <CardHeader className='bg-transparent'>
                                    <h3 className='mb-0'>Página ATEX</h3>
                                </CardHeader>

                                <CardBody>
                                    <Row className=''>
                                        <Col lg='12' md='6'>
                                            <p>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente aliquam eveniet nam odio voluptatum est dolore saepe nostrum provident hic eligendi optio unde quibusdam doloribus, magni temporibus labore soluta sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nisi facilis in fugit et corrupti, excepturi saepe exercitationem sapiente sunt. Aliquam sapiente ea ut quod nam impedit asperiores sint consequatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, nisi id fuga magnam assumenda, cum odit voluptatibus recusandae ipsa, expedita quaerat. Est magnam ratione, aspernatur eligendi consectetur sint ab animi.
                                            </p>
                                            <p>
                                                Sapiente aliquam eveniet nam odio voluptatum est dolore saepe nostrum provident hic eligendi optio unde quibusdam doloribus, magni temporibus labore soluta sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nisi facilis in fugit et corrupti, excepturi saepe exercitationem sapiente sunt. Aliquam sapiente ea ut quod nam impedit asperiores sint consequatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, nisi id fuga magnam assumenda, cum odit voluptatibus recusandae ipsa, expedita quaerat. Est magnam ratione, aspernatur eligendi consectetur sint ab animi.
                                            </p>
                                            <p>
                                                Labore nisi facilis in fugit et corrupti, excepturi saepe exercitationem sapiente sunt. Aliquam sapiente ea ut quod nam impedit asperiores sint consequatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, nisi id fuga magnam assumenda, cum odit voluptatibus recusandae ipsa, expedita quaerat. Est magnam ratione, aspernatur eligendi consectetur sint ab animi.
                                            </p>
                                        </Col>
                                    </Row>
                                </CardBody>

                            </Card>
                        </Col>
                        */}


                    </Row>
                </Container>
            </>
        );
    }
}

export default AtexIndex;