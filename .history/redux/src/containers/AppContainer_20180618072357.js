import React, { Component } from "react";
import { connect } from "react-redux";
import {
  SimpleAddAction,
  SimpleRemoveAction,
  SimpleVisibleAction
} from "../actions";
import Display from "../components/Display";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.addAction = this.addAction.bind(this);
    this.removeAction = this.removeAction.bind(this);
    this.handleVisible = this.handleVisible.bind(this);
  }

  addAction() {
    this.props.SimpleAddAction();
  }

  removeAction() {
    this.props.SimpleRemoveAction();
  }

  handleVisible() {
    this.props.SimpleVisibleAction();
  }
  render() {
    return (
      <div>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.addAction}>Add one</button>
        <button onClick={this.removeAction}>Remove one</button>

        <button onClick={this.handleVisible}>
          Rendre Visible/Invisible le message
        </button>
        {this.props.visible && <Display nb={this.props.nb} />}
      </div>
    );
  }
}

/*
  This is props from state
*/
const mapStateToProps = state => ({
  nb: state.SimpleReducer.nb,
  visible: state.VisibleReducer.visible
});
const mapDispatchToProps = dispatch => ({
  SimpleAddAction: () => dispatch(SimpleAddAction()),
  SimpleRemoveAction: () => dispatch(SimpleRemoveAction()),
  SimpleVisibleAction: () => dispatch(SimpleVisibleAction())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
