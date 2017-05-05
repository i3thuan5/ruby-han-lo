import React from 'react';
import PropTypes from 'prop-types';
import '../../asset/css/RubyHanLo.css';

const RubyHanLo = ({ 漢字詞, 臺羅閏號調 }) => (
  <ruby className="app ruby">
    {臺羅閏號調}
    <rt>{漢字詞}</rt>
  </ruby>
);


RubyHanLo.propTypes = {
  漢字詞: PropTypes.string.isRequired,
  臺羅閏號調: PropTypes.string.isRequired,
};

export default RubyHanLo;
