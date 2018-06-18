import React from "react";

const withVisible = WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleVisible = this.handleVisible.bind(this);
      this.state = { visible: false };
    }
    handleVisible() {
      this.setState({ visible: !this.state.toggled });
    }
    render() {
      return (
        <WrappedComponent
          handleVisible={this.handleVisible}
          {...this.state}
          {...this.props}
        />
      );
    }
  };
};

export default withVisible;
