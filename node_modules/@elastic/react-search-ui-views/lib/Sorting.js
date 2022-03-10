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

var _reactSelect = _interopRequireDefault(require("react-select"));

var _viewHelpers = require("./view-helpers");

var _excluded = ["className", "label", "onChange", "options", "value"];
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
  }
};

function Sorting(_ref) {
  var className = _ref.className,
      label = _ref.label,
      _onChange = _ref.onChange,
      options = _ref.options,
      value = _ref.value,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var selectedValue = value;
  var selectedOption = selectedValue ? options.find(function (option) {
    return option.value === selectedValue;
  }) : null;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _viewHelpers.appendClassName)("sui-sorting", className)
  }, rest), label && /*#__PURE__*/_react.default.createElement("div", {
    className: "sui-sorting__label"
  }, label), /*#__PURE__*/_react.default.createElement(_reactSelect.default, {
    className: "sui-select",
    classNamePrefix: "sui-select",
    value: selectedOption,
    onChange: function onChange(o) {
      return _onChange(o.value);
    },
    options: options,
    isSearchable: false,
    styles: setDefaultStyle
  }));
}

Sorting.propTypes = {
  className: _propTypes.default.string,
  label: _propTypes.default.string,
  onChange: _propTypes.default.func.isRequired,
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    value: _propTypes.default.string,
    label: _propTypes.default.string
  })).isRequired,
  value: _propTypes.default.string
};
var _default = Sorting;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Tb3J0aW5nLmpzIl0sIm5hbWVzIjpbInNldERlZmF1bHRTdHlsZSIsIm9wdGlvbiIsImNvbnRyb2wiLCJkcm9wZG93bkluZGljYXRvciIsImluZGljYXRvclNlcGFyYXRvciIsIlNvcnRpbmciLCJjbGFzc05hbWUiLCJsYWJlbCIsIm9uQ2hhbmdlIiwib3B0aW9ucyIsInZhbHVlIiwicmVzdCIsInNlbGVjdGVkVmFsdWUiLCJzZWxlY3RlZE9wdGlvbiIsImZpbmQiLCJvIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJhcnJheU9mIiwic2hhcGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7O0FBRUEsSUFBTUEsZUFBZSxHQUFHO0FBQ3RCQyxFQUFBQSxNQUFNLEVBQUU7QUFBQSxXQUFPLEVBQVA7QUFBQSxHQURjO0FBRXRCQyxFQUFBQSxPQUFPLEVBQUU7QUFBQSxXQUFPLEVBQVA7QUFBQSxHQUZhO0FBR3RCQyxFQUFBQSxpQkFBaUIsRUFBRTtBQUFBLFdBQU8sRUFBUDtBQUFBLEdBSEc7QUFJdEJDLEVBQUFBLGtCQUFrQixFQUFFO0FBQUEsV0FBTyxFQUFQO0FBQUE7QUFKRSxDQUF4Qjs7QUFPQSxTQUFTQyxPQUFULE9BQTBFO0FBQUEsTUFBdkRDLFNBQXVELFFBQXZEQSxTQUF1RDtBQUFBLE1BQTVDQyxLQUE0QyxRQUE1Q0EsS0FBNEM7QUFBQSxNQUFyQ0MsU0FBcUMsUUFBckNBLFFBQXFDO0FBQUEsTUFBM0JDLE9BQTJCLFFBQTNCQSxPQUEyQjtBQUFBLE1BQWxCQyxLQUFrQixRQUFsQkEsS0FBa0I7QUFBQSxNQUFSQyxJQUFRO0FBQ3hFLE1BQU1DLGFBQWEsR0FBR0YsS0FBdEI7QUFFQSxNQUFNRyxjQUFjLEdBQUdELGFBQWEsR0FDaENILE9BQU8sQ0FBQ0ssSUFBUixDQUFhLFVBQUFiLE1BQU07QUFBQSxXQUFJQSxNQUFNLENBQUNTLEtBQVAsS0FBaUJFLGFBQXJCO0FBQUEsR0FBbkIsQ0FEZ0MsR0FFaEMsSUFGSjtBQUlBLHNCQUNFO0FBQUssSUFBQSxTQUFTLEVBQUUsa0NBQWdCLGFBQWhCLEVBQStCTixTQUEvQjtBQUFoQixLQUErREssSUFBL0QsR0FDR0osS0FBSyxpQkFBSTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBcUNBLEtBQXJDLENBRFosZUFFRSw2QkFBQyxvQkFBRDtBQUNFLElBQUEsU0FBUyxFQUFDLFlBRFo7QUFFRSxJQUFBLGVBQWUsRUFBQyxZQUZsQjtBQUdFLElBQUEsS0FBSyxFQUFFTSxjQUhUO0FBSUUsSUFBQSxRQUFRLEVBQUUsa0JBQUFFLENBQUM7QUFBQSxhQUFJUCxTQUFRLENBQUNPLENBQUMsQ0FBQ0wsS0FBSCxDQUFaO0FBQUEsS0FKYjtBQUtFLElBQUEsT0FBTyxFQUFFRCxPQUxYO0FBTUUsSUFBQSxZQUFZLEVBQUUsS0FOaEI7QUFPRSxJQUFBLE1BQU0sRUFBRVQ7QUFQVixJQUZGLENBREY7QUFjRDs7QUFFREssT0FBTyxDQUFDVyxTQUFSLEdBQW9CO0FBQ2xCVixFQUFBQSxTQUFTLEVBQUVXLG1CQUFVQyxNQURIO0FBRWxCWCxFQUFBQSxLQUFLLEVBQUVVLG1CQUFVQyxNQUZDO0FBR2xCVixFQUFBQSxRQUFRLEVBQUVTLG1CQUFVRSxJQUFWLENBQWVDLFVBSFA7QUFJbEJYLEVBQUFBLE9BQU8sRUFBRVEsbUJBQVVJLE9BQVYsQ0FDUEosbUJBQVVLLEtBQVYsQ0FBZ0I7QUFBRVosSUFBQUEsS0FBSyxFQUFFTyxtQkFBVUMsTUFBbkI7QUFBMkJYLElBQUFBLEtBQUssRUFBRVUsbUJBQVVDO0FBQTVDLEdBQWhCLENBRE8sRUFFUEUsVUFOZ0I7QUFPbEJWLEVBQUFBLEtBQUssRUFBRU8sbUJBQVVDO0FBUEMsQ0FBcEI7ZUFVZWIsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xuXG5pbXBvcnQgeyBhcHBlbmRDbGFzc05hbWUgfSBmcm9tIFwiLi92aWV3LWhlbHBlcnNcIjtcblxuY29uc3Qgc2V0RGVmYXVsdFN0eWxlID0ge1xuICBvcHRpb246ICgpID0+ICh7fSksXG4gIGNvbnRyb2w6ICgpID0+ICh7fSksXG4gIGRyb3Bkb3duSW5kaWNhdG9yOiAoKSA9PiAoe30pLFxuICBpbmRpY2F0b3JTZXBhcmF0b3I6ICgpID0+ICh7fSlcbn07XG5cbmZ1bmN0aW9uIFNvcnRpbmcoeyBjbGFzc05hbWUsIGxhYmVsLCBvbkNoYW5nZSwgb3B0aW9ucywgdmFsdWUsIC4uLnJlc3QgfSkge1xuICBjb25zdCBzZWxlY3RlZFZhbHVlID0gdmFsdWU7XG5cbiAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBzZWxlY3RlZFZhbHVlXG4gICAgPyBvcHRpb25zLmZpbmQob3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PT0gc2VsZWN0ZWRWYWx1ZSlcbiAgICA6IG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YXBwZW5kQ2xhc3NOYW1lKFwic3VpLXNvcnRpbmdcIiwgY2xhc3NOYW1lKX0gey4uLnJlc3R9PlxuICAgICAge2xhYmVsICYmIDxkaXYgY2xhc3NOYW1lPVwic3VpLXNvcnRpbmdfX2xhYmVsXCI+e2xhYmVsfTwvZGl2Pn1cbiAgICAgIDxTZWxlY3RcbiAgICAgICAgY2xhc3NOYW1lPVwic3VpLXNlbGVjdFwiXG4gICAgICAgIGNsYXNzTmFtZVByZWZpeD1cInN1aS1zZWxlY3RcIlxuICAgICAgICB2YWx1ZT17c2VsZWN0ZWRPcHRpb259XG4gICAgICAgIG9uQ2hhbmdlPXtvID0+IG9uQ2hhbmdlKG8udmFsdWUpfVxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICBpc1NlYXJjaGFibGU9e2ZhbHNlfVxuICAgICAgICBzdHlsZXM9e3NldERlZmF1bHRTdHlsZX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblNvcnRpbmcucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLnNoYXBlKHsgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nIH0pXG4gICkuaXNSZXF1aXJlZCxcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNvcnRpbmc7XG4iXX0=