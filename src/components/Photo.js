import React, { Component } from 'react';

class Photo extends Component {
  render() {
    const { post } = this.props;
    return <figure className="figure"></figure>;
  }
}

export default Photo;
