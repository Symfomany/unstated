import React from "react";

withToggle = WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.onToggle = this.onToggle.bind(this);
      this.state = { toggled: false };
    }
    onToggle() {
      this.setState({ toggled: !this.state.toggled });
    }
    render() {
      return (
        <WrappedComponent
          onToggle={this.onToggle}
          toggled={this.state.toggled}
          {...this.props}
        />
      );
    }
  };
};
