import { string } from 'prop-types';
import React from 'react';

class Title extends React.Component {
  render() {
    return (<h2>{this.props.headline}</h2>);
  }
}

Title.prototypes = {
  headline: string,
};

export default Title;
