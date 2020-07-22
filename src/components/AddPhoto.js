import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      description: '',
      imageLink: '',
    };
  }

  handleChange = (e) => {
    this.setState({ id: Number(new Date()), [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.startAddingPost(this.state);
    this.props.onHistory.push('/');
  };

  render() {
    return (
      <div>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Image Link"
              name="imageLink"
              required
              onChange={(e) => this.handleChange(e)}
            />
            <input
              type="text"
              placeholder="Description"
              name="description"
              required
              onChange={(e) => this.handleChange(e)}
            />
            <button>Post</button>
          </form>
        </div>
      </div>
    );
  }
}

AddPhoto.propTypes = {
  onHistory: PropTypes.object.isRequired,
};

export default AddPhoto;
