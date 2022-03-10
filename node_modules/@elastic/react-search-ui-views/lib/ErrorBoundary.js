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

var _excluded = ["children", "className", "error"];

function ErrorBoundary(_ref) {
  var children = _ref.children,
      className = _ref.className,
      error = _ref.error,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  if (error) {
    return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
      className: (0, _viewHelpers.appendClassName)("sui-search-error", className)
    }, rest), error);
  }

  return children;
}

ErrorBoundary.propTypes = {
  children: _propTypes.default.node.isRequired,
  error: _propTypes.default.string.isRequired,
  className: _propTypes.default.string
};
var _default = ErrorBoundary;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9FcnJvckJvdW5kYXJ5LmpzIl0sIm5hbWVzIjpbIkVycm9yQm91bmRhcnkiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImVycm9yIiwicmVzdCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7QUFFQSxTQUFTQSxhQUFULE9BQWdFO0FBQUEsTUFBdkNDLFFBQXVDLFFBQXZDQSxRQUF1QztBQUFBLE1BQTdCQyxTQUE2QixRQUE3QkEsU0FBNkI7QUFBQSxNQUFsQkMsS0FBa0IsUUFBbEJBLEtBQWtCO0FBQUEsTUFBUkMsSUFBUTs7QUFDOUQsTUFBSUQsS0FBSixFQUFXO0FBQ1Qsd0JBQ0U7QUFBSyxNQUFBLFNBQVMsRUFBRSxrQ0FBZ0Isa0JBQWhCLEVBQW9DRCxTQUFwQztBQUFoQixPQUFvRUUsSUFBcEUsR0FDR0QsS0FESCxDQURGO0FBS0Q7O0FBRUQsU0FBT0YsUUFBUDtBQUNEOztBQUVERCxhQUFhLENBQUNLLFNBQWQsR0FBMEI7QUFDeEJKLEVBQUFBLFFBQVEsRUFBRUssbUJBQVVDLElBQVYsQ0FBZUMsVUFERDtBQUV4QkwsRUFBQUEsS0FBSyxFQUFFRyxtQkFBVUcsTUFBVixDQUFpQkQsVUFGQTtBQUd4Qk4sRUFBQUEsU0FBUyxFQUFFSSxtQkFBVUc7QUFIRyxDQUExQjtlQU1lVCxhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBhcHBlbmRDbGFzc05hbWUgfSBmcm9tIFwiLi92aWV3LWhlbHBlcnNcIjtcblxuZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGVycm9yLCAuLi5yZXN0IH0pIHtcbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXthcHBlbmRDbGFzc05hbWUoXCJzdWktc2VhcmNoLWVycm9yXCIsIGNsYXNzTmFtZSl9IHsuLi5yZXN0fT5cbiAgICAgICAge2Vycm9yfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuRXJyb3JCb3VuZGFyeS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBlcnJvcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yQm91bmRhcnk7XG4iXX0=