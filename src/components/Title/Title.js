import React from 'react';
import PropTypes from 'prop-types';
import TitleH2 from './styles';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (<TitleH2>{headline}</TitleH2>);
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
