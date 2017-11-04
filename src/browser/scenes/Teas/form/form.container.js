import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import { addTea } from '../../../../redux/Teas.actions';
import TextInput from '../../../components/TextInput/TextInput.react';
import Button from '../../../components/Button/Button.react';
import Form from '../../../components/Form.react';

export class FormContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      type: '',
      description: ''
    };

    this.onTypeChange = this.onTypeChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onTypeChange(e) {
    this.setState({ type: e.target.value });
  }
  onDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  handleSubmit() {
    const { addTeaDispatch } = this.props;
    const { type, description } = this.state;

    addTeaDispatch({
      id: shortid.generate(),
      type,
      description
    });

    this.setState({
      type: '',
      description: ''
    });
  }

  render() {
    return (
      <Form>
        <TextInput
          label="Type"
          maxLength={100}
          name="type"
          onChange={this.onTypeChange}
          placeholder="Type"
          value={this.state.type}
        />
        <TextInput
          label="Description"
          maxLength={100}
          name="description"
          onChange={this.onDescriptionChange}
          placeholder="Description"
          value={this.state.description}
        />
        <Button
          onClick={() => this.handleSubmit()}
          text="Add Tea"
        />
      </Form>
    );
  }
}

FormContainer.propTypes = {
  addTeaDispatch: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addTeaDispatch: addTea
  }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(FormContainer);
