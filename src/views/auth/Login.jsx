import React from "react";
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
  }

  login() {
    this.props.history.push('/dashboard/index')
  }

  render() {
    return (
      <>
        <Col lg='5' md='7'>
          <Card className='bg-secondary shadow border-0'>
            <CardBody className='px-lg-5 py-lg-5'>
              <div className='text-center text-muted mb-4'>
                <h3>Entrar</h3>
              </div>
              <Form role='form'>
                <FormGroup className='mb-3'>
                  <InputGroup className='input-group-alternative'>
                    <InputGroupAddon addonType='prepend'>
                      <InputGroupText>
                        <i className='ni ni-email-83' />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder='Email' type='email' />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className='input-group-alternative'>
                    <InputGroupAddon addonType='prepend'>
                      <InputGroupText>
                        <i className='ni ni-lock-circle-open' />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder='Senha' type='password' />
                  </InputGroup>
                </FormGroup>
                <div className='custom-control custom-control-alternative custom-checkbox'>
                  <input
                    className='custom-control-input'
                    id=' customCheckLogin'
                    type='checkbox'
                  />
                  <label
                    className='custom-control-label'
                    htmlFor=' customCheckLogin'
                  >
                    <span className='text-muted'>Continuar conectado</span>
                  </label>
                </div>
                <div className='text-center'>
                  <Button onClick={this.login} className='my-4' color='primary' type='button' block>
                    Entrar
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className='mt-3'>
            <Col xs='6'>
              <a
                className='text-light'
                href='#!'
                onClick={e => e.preventDefault()}
              >
                <small>Esqueceu a senha?</small>
              </a>
            </Col>
            <Col className='text-right' xs='6'>
              <a
                className='text-light'
                href='#!'
                onClick={e => e.preventDefault()}
              >
                <small>Criar nova conta</small>
              </a>
            </Col>
          </Row>
        </Col>
      </>
    );
  }
}

export default Login;