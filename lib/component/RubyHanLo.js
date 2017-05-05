'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RubyHanLo = function RubyHanLo(_ref) {
  var 漢字詞 = _ref.漢字詞,
      臺羅閏號調 = _ref.臺羅閏號調;
  return _react2.default.createElement(
    'ruby',
    { className: 'app ruby' },
    臺羅閏號調,
    _react2.default.createElement(
      'rt',
      null,
      漢字詞
    )
  );
};

RubyHanLo.propTypes = {
  漢字詞: _propTypes2.default.string.isRequired,
  臺羅閏號調: _propTypes2.default.string.isRequired
};

exports.default = RubyHanLo;