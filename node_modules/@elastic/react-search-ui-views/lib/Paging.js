"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _rcPagination = _interopRequireDefault(require("rc-pagination"));

var _en_US = _interopRequireDefault(require("rc-pagination/lib/locale/en_US"));

var _viewHelpers = require("./view-helpers");

var _excluded = ["className", "current", "resultsPerPage", "onChange", "totalPages"];

function Paging(_ref) {
  var className = _ref.className,
      current = _ref.current,
      resultsPerPage = _ref.resultsPerPage,
      onChange = _ref.onChange,
      totalPages = _ref.totalPages,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_rcPagination.default, (0, _extends2.default)({
    current: current,
    onChange: onChange,
    pageSize: resultsPerPage,
    total: totalPages * resultsPerPage,
    className: (0, _viewHelpers.appendClassName)("sui-paging", className),
    locale: _en_US.default
  }, rest));
}

Paging.propTypes = {
  current: _propTypes.default.number.isRequired,
  onChange: _propTypes.default.func.isRequired,
  resultsPerPage: _propTypes.default.number.isRequired,
  totalPages: _propTypes.default.number.isRequired,
  className: _propTypes.default.string
};
var _default = Paging;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9QYWdpbmcuanMiXSwibmFtZXMiOlsiUGFnaW5nIiwiY2xhc3NOYW1lIiwiY3VycmVudCIsInJlc3VsdHNQZXJQYWdlIiwib25DaGFuZ2UiLCJ0b3RhbFBhZ2VzIiwicmVzdCIsImVuVXNMb2NhbGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwiZnVuYyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7O0FBRUEsU0FBU0EsTUFBVCxPQU9HO0FBQUEsTUFOREMsU0FNQyxRQU5EQSxTQU1DO0FBQUEsTUFMREMsT0FLQyxRQUxEQSxPQUtDO0FBQUEsTUFKREMsY0FJQyxRQUpEQSxjQUlDO0FBQUEsTUFIREMsUUFHQyxRQUhEQSxRQUdDO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEsTUFERUMsSUFDRjtBQUNELHNCQUNFLDZCQUFDLHFCQUFEO0FBQ0UsSUFBQSxPQUFPLEVBQUVKLE9BRFg7QUFFRSxJQUFBLFFBQVEsRUFBRUUsUUFGWjtBQUdFLElBQUEsUUFBUSxFQUFFRCxjQUhaO0FBSUUsSUFBQSxLQUFLLEVBQUVFLFVBQVUsR0FBR0YsY0FKdEI7QUFLRSxJQUFBLFNBQVMsRUFBRSxrQ0FBZ0IsWUFBaEIsRUFBOEJGLFNBQTlCLENBTGI7QUFNRSxJQUFBLE1BQU0sRUFBRU07QUFOVixLQU9NRCxJQVBOLEVBREY7QUFXRDs7QUFFRE4sTUFBTSxDQUFDUSxTQUFQLEdBQW1CO0FBQ2pCTixFQUFBQSxPQUFPLEVBQUVPLG1CQUFVQyxNQUFWLENBQWlCQyxVQURUO0FBRWpCUCxFQUFBQSxRQUFRLEVBQUVLLG1CQUFVRyxJQUFWLENBQWVELFVBRlI7QUFHakJSLEVBQUFBLGNBQWMsRUFBRU0sbUJBQVVDLE1BQVYsQ0FBaUJDLFVBSGhCO0FBSWpCTixFQUFBQSxVQUFVLEVBQUVJLG1CQUFVQyxNQUFWLENBQWlCQyxVQUpaO0FBS2pCVixFQUFBQSxTQUFTLEVBQUVRLG1CQUFVSTtBQUxKLENBQW5CO2VBUWViLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUkNQYWdpbmF0aW9uIGZyb20gXCJyYy1wYWdpbmF0aW9uXCI7XG5pbXBvcnQgZW5Vc0xvY2FsZSBmcm9tIFwicmMtcGFnaW5hdGlvbi9saWIvbG9jYWxlL2VuX1VTXCI7XG5cbmltcG9ydCB7IGFwcGVuZENsYXNzTmFtZSB9IGZyb20gXCIuL3ZpZXctaGVscGVyc1wiO1xuXG5mdW5jdGlvbiBQYWdpbmcoe1xuICBjbGFzc05hbWUsXG4gIGN1cnJlbnQsXG4gIHJlc3VsdHNQZXJQYWdlLFxuICBvbkNoYW5nZSxcbiAgdG90YWxQYWdlcyxcbiAgLi4ucmVzdFxufSkge1xuICByZXR1cm4gKFxuICAgIDxSQ1BhZ2luYXRpb25cbiAgICAgIGN1cnJlbnQ9e2N1cnJlbnR9XG4gICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICBwYWdlU2l6ZT17cmVzdWx0c1BlclBhZ2V9XG4gICAgICB0b3RhbD17dG90YWxQYWdlcyAqIHJlc3VsdHNQZXJQYWdlfVxuICAgICAgY2xhc3NOYW1lPXthcHBlbmRDbGFzc05hbWUoXCJzdWktcGFnaW5nXCIsIGNsYXNzTmFtZSl9XG4gICAgICBsb2NhbGU9e2VuVXNMb2NhbGV9XG4gICAgICB7Li4ucmVzdH1cbiAgICAvPlxuICApO1xufVxuXG5QYWdpbmcucHJvcFR5cGVzID0ge1xuICBjdXJyZW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICByZXN1bHRzUGVyUGFnZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0b3RhbFBhZ2VzOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5nO1xuIl19