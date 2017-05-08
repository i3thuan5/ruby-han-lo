import _homeFafoyGitRubyHanLoNode_modulesRedboxReactLibIndexJs from '/home/fafoy/git/ruby-han-lo/node_modules/redbox-react/lib/index.js';
import _homeFafoyGitRubyHanLoNode_modulesReactTransformCatchErrorsLibIndexJs from '/home/fafoy/git/ruby-han-lo/node_modules/react-transform-catch-errors/lib/index.js';
import _react from 'react';
import _homeFafoyGitRubyHanLoNode_modulesReactTransformHmrLibIndexJs from '/home/fafoy/git/ruby-han-lo/node_modules/react-transform-hmr/lib/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  RubyHanLo: {
    displayName: 'RubyHanLo'
  }
};

var _homeFafoyGitRubyHanLoNode_modulesReactTransformHmrLibIndexJs2 = _homeFafoyGitRubyHanLoNode_modulesReactTransformHmrLibIndexJs({
  filename: 'src/component/RubyHanLo.jsx',
  components: _components,
  locals: [module],
  imports: [_react]
});

var _homeFafoyGitRubyHanLoNode_modulesReactTransformCatchErrorsLibIndexJs2 = _homeFafoyGitRubyHanLoNode_modulesReactTransformCatchErrorsLibIndexJs({
  filename: 'src/component/RubyHanLo.jsx',
  components: _components,
  locals: [],
  imports: [_react, _homeFafoyGitRubyHanLoNode_modulesRedboxReactLibIndexJs]
});

function _wrapComponent(id) {
  return function (Component) {
    return _homeFafoyGitRubyHanLoNode_modulesReactTransformHmrLibIndexJs2(_homeFafoyGitRubyHanLoNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

import React from 'react';
import PropTypes from 'prop-types';
import '../../asset/css/RubyHanLo.css';

var RubyHanLo = _wrapComponent('RubyHanLo')(function (_React$Component) {
  _inherits(RubyHanLo, _React$Component);

  function RubyHanLo() {
    _classCallCheck(this, RubyHanLo);

    return _possibleConstructorReturn(this, (RubyHanLo.__proto__ || Object.getPrototypeOf(RubyHanLo)).apply(this, arguments));
  }

  _createClass(RubyHanLo, [{
    key: 'render',
    value: function render() {
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
    }
  }]);

  return RubyHanLo;
}(React.Component));

RubyHanLo.propTypes = {
  漢字詞: PropTypes.string.isRequired,
  臺羅閏號調: PropTypes.string.isRequired
};

export default RubyHanLo;