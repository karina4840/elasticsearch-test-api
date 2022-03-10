"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _viewHelpers = require("./view-helpers");

var _excluded = ["position", "top", "transform", "maxWidth"],
    _excluded2 = ["className", "onChange", "options", "value"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var setDefaultStyle = {
  option: function option() {
    return {};
  },
  control: function control() {
    return {};
  },
  dropdownIndicator: function dropdownIndicator() {
    return {};
  },
  indicatorSeparator: function indicatorSeparator() {
    return {};
  },
  singleValue: function singleValue(provided) {
    // Pulling out CSS that we don't want
    // eslint-disable-next-line no-unused-vars
    var position = provided.position,
        top = provided.top,
        transform = provided.transform,
        maxWidth = provided.maxWidth,
        rest = (0, _objectWithoutProperties2.default)(provided, _excluded);
    return _objectSpread(_objectSpread({}, rest), {}, {
      lineHeight: 1,
      marginRight: 0
    });
  },
  valueContainer: function valueContainer(provided) {
    return _objectSpread(_objectSpread({}, provided), {}, {
      paddingRight: 0
    });
  }
};

var wrapOption = function wrapOption(option) {
  return {
    label: option,
    value: option
  };
};

function ResultsPerPage(_ref) {
  var className = _ref.className,
      _onChange = _ref.onChange,
      options = _ref.options,
      selectedValue = _ref.value,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded2);
  var selectedOption = null;

  if (selectedValue) {
    selectedOption = wrapOption(selectedValue);
    if (!options.includes(selectedValue)) options = [selectedValue].concat((0, _toConsumableArray2.default)(options));
  }

  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _viewHelpers.appendClassName)("sui-results-per-page", className)
  }, rest), /*#__PURE__*/_react.default.createElement("div", {
    className: "sui-results-per-page__label"
  }, "Show"), /*#__PURE__*/_react.default.createElement(_reactSelect.default, {
    className: "sui-select sui-select--inline",
    classNamePrefix: "sui-select",
    value: selectedOption,
    onChange: function onChange(o) {
      return _onChange(o.value);
    },
    options: options.map(wrapOption),
    isSearchable: false,
    styles: setDefaultStyle
  }));
}

