import React, { PureComponent } from "react";

class ReactPureComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <h1>Hello from React.PureComponent</h1>;
  }
}

export default ReactPureComponent;
