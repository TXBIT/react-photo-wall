import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '3',
      description: '',
      imageLink: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddPhoto(this.state);
  };

  render() {
    return (
      <div>
        <h1>Photo Wall</h1>;
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
  onAddPhoto: PropTypes.func.isRequired,
};

export default AddPhoto;
