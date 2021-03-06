import React, { Component } from "react";
import { connect } from "react-redux";
import { SimpleAddAction, SimpleRemoveAction } from "../actions";
import Display from "../components/Display";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.addAction = this.addAction.bind(this);
    this.removeAction = this.removeAction.bind(this);
  }

  addAction() {
    this.props.SimpleAddAction();
  }

  removeAction() {
    this.props.SimpleRemoveAction();
  }
  render() {
    return (
      <div>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.addAction}>Add one</button>
        <button onClick={this.removeAction}>Remove one</button>
        <Display nb={this.props.nb} />
      </div>
    );
  }
}

/*
  This is props from state
*/
const mapStateToProps = state => ({
  nb: state.SimpleReducer.nb
});
const mapDispatchToProps = dispatch => ({
  SimpleAddAction: () => dispatch(SimpleAddAction()),
  SimpleRemoveAction: () => dispatch(SimpleRemoveAction())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
