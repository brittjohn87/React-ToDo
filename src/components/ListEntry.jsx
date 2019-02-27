import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../ducks/todos/actions';
import 'bootstrap/dist/css/bootstrap.css';

class ListEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const { addTodo } = this.props;
    addTodo(this.state.value);
  }

  render() {
    return (
      <div>
        <form className="form-inline d-flex justify-content-center mt-4">
          <label className="p-3">Enter Task:</label>
          <div className="d-flex form-group">
            <input value={this.state.value} onChange={this.handleChange} className="form-control" type="text" placeholder="Enter Task Here" />
            <button className="btn btn-success" type="button" onClick={this.handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addTodo
}

export default connect(null, mapDispatchToProps)(ListEntry);
