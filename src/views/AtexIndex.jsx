import React from "react";
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
  UncontrolledAlert
} from 'reactstrap';

// Componentes
import Header from "components/Headers/AtexHeader.jsx";

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
            <Col className="mb-5 mb-xl-0">
              <Card className='shadow'>

                <CardHeader className='bg-transparent'>
                  <h3 className='mb-0'>Página ATEX</h3>
                </CardHeader>

                <CardBody>
                  <Row className="">
                    <Col lg='12' md='6'>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente aliquam eveniet nam odio voluptatum est dolore saepe nostrum provident hic eligendi optio unde quibusdam doloribus, magni temporibus labore soluta sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nisi facilis in fugit et corrupti, excepturi saepe exercitationem sapiente sunt. Aliquam sapiente ea ut quod nam impedit asperiores sint consequatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, nisi id fuga magnam assumenda, cum odit voluptatibus recusandae ipsa, expedita quaerat. Est magnam ratione, aspernatur eligendi consectetur sint ab animi.
                      </p>
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