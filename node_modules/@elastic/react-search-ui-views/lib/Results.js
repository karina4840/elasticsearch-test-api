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

function Results(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("ul", (0, _extends2.default)({
    className: (0, _viewHelpers.appendClassName)("sui-results-container", className)
  }, rest), children);
}

Results.propTypes = {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string
};
var _default = Results;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SZXN1bHRzLmpzIl0sIm5hbWVzIjpbIlJlc3VsdHMiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInJlc3QiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7O0FBRUEsU0FBU0EsT0FBVCxPQUFtRDtBQUFBLE1BQWhDQyxRQUFnQyxRQUFoQ0EsUUFBZ0M7QUFBQSxNQUF0QkMsU0FBc0IsUUFBdEJBLFNBQXNCO0FBQUEsTUFBUkMsSUFBUTtBQUNqRCxzQkFDRTtBQUNFLElBQUEsU0FBUyxFQUFFLGtDQUFnQix1QkFBaEIsRUFBeUNELFNBQXpDO0FBRGIsS0FFTUMsSUFGTixHQUlHRixRQUpILENBREY7QUFRRDs7QUFFREQsT0FBTyxDQUFDSSxTQUFSLEdBQW9CO0FBQ2xCSCxFQUFBQSxRQUFRLEVBQUVJLG1CQUFVQyxJQUFWLENBQWVDLFVBRFA7QUFFbEJMLEVBQUFBLFNBQVMsRUFBRUcsbUJBQVVHO0FBRkgsQ0FBcEI7ZUFLZVIsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgYXBwZW5kQ2xhc3NOYW1lIH0gZnJvbSBcIi4vdmlldy1oZWxwZXJzXCI7XG5cbmZ1bmN0aW9uIFJlc3VsdHMoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5yZXN0IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8dWxcbiAgICAgIGNsYXNzTmFtZT17YXBwZW5kQ2xhc3NOYW1lKFwic3VpLXJlc3VsdHMtY29udGFpbmVyXCIsIGNsYXNzTmFtZSl9XG4gICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC91bD5cbiAgKTtcbn1cblxuUmVzdWx0cy5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VsdHM7XG4iXX0=