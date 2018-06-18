import React, { Component } from "react";
import { connect } from "react-redux";
import { SimpleAddAction, SimpleRemoveAction, VisibleAction } from "../actions";
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

  handleVisible() {
    this.props.VisibleAction();
  }
  render() {
    return (
      <div>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.addAction}>Add one</button>
        <button onClick={this.removeAction}>Remove one</button>

        <button onClick={this.handleVisible}>Visible</button>
        <Display nb={this.props.nb} />
      </div>
    );
  }
}

/*
  This is props from state
*/
const mapStateToProps = state => ({
  nb: state.SimpleReducer.nb,
  visible: state.Visiblereducer.visible
});
const mapDispatchToProps = dispatch => ({
  SimpleAddAction: () => dispatch(SimpleAddAction()),
  SimpleRemoveAction: () => dispatch(SimpleRemoveAction()),
  VisibleAction: () => dispatch(VisibleAction())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
