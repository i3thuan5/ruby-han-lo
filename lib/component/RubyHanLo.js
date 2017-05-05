import React from 'react';
import PropTypes from 'prop-types';
import '../../asset/css/RubyHanLo.css';

var RubyHanLo = function RubyHanLo(_ref) {
  var 漢字詞 = _ref.漢字詞,
      臺羅閏號調 = _ref.臺羅閏號調;
  return React.createElement(
    'ruby',
    { className: 'app ruby' },
    臺羅閏號調,
    React.createElement(
      'rt',
      null,
      漢字詞
    )
  );
};

RubyHanLo.propTypes = {
  漢字詞: PropTypes.string.isRequired,
  臺羅閏號調: PropTypes.string.isRequired
};

export default RubyHanLo;