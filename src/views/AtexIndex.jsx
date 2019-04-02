import React from "react";
// node.js library that concatenates classes (strings)

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
      </>
    );
  }
}

export default AtexIndex;
