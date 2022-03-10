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

var _excluded = ["className", "end", "searchTerm", "start", "totalResults"];

function PagingInfo(_ref) {
  var className = _ref.className,
      end = _ref.end,
      searchTerm = _ref.searchTerm,
      start = _ref.start,
      totalResults = _ref.totalResults,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _viewHelpers.appendClassName)("sui-paging-info", className)
  }, rest), "Showing", " ", /*#__PURE__*/_react.default.createElement("strong", null, start, " - ", end), " ", "out of ", /*#__PURE__*/_react.default.createElement("strong", null, totalResults), searchTerm && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, " ", "for: ", /*#__PURE__*/_react.default.createElement("em", null, searchTerm)));
}

PagingInfo.propTypes = {
  end: _propTypes.default.number.isRequired,
  searchTerm: _propTypes.default.string.isRequired,
  start: _propTypes.default.number.isRequired,
  totalResults: _propTypes.default.number.isRequired,
  className: _propTypes.default.string
};
var _default = PagingInfo;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9QYWdpbmdJbmZvLmpzIl0sIm5hbWVzIjpbIlBhZ2luZ0luZm8iLCJjbGFzc05hbWUiLCJlbmQiLCJzZWFyY2hUZXJtIiwic3RhcnQiLCJ0b3RhbFJlc3VsdHMiLCJyZXN0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7O0FBRUEsU0FBU0EsVUFBVCxPQU9HO0FBQUEsTUFOREMsU0FNQyxRQU5EQSxTQU1DO0FBQUEsTUFMREMsR0FLQyxRQUxEQSxHQUtDO0FBQUEsTUFKREMsVUFJQyxRQUpEQSxVQUlDO0FBQUEsTUFIREMsS0FHQyxRQUhEQSxLQUdDO0FBQUEsTUFGREMsWUFFQyxRQUZEQSxZQUVDO0FBQUEsTUFERUMsSUFDRjtBQUNELHNCQUNFO0FBQUssSUFBQSxTQUFTLEVBQUUsa0NBQWdCLGlCQUFoQixFQUFtQ0wsU0FBbkM7QUFBaEIsS0FBbUVLLElBQW5FLGNBQ1UsR0FEVixlQUVFLDZDQUNHRixLQURILFNBQ2FGLEdBRGIsQ0FGRixFQUlZLEdBSlosMEJBS1MsNkNBQVNHLFlBQVQsQ0FMVCxFQU1HRixVQUFVLGlCQUNULDREQUNHLEdBREgsd0JBRU8seUNBQUtBLFVBQUwsQ0FGUCxDQVBKLENBREY7QUFlRDs7QUFFREgsVUFBVSxDQUFDTyxTQUFYLEdBQXVCO0FBQ3JCTCxFQUFBQSxHQUFHLEVBQUVNLG1CQUFVQyxNQUFWLENBQWlCQyxVQUREO0FBRXJCUCxFQUFBQSxVQUFVLEVBQUVLLG1CQUFVRyxNQUFWLENBQWlCRCxVQUZSO0FBR3JCTixFQUFBQSxLQUFLLEVBQUVJLG1CQUFVQyxNQUFWLENBQWlCQyxVQUhIO0FBSXJCTCxFQUFBQSxZQUFZLEVBQUVHLG1CQUFVQyxNQUFWLENBQWlCQyxVQUpWO0FBS3JCVCxFQUFBQSxTQUFTLEVBQUVPLG1CQUFVRztBQUxBLENBQXZCO2VBUWVYLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IGFwcGVuZENsYXNzTmFtZSB9IGZyb20gXCIuL3ZpZXctaGVscGVyc1wiO1xuXG5mdW5jdGlvbiBQYWdpbmdJbmZvKHtcbiAgY2xhc3NOYW1lLFxuICBlbmQsXG4gIHNlYXJjaFRlcm0sXG4gIHN0YXJ0LFxuICB0b3RhbFJlc3VsdHMsXG4gIC4uLnJlc3Rcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YXBwZW5kQ2xhc3NOYW1lKFwic3VpLXBhZ2luZy1pbmZvXCIsIGNsYXNzTmFtZSl9IHsuLi5yZXN0fT5cbiAgICAgIFNob3dpbmd7XCIgXCJ9XG4gICAgICA8c3Ryb25nPlxuICAgICAgICB7c3RhcnR9IC0ge2VuZH1cbiAgICAgIDwvc3Ryb25nPntcIiBcIn1cbiAgICAgIG91dCBvZiA8c3Ryb25nPnt0b3RhbFJlc3VsdHN9PC9zdHJvbmc+XG4gICAgICB7c2VhcmNoVGVybSAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAge1wiIFwifVxuICAgICAgICAgIGZvcjogPGVtPntzZWFyY2hUZXJtfTwvZW0+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuUGFnaW5nSW5mby5wcm9wVHlwZXMgPSB7XG4gIGVuZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBzZWFyY2hUZXJtOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHN0YXJ0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRvdGFsUmVzdWx0czogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luZ0luZm87XG4iXX0=