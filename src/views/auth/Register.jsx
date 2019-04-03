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

class Register extends React.Component {
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
        <Col lg='6' md='8'>
          <Card className='bg-secondary shadow border-0'>
            <CardBody className='px-lg-5 py-lg-5'>
              <div className='text-center text-muted mb-4'>
                <h3>Cadastre-se</h3>
              </div>
              <Form role='form'>
                <FormGroup>
                  <InputGroup className='input-group-alternative mb-3'>
                    <InputGroupAddon addonType='prepend'>
                      <InputGroupText>
                        <i className='ni ni-single-02' />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder='Nome' type='text' />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className='input-group-alternative mb-3'>
                    <InputGroupAddon addonType='prepend'>
                      <InputGroupText>
                        <i className='ni ni-email-83' />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder='E-mail' type='email' />
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
                <Row className='my-4'>
                  <Col xs='12'>
                    <div className='custom-control custom-control-alternative custom-checkbox'>
                      <input
                        className='custom-control-input'
                        id='customCheckRegister'
                        type='checkbox'
                      />
                      <label
                        className='custom-control-label'
                        htmlFor='customCheckRegister'
                      >
                        <span className='text-muted'>
                          Eu concordo com a{' '}
                          <a href='#!' onClick={e => e.preventDefault()}>
                            Política de Privacidade
                          </a>
                        </span>
                      </label>
                    </div>
                  </Col>
                </Row>
                <div className='text-center'>
                  <Button onClick={this.login} className='mt-4' color='primary' type='button' block>
                    Cadastrar
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default Register;
