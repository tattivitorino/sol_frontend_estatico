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

class AtexIndex extends React.Component {
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

    render() {
        return (
            <>
                <Header />

                {/* Conteúdo */}
                <Container className='mt--7' fluid>
                    <Row>
                        <Col className='mb-5 mb-xl-0'>
                            <Card className='shadow'>

                                <CardHeader className='bg-transparent'>
                                    <h3 className='mb-0'>Conteúdo a definir :)</h3>
                                </CardHeader>

                                <CardBody>
                                    <Row className=''>
                                        <Col lg='12' md='6'>
                                            <p>
                                                Podemos definir se podemos usar os gráficos já criados do template <strong>"ARGO"</strong> para o dashboard do <strong>"ATEX"</strong> e <strong>"ADVCloud"</strong>. Ou o modelo criado acima <strong>"CARDS"</strong>.
                                            </p>
                                            <a href='https://demos.creative-tim.com/argon-dashboard-react/#/admin/index' target='_blank'>
                                                https://demos.creative-tim.com/argon-dashboard-react/#/admin/index
                                            </a>
                                            <img
                                                className="img-fluid mt-3"
                                                alt="..."
                                                src={require("../../assets/img/theme/demo-graficos.jpg")}
                                            />
                                        </Col>
                                    </Row>
                                </CardBody>

                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default AtexIndex;