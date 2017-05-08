import React from 'react';
import PropTypes from 'prop-types';
import '../../asset/css/RubyHanLo.css';

class RubyHanLo extends React.Component {
  render() {
    const { 臺羅閏號調, 漢字詞 } = this.props;
    return (
      <ruby className="app ruby">
      {臺羅閏號調}
      <rt>{漢字詞}</rt>
      </ruby>
    );
  }
}


RubyHanLo.propTypes = {
  漢字詞: PropTypes.string.isRequired,
  臺羅閏號調: PropTypes.string.isRequired,
};

export default RubyHanLo;
