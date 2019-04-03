import React from "react";

// reactstrap components
import { Container} from "reactstrap";

class AtexHeader extends React.Component {
  render() {
    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              <p>Teste</p>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default AtexHeader;
