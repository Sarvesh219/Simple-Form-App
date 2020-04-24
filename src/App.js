import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { submitForm } from './actions';

import Form from './components/Form';
import TaskList from './components/TaskList';

class App extends Component {
  handleSubmit = form => {
    const { dispatch } = this.props;
    dispatch(submitForm(form));
  };

  render() {
    const { formData } = this.props;
    return (
      <Fragment>
        <Form onHandleSubmit={this.handleSubmit}/>
        <TaskList formData={formData}/>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  formData: state.formReducer.formData
});

export default connect(mapStateToProps)(App);
