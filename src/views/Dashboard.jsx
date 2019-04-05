import React from 'react';
import { Link } from 'react-router-dom';
import MatchHeight from 'matchheight';
import {
    Button,
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText
} from 'reactstrap';

class Dashboard extends React.Component {
    state = {
        activeNav: 1,
    };

    toggleNavs = (e, index) => {
        e.preventDefault();
        this.setState({
            activeNav: index,
        });
    };

    componentWillMount() {
        
    }

    componentDidMount() {
        MatchHeight.init();
    }

    render() {
        return (
            <>
                <div className='header bg-gradient-primary pb-9 pt-5 pt-md-6 pt-lg-8'></div>

                {/* Conteúdo */}
                <Container className='main mt--7 mt-md--8'>
                    <Row>
                        <Col xs='12' md='6' className='mb-4'>
                            <Card data-mh className='shadow'>
                                <CardBody>
                                    <CardImg
                                        className='img-fluid mb-4 px-0 px-sm-4'
                                        alt='ATEX'
                                        src={require('assets/img/brand/logo-atex-card.png')}
                                        top
                                    />
                                    <CardTitle className='font-weight-bold'><h2 className='text-primary'>ATEX</h2></CardTitle>
                                    <CardText data-mh className='mb-4'>
                                        Blanditiis atque assumenda <strong>id non vel hic dicta aperiam?</strong> Nam, soluta. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto, minima voluptas maxime quaerat tempore corrupti recusandae. Expedita architecto placeat consequuntur nesciunt sed, fuga illum voluptatibus harum! Blanditiis, quaerat suscipit!
                                    </CardText>
                                    <Button
                                        block
                                        outline
                                        size='lg'
                                        color='primary'
                                        to='/atex/index'
                                        tag={Link}
                                    >
                                        Entrar
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs='12' md='6' className='mb-4'>
                            <Card data-mh className='shadow'>
                                <CardBody>
                                    <CardImg
                                        className='img-fluid mb-4 px-0 px-4'
                                        alt='ADVCloud'
                                        src={require('assets/img/brand/logo-adv-card.png')}
                                        top
                                    />
                                    <CardTitle className='font-weight-bold'><h2 className='text-primary'>ADVCloud</h2></CardTitle>
                                    <CardText data-mh className='mb-4'>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero iure nemo totam, ad doloribus temporibus labore blanditiis <strong>minima, dolores quas</strong> aliquid ipsa commodi iusto? Esse id aspernatur reiciendis minus quia.
                                    </CardText>
                                    <Button
                                        block
                                        outline
                                        size='lg'
                                        color='primary'
                                        to='/advcloud/index'
                                        tag={Link}
                                    >
                                        Entrar
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Dashboard;