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

var _viewHelpers = require("./view-helpers");

var _excluded = ["children", "className"];

function Facets(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _viewHelpers.appendClassName)("sui-facet-container", className)
  }, rest), children);
}

Facets.propTypes = {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string
};
var _default = Facets;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9GYWNldHMuanMiXSwibmFtZXMiOlsiRmFjZXRzIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJyZXN0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7OztBQUVBLFNBQVNBLE1BQVQsT0FBa0Q7QUFBQSxNQUFoQ0MsUUFBZ0MsUUFBaENBLFFBQWdDO0FBQUEsTUFBdEJDLFNBQXNCLFFBQXRCQSxTQUFzQjtBQUFBLE1BQVJDLElBQVE7QUFDaEQsc0JBQ0U7QUFDRSxJQUFBLFNBQVMsRUFBRSxrQ0FBZ0IscUJBQWhCLEVBQXVDRCxTQUF2QztBQURiLEtBRU1DLElBRk4sR0FJR0YsUUFKSCxDQURGO0FBUUQ7O0FBRURELE1BQU0sQ0FBQ0ksU0FBUCxHQUFtQjtBQUNqQkgsRUFBQUEsUUFBUSxFQUFFSSxtQkFBVUMsSUFBVixDQUFlQyxVQURSO0FBRWpCTCxFQUFBQSxTQUFTLEVBQUVHLG1CQUFVRztBQUZKLENBQW5CO2VBS2VSLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IGFwcGVuZENsYXNzTmFtZSB9IGZyb20gXCIuL3ZpZXctaGVscGVyc1wiO1xuXG5mdW5jdGlvbiBGYWNldHMoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5yZXN0IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2FwcGVuZENsYXNzTmFtZShcInN1aS1mYWNldC1jb250YWluZXJcIiwgY2xhc3NOYW1lKX1cbiAgICAgIHsuLi5yZXN0fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuRmFjZXRzLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmFjZXRzO1xuIl19