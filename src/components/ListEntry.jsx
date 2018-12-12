import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class ListEntry extends Component {
  constructor(props){
    super(props);
    this.state ={
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert(this.state.value + ' was added!');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-inline d-flex justify-content-center mt-4">
        <label className="p-3">Enter Task:</label>
          <div className="d-flex form-group">
            <input value={this.state.value} onChange={this.handleChange} className="form-control" type="text" placeholder="Enter Task Here" />
            <button className="btn btn-success" type="submit" value="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ListEntry;
