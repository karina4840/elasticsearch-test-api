"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _viewHelpers = require("./view-helpers");

var _FieldValueWrapper = require("./types/FieldValueWrapper");

var _excluded = ["className", "result", "onClickLink", "titleField", "urlField", "thumbnailField"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function getFieldType(result, field, type) {
  if (result[field]) return result[field][type];
}

function getRaw(result, field) {
  return getFieldType(result, field, "raw");
}

function getSnippet(result, field) {
  return getFieldType(result, field, "snippet");
}

function htmlEscape(str) {
  if (!str) return "";
  return String(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function getEscapedField(result, field) {
  // Fallback to raw values here, because non-string fields
  // will not have a snippet fallback. Raw values MUST be html escaped.
  var safeField = getSnippet(result, field) || htmlEscape(getRaw(result, field));
  return Array.isArray(safeField) ? safeField.join(", ") : safeField;
}

function getEscapedFields(result) {
  return Object.keys(result).reduce(function (acc, field) {
    // If we receive an arbitrary value from the response, we may not properly
    // handle it, so we should filter out arbitrary values here.
    //
    // I.e.,
    // Arbitrary value: "_metaField: '1939191'"
    // vs.
    // FieldValueWrapper: "_metaField: {raw: '1939191'}"
    if (!(0, _FieldValueWrapper.isFieldValueWrapper)(result[field])) return acc;
    return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2.default)({}, field, getEscapedField(result, field)));
  }, {});
}

function Result(_ref) {
  var className = _ref.className,
      result = _ref.result,
      onClickLink = _ref.onClickLink,
      titleField = _ref.titleField,
      urlField = _ref.urlField,
      thumbnailField = _ref.thumbnailField,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var fields = getEscapedFields(result);
  var title = getEscapedField(result, titleField);
  var url = (0, _viewHelpers.getUrlSanitizer)(URL, location)(getRaw(result, urlField));
  var thumbnail = (0, _viewHelpers.getUrlSanitizer)(URL, location)(getRaw(result, thumbnailField));
  return /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({
    className: (0, _viewHelpers.appendClassName)("sui-result", className)
  }, rest), /*#__PURE__*/_react.default.createElement("div", {
    className: "sui-result__header"
  }, title && !url && /*#__PURE__*/_react.default.createElement("span", {
    className: "sui-result__title",
    dangerouslySetInnerHTML: {
      __html: title
    }
  }), title && url && /*#__PURE__*/_react.default.createElement("a", {
    className: "sui-result__title sui-result__title-link",
    dangerouslySetInnerHTML: {
      __html: title
    },
    href: url,
    onClick: onClickLink,
    target: "_blank",
    rel: "noopener noreferrer"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "sui-result__body"
  }, thumbnail && /*#__PURE__*/_react.default.createElement("div", {
    className: "sui-result__image"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: thumbnail,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("ul", {
    className: "sui-result__details"
  }, Object.entries(fields).map(function (_ref2) {
    var _ref3 = (0, _slicedToArray2.default)(_ref2, 2),
        fieldName = _ref3[0],
        fieldValue = _ref3[1];

    return /*#__PURE__*/_react.default.createElement("li", {
      key: fieldName
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "sui-result__key"
    }, fieldName), " ", /*#__PURE__*/_react.default.createElement("span", {
      className: "sui-result__value",
      dangerouslySetInnerHTML: {
        __html: fieldValue
      }
    }));
  }))));
}

Result.propTypes = {
  result: _propTypes.default.object.isRequired,
  onClickLink: _propTypes.default.func.isRequired,
  className: _propTypes.default.string,
  titleField: _propTypes.default.string,
  urlField: _propTypes.default.string,
  thumbnailField: _propTypes.default.string
};
var _default = Result;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SZXN1bHQuanMiXSwibmFtZXMiOlsiZ2V0RmllbGRUeXBlIiwicmVzdWx0IiwiZmllbGQiLCJ0eXBlIiwiZ2V0UmF3IiwiZ2V0U25pcHBldCIsImh0bWxFc2NhcGUiLCJzdHIiLCJTdHJpbmciLCJyZXBsYWNlIiwiZ2V0RXNjYXBlZEZpZWxkIiwic2FmZUZpZWxkIiwiQXJyYXkiLCJpc0FycmF5Iiwiam9pbiIsImdldEVzY2FwZWRGaWVsZHMiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwiYWNjIiwiUmVzdWx0IiwiY2xhc3NOYW1lIiwib25DbGlja0xpbmsiLCJ0aXRsZUZpZWxkIiwidXJsRmllbGQiLCJ0aHVtYm5haWxGaWVsZCIsInJlc3QiLCJmaWVsZHMiLCJ0aXRsZSIsInVybCIsIlVSTCIsImxvY2F0aW9uIiwidGh1bWJuYWlsIiwiX19odG1sIiwiZW50cmllcyIsIm1hcCIsImZpZWxkTmFtZSIsImZpZWxkVmFsdWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7QUFFQSxTQUFTQSxZQUFULENBQXNCQyxNQUF0QixFQUE4QkMsS0FBOUIsRUFBcUNDLElBQXJDLEVBQTJDO0FBQ3pDLE1BQUlGLE1BQU0sQ0FBQ0MsS0FBRCxDQUFWLEVBQW1CLE9BQU9ELE1BQU0sQ0FBQ0MsS0FBRCxDQUFOLENBQWNDLElBQWQsQ0FBUDtBQUNwQjs7QUFFRCxTQUFTQyxNQUFULENBQWdCSCxNQUFoQixFQUF3QkMsS0FBeEIsRUFBK0I7QUFDN0IsU0FBT0YsWUFBWSxDQUFDQyxNQUFELEVBQVNDLEtBQVQsRUFBZ0IsS0FBaEIsQ0FBbkI7QUFDRDs7QUFFRCxTQUFTRyxVQUFULENBQW9CSixNQUFwQixFQUE0QkMsS0FBNUIsRUFBbUM7QUFDakMsU0FBT0YsWUFBWSxDQUFDQyxNQUFE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XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IGFwcGVuZENsYXNzTmFtZSwgZ2V0VXJsU2FuaXRpemVyIH0gZnJvbSBcIi4vdmlldy1oZWxwZXJzXCI7XG5pbXBvcnQgeyBpc0ZpZWxkVmFsdWVXcmFwcGVyIH0gZnJvbSBcIi4vdHlwZXMvRmllbGRWYWx1ZVdyYXBwZXJcIjtcblxuZnVuY3Rpb24gZ2V0RmllbGRUeXBlKHJlc3VsdCwgZmllbGQsIHR5cGUpIHtcbiAgaWYgKHJlc3VsdFtmaWVsZF0pIHJldHVybiByZXN1bHRbZmllbGRdW3R5cGVdO1xufVxuXG5mdW5jdGlvbiBnZXRSYXcocmVzdWx0LCBmaWVsZCkge1xuICByZXR1cm4gZ2V0RmllbGRUeXBlKHJlc3VsdCwgZmllbGQsIFwicmF3XCIpO1xufVxuXG5mdW5jdGlvbiBnZXRTbmlwcGV0KHJlc3VsdCwgZmllbGQpIHtcbiAgcmV0dXJuIGdldEZpZWxkVHlwZShyZXN1bHQsIGZpZWxkLCBcInNuaXBwZXRcIik7XG59XG5cbmZ1bmN0aW9uIGh0bWxFc2NhcGUoc3RyKSB7XG4gIGlmICghc3RyKSByZXR1cm4gXCJcIjtcblxuICByZXR1cm4gU3RyaW5nKHN0cilcbiAgICAucmVwbGFjZSgvJi9nLCBcIiZhbXA7XCIpXG4gICAgLnJlcGxhY2UoL1wiL2csIFwiJnF1b3Q7XCIpXG4gICAgLnJlcGxhY2UoLycvZywgXCImIzM5O1wiKVxuICAgIC5yZXBsYWNlKC88L2csIFwiJmx0O1wiKVxuICAgIC5yZXBsYWNlKC8+L2csIFwiJmd0O1wiKTtcbn1cblxuZnVuY3Rpb24gZ2V0RXNjYXBlZEZpZWxkKHJlc3VsdCwgZmllbGQpIHtcbiAgLy8gRmFsbGJhY2sgdG8gcmF3IHZhbHVlcyBoZXJlLCBiZWNhdXNlIG5vbi1zdHJpbmcgZmllbGRzXG4gIC8vIHdpbGwgbm90IGhhdmUgYSBzbmlwcGV0IGZhbGxiYWNrLiBSYXcgdmFsdWVzIE1VU1QgYmUgaHRtbCBlc2NhcGVkLlxuICBjb25zdCBzYWZlRmllbGQgPVxuICAgIGdldFNuaXBwZXQocmVzdWx0LCBmaWVsZCkgfHwgaHRtbEVzY2FwZShnZXRSYXcocmVzdWx0LCBmaWVsZCkpO1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShzYWZlRmllbGQpID8gc2FmZUZpZWxkLmpvaW4oXCIsIFwiKSA6IHNhZmVGaWVsZDtcbn1cblxuZnVuY3Rpb24gZ2V0RXNjYXBlZEZpZWxkcyhyZXN1bHQpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHJlc3VsdCkucmVkdWNlKChhY2MsIGZpZWxkKSA9PiB7XG4gICAgLy8gSWYgd2UgcmVjZWl2ZSBhbiBhcmJpdHJhcnkgdmFsdWUgZnJvbSB0aGUgcmVzcG9uc2UsIHdlIG1heSBub3QgcHJvcGVybHlcbiAgICAvLyBoYW5kbGUgaXQsIHNvIHdlIHNob3VsZCBmaWx0ZXIgb3V0IGFyYml0cmFyeSB2YWx1ZXMgaGVyZS5cbiAgICAvL1xuICAgIC8vIEkuZS4sXG4gICAgLy8gQXJiaXRyYXJ5IHZhbHVlOiBcIl9tZXRhRmllbGQ6ICcxOTM5MTkxJ1wiXG4gICAgLy8gdnMuXG4gICAgLy8gRmllbGRWYWx1ZVdyYXBwZXI6IFwiX21ldGFGaWVsZDoge3JhdzogJzE5MzkxOTEnfVwiXG4gICAgaWYgKCFpc0ZpZWxkVmFsdWVXcmFwcGVyKHJlc3VsdFtmaWVsZF0pKSByZXR1cm4gYWNjO1xuICAgIHJldHVybiB7IC4uLmFjYywgW2ZpZWxkXTogZ2V0RXNjYXBlZEZpZWxkKHJlc3VsdCwgZmllbGQpIH07XG4gIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gUmVzdWx0KHtcbiAgY2xhc3NOYW1lLFxuICByZXN1bHQsXG4gIG9uQ2xpY2tMaW5rLFxuICB0aXRsZUZpZWxkLFxuICB1cmxGaWVsZCxcbiAgdGh1bWJuYWlsRmllbGQsXG4gIC4uLnJlc3Rcbn0pIHtcbiAgY29uc3QgZmllbGRzID0gZ2V0RXNjYXBlZEZpZWxkcyhyZXN1bHQpO1xuICBjb25zdCB0aXRsZSA9IGdldEVzY2FwZWRGaWVsZChyZXN1bHQsIHRpdGxlRmllbGQpO1xuICBjb25zdCB1cmwgPSBnZXRVcmxTYW5pdGl6ZXIoVVJMLCBsb2NhdGlvbikoZ2V0UmF3KHJlc3VsdCwgdXJsRmllbGQpKTtcbiAgY29uc3QgdGh1bWJuYWlsID0gZ2V0VXJsU2FuaXRpemVyKFVSTCwgbG9jYXRpb24pKFxuICAgIGdldFJhdyhyZXN1bHQsIHRodW1ibmFpbEZpZWxkKVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT17YXBwZW5kQ2xhc3NOYW1lKFwic3VpLXJlc3VsdFwiLCBjbGFzc05hbWUpfSB7Li4ucmVzdH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1aS1yZXN1bHRfX2hlYWRlclwiPlxuICAgICAgICB7dGl0bGUgJiYgIXVybCAmJiAoXG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInN1aS1yZXN1bHRfX3RpdGxlXCJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGl0bGUgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7dGl0bGUgJiYgdXJsICYmIChcbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic3VpLXJlc3VsdF9fdGl0bGUgc3VpLXJlc3VsdF9fdGl0bGUtbGlua1wiXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRpdGxlIH19XG4gICAgICAgICAgICBocmVmPXt1cmx9XG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrTGlua31cbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VpLXJlc3VsdF9fYm9keVwiPlxuICAgICAgICB7dGh1bWJuYWlsICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1aS1yZXN1bHRfX2ltYWdlXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17dGh1bWJuYWlsfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3VpLXJlc3VsdF9fZGV0YWlsc1wiPlxuICAgICAgICAgIHtPYmplY3QuZW50cmllcyhmaWVsZHMpLm1hcCgoW2ZpZWxkTmFtZSwgZmllbGRWYWx1ZV0pID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2ZpZWxkTmFtZX0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1aS1yZXN1bHRfX2tleVwiPntmaWVsZE5hbWV9PC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdWktcmVzdWx0X192YWx1ZVwiXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBmaWVsZFZhbHVlIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9saT5cbiAgKTtcbn1cblxuUmVzdWx0LnByb3BUeXBlcyA9IHtcbiAgcmVzdWx0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIG9uQ2xpY2tMaW5rOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRpdGxlRmllbGQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHVybEZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aHVtYm5haWxGaWVsZDogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0O1xuIl19