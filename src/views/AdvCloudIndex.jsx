import React from "react";
// node.js library that concatenates classes (strings)

import Header from "components/Headers/AdvCloudHeader.jsx";

export default class AdvCloudIndex extends React.Component {
  state = {
    activeNav: 1,
    chartExample1Data: "data1"
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