ResultsPerPage.propTypes = {
  onChange: _propTypes.default.func.isRequired,
  options: _propTypes.default.arrayOf(_propTypes.default.number).isRequired,
  className: _propTypes.default.string,
  value: _propTypes.default.number
};
var _default = ResultsPerPage;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SZXN1bHRzUGVyUGFnZS5qcyJdLCJuYW1lcyI6WyJzZXREZWZhdWx0U3R5bGUiLCJvcHRpb24iLCJjb250cm9sIiwiZHJvcGRvd25JbmRpY2F0b3IiLCJpbmRpY2F0b3JTZXBhcmF0b3IiLCJzaW5nbGVWYWx1ZSIsInByb3ZpZGVkIiwicG9zaXRpb24iLCJ0b3AiLCJ0cmFuc2Zvcm0iLCJtYXhXaWR0aCIsInJlc3QiLCJsaW5lSGVpZ2h0IiwibWFyZ2luUmlnaHQiLCJ2YWx1ZUNvbnRhaW5lciIsInBhZGRpbmdSaWdodCIsIndyYXBPcHRpb24iLCJsYWJlbCIsInZhbHVlIiwiUmVzdWx0c1BlclBhZ2UiLCJjbGFzc05hbWUiLCJvbkNoYW5nZSIsIm9wdGlvbnMiLCJzZWxlY3RlZFZhbHVlIiwic2VsZWN0ZWRPcHRpb24iLCJpbmNsdWRlcyIsIm8iLCJtYXAiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImFycmF5T2YiLCJudW1iZXIiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWUsR0FBRztBQUN0QkMsRUFBQUEsTUFBTSxFQUFFO0FBQUEsV0FBTyxFQUFQO0FBQUEsR0FEYztBQUV0QkMsRUFBQUEsT0FBTyxFQUFFO0FBQUEsV0FBTyxFQUFQO0FBQUEsR0FGYTtBQUd0QkMsRUFBQUEsaUJBQWlCLEVBQUU7QUFBQSxXQUFPLEVBQVA7QUFBQSxHQUhHO0FBSXRCQyxFQUFBQSxrQkFBa0IsRUFBRTtBQUFBLFdBQU8sRUFBUDtBQUFBLEdBSkU7QUFLdEJDLEVBQUFBLFdBQVcsRUFBRSxxQkFBQUMsUUFBUSxFQUFJO0FBQ3ZCO0FBQ0E7QUFDQSxRQUFRQyxRQUFSLEdBQXdERCxRQUF4RCxDQUFRQyxRQUFSO0FBQUEsUUFBa0JDLEdBQWxCLEdBQXdERixRQUF4RCxDQUFrQkUsR0FBbEI7QUFBQSxRQUF1QkMsU0FBdkIsR0FBd0RILFFBQXhELENBQXVCRyxTQUF2QjtBQUFBLFFBQWtDQyxRQUFsQyxHQUF3REosUUFBeEQsQ0FBa0NJLFFBQWxDO0FBQUEsUUFBK0NDLElBQS9DLDBDQUF3REwsUUFBeEQ7QUFDQSwyQ0FBWUssSUFBWjtBQUFrQkMsTUFBQUEsVUFBVSxFQUFFLENBQTlCO0FBQWlDQyxNQUFBQSxXQUFXLEVBQUU7QUFBOUM7QUFDRCxHQVZxQjtBQVd0QkMsRUFBQUEsY0FBYyxFQUFFLHdCQUFBUixRQUFRO0FBQUEsMkNBQVVBLFFBQVY7QUFBb0JTLE1BQUFBLFlBQVksRUFBRTtBQUFsQztBQUFBO0FBWEYsQ0FBeEI7O0FBY0EsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQWYsTUFBTTtBQUFBLFNBQUs7QUFBRWdCLElBQUFBLEtBQUssRUFBRWhCLE1BQVQ7QUFBaUJpQixJQUFBQSxLQUFLLEVBQUVqQjtBQUF4QixHQUFMO0FBQUEsQ0FBekI7O0FBRUEsU0FBU2tCLGNBQVQsT0FNRztBQUFBLE1BTERDLFNBS0MsUUFMREEsU0FLQztBQUFBLE1BSkRDLFNBSUMsUUFKREEsUUFJQztBQUFBLE1BSERDLE9BR0MsUUFIREEsT0FHQztBQUFBLE1BRk1DLGFBRU4sUUFGREwsS0FFQztBQUFBLE1BREVQLElBQ0Y7QUFDRCxNQUFJYSxjQUFjLEdBQUcsSUFBckI7O0FBRUEsTUFBSUQsYUFBSixFQUFtQjtBQUNqQkMsSUFBQUEsY0FBYyxHQUFHUixVQUFVLENBQUNPLGFBQUQsQ0FBM0I7QUFFQSxRQUFJLENBQUNELE9BQU8sQ0FBQ0csUUFBUixDQUFpQkYsYUFBakIsQ0FBTCxFQUFzQ0QsT0FBTyxJQUFJQyxhQUFKLDBDQUFzQkQsT0FBdEIsRUFBUDtBQUN2Qzs7QUFFRCxzQkFDRTtBQUNFLElBQUEsU0FBUyxFQUFFLGtDQUFnQixzQkFBaEIsRUFBd0NGLFNBQXhDO0FBRGIsS0FFTVQsSUFGTixnQkFJRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsWUFKRixlQUtFLDZCQUFDLG9CQUFEO0FBQ0UsSUFBQSxTQUFTLEVBQUMsK0JBRFo7QUFFRSxJQUFBLGVBQWUsRUFBQyxZQUZsQjtBQUdFLElBQUEsS0FBSyxFQUFFYSxjQUhUO0FBSUUsSUFBQSxRQUFRLEVBQUUsa0JBQUFFLENBQUM7QUFBQSxhQUFJTCxTQUFRLENBQUNLLENBQUMsQ0FBQ1IsS0FBSCxDQUFaO0FBQUEsS0FKYjtBQUtFLElBQUEsT0FBTyxFQUFFSSxPQUFPLENBQUNLLEdBQVIsQ0FBWVgsVUFBWixDQUxYO0FBTUUsSUFBQSxZQUFZLEVBQUUsS0FOaEI7QUFPRSxJQUFBLE1BQU0sRUFBRWhCO0FBUFYsSUFMRixDQURGO0FBaUJEOztBQUVEbUIsY0FBYyxDQUFDUyxTQUFmLEdBQTJCO0FBQ3pCUCxFQUFBQSxRQUFRLEVBQUVRLG1CQUFVQyxJQUFWLENBQWVDLFVBREE7QUFFekJULEVBQUFBLE9BQU8sRUFBRU8sbUJBQVVHLE9BQVYsQ0FBa0JILG1CQUFVSSxNQUE1QixFQUFvQ0YsVUFGcEI7QUFHekJYLEVBQUFBLFNBQVMsRUFBRVMsbUJBQVVLLE1BSEk7QUFJekJoQixFQUFBQSxLQUFLLEVBQUVXLG1CQUFVSTtBQUpRLENBQTNCO2VBT2VkLGMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcblxuaW1wb3J0IHsgYXBwZW5kQ2xhc3NOYW1lIH0gZnJvbSBcIi4vdmlldy1oZWxwZXJzXCI7XG5cbmNvbnN0IHNldERlZmF1bHRTdHlsZSA9IHtcbiAgb3B0aW9uOiAoKSA9PiAoe30pLFxuICBjb250cm9sOiAoKSA9PiAoe30pLFxuICBkcm9wZG93bkluZGljYXRvcjogKCkgPT4gKHt9KSxcbiAgaW5kaWNhdG9yU2VwYXJhdG9yOiAoKSA9PiAoe30pLFxuICBzaW5nbGVWYWx1ZTogcHJvdmlkZWQgPT4ge1xuICAgIC8vIFB1bGxpbmcgb3V0IENTUyB0aGF0IHdlIGRvbid0IHdhbnRcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICBjb25zdCB7IHBvc2l0aW9uLCB0b3AsIHRyYW5zZm9ybSwgbWF4V2lkdGgsIC4uLnJlc3QgfSA9IHByb3ZpZGVkO1xuICAgIHJldHVybiB7IC4uLnJlc3QsIGxpbmVIZWlnaHQ6IDEsIG1hcmdpblJpZ2h0OiAwIH07XG4gIH0sXG4gIHZhbHVlQ29udGFpbmVyOiBwcm92aWRlZCA9PiAoeyAuLi5wcm92aWRlZCwgcGFkZGluZ1JpZ2h0OiAwIH0pXG59O1xuXG5jb25zdCB3cmFwT3B0aW9uID0gb3B0aW9uID0+ICh7IGxhYmVsOiBvcHRpb24sIHZhbHVlOiBvcHRpb24gfSk7XG5cbmZ1bmN0aW9uIFJlc3VsdHNQZXJQYWdlKHtcbiAgY2xhc3NOYW1lLFxuICBvbkNoYW5nZSxcbiAgb3B0aW9ucyxcbiAgdmFsdWU6IHNlbGVjdGVkVmFsdWUsXG4gIC4uLnJlc3Rcbn0pIHtcbiAgbGV0IHNlbGVjdGVkT3B0aW9uID0gbnVsbDtcblxuICBpZiAoc2VsZWN0ZWRWYWx1ZSkge1xuICAgIHNlbGVjdGVkT3B0aW9uID0gd3JhcE9wdGlvbihzZWxlY3RlZFZhbHVlKTtcblxuICAgIGlmICghb3B0aW9ucy5pbmNsdWRlcyhzZWxlY3RlZFZhbHVlKSkgb3B0aW9ucyA9IFtzZWxlY3RlZFZhbHVlLCAuLi5vcHRpb25zXTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXthcHBlbmRDbGFzc05hbWUoXCJzdWktcmVzdWx0cy1wZXItcGFnZVwiLCBjbGFzc05hbWUpfVxuICAgICAgey4uLnJlc3R9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWktcmVzdWx0cy1wZXItcGFnZV9fbGFiZWxcIj5TaG93PC9kaXY+XG4gICAgICA8U2VsZWN0XG4gICAgICAgIGNsYXNzTmFtZT1cInN1aS1zZWxlY3Qgc3VpLXNlbGVjdC0taW5saW5lXCJcbiAgICAgICAgY2xhc3NOYW1lUHJlZml4PVwic3VpLXNlbGVjdFwiXG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZE9wdGlvbn1cbiAgICAgICAgb25DaGFuZ2U9e28gPT4gb25DaGFuZ2Uoby52YWx1ZSl9XG4gICAgICAgIG9wdGlvbnM9e29wdGlvbnMubWFwKHdyYXBPcHRpb24pfVxuICAgICAgICBpc1NlYXJjaGFibGU9e2ZhbHNlfVxuICAgICAgICBzdHlsZXM9e3NldERlZmF1bHRTdHlsZX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblJlc3VsdHNQZXJQYWdlLnByb3BUeXBlcyA9IHtcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFByb3BUeXBlcy5udW1iZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VsdHNQZXJQYWdlO1xuIl19