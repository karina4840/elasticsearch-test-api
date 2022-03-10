import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["className", "result", "onClickLink", "titleField", "urlField", "thumbnailField"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import PropTypes from "prop-types";
import React from "react";
import { appendClassName, getUrlSanitizer } from "./view-helpers";
import { isFieldValueWrapper } from "./types/FieldValueWrapper";

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
    if (!isFieldValueWrapper(result[field])) return acc;
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, field, getEscapedField(result, field)));
  }, {});
}

function Result(_ref) {
  var className = _ref.className,
      result = _ref.result,
      onClickLink = _ref.onClickLink,
      titleField = _ref.titleField,
      urlField = _ref.urlField,
      thumbnailField = _ref.thumbnailField,
      rest = _objectWithoutProperties(_ref, _excluded);

  var fields = getEscapedFields(result);
  var title = getEscapedField(result, titleField);
  var url = getUrlSanitizer(URL, location)(getRaw(result, urlField));
  var thumbnail = getUrlSanitizer(URL, location)(getRaw(result, thumbnailField));
  return /*#__PURE__*/React.createElement("li", _extends({
    className: appendClassName("sui-result", className)
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "sui-result__header"
  }, title && !url && /*#__PURE__*/React.createElement("span", {
    className: "sui-result__title",
    dangerouslySetInnerHTML: {
      __html: title
    }
  }), title && url && /*#__PURE__*/React.createElement("a", {
    className: "sui-result__title sui-result__title-link",
    dangerouslySetInnerHTML: {
      __html: title
    },
    href: url,
    onClick: onClickLink,
    target: "_blank",
    rel: "noopener noreferrer"
  })), /*#__PURE__*/React.createElement("div", {
    className: "sui-result__body"
  }, thumbnail && /*#__PURE__*/React.createElement("div", {
    className: "sui-result__image"
  }, /*#__PURE__*/React.createElement("img", {
    src: thumbnail,
    alt: ""
  })), /*#__PURE__*/React.createElement("ul", {
    className: "sui-result__details"
  }, Object.entries(fields).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        fieldName = _ref3[0],
        fieldValue = _ref3[1];

    return /*#__PURE__*/React.createElement("li", {
      key: fieldName
    }, /*#__PURE__*/React.createElement("span", {
      className: "sui-result__key"
    }, fieldName), " ", /*#__PURE__*/React.createElement("span", {
      className: "sui-result__value",
      dangerouslySetInnerHTML: {
        __html: fieldValue
      }
    }));
  }))));
}

Result.propTypes = {
  result: PropTypes.object.isRequired,
  onClickLink: PropTypes.func.isRequired,
  className: PropTypes.string,
  titleField: PropTypes.string,
  urlField: PropTypes.string,
  thumbnailField: PropTypes.string
};
export default Result;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SZXN1bHQuanMiXSwibmFtZXMiOlsiUHJvcFR5cGVzIiwiUmVhY3QiLCJhcHBlbmRDbGFzc05hbWUiLCJnZXRVcmxTYW5pdGl6ZXIiLCJpc0ZpZWxkVmFsdWVXcmFwcGVyIiwiZ2V0RmllbGRUeXBlIiwicmVzdWx0IiwiZmllbGQiLCJ0eXBlIiwiZ2V0UmF3IiwiZ2V0U25pcHBldCIsImh0bWxFc2NhcGUiLCJzdHIiLCJTdHJpbmciLCJyZXBsYWNlIiwiZ2V0RXNjYXBlZEZpZWxkIiwic2FmZUZpZWxkIiwiQXJyYXkiLCJpc0FycmF5Iiwiam9pbiIsImdldEVzY2FwZWRGaWVsZHMiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwiYWNjIiwiUmVzdWx0IiwiY2xhc3NOYW1lIiwib25DbGlja0xpbmsiLCJ0aXRsZUZpZWxkIiwidXJsRmllbGQiLCJ0aHVtYm5haWxGaWVsZCIsInJlc3QiLCJmaWVsZHMiLCJ0aXRsZSIsInVybCIsIlVSTCIsImxvY2F0aW9uIiwidGh1bWJuYWlsIiwiX19odG1sIiwiZW50cmllcyIsIm1hcCIsImZpZWxkTmFtZSIsImZpZWxkVmFsdWUiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU9BLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLE9BQWxCO0FBRUEsU0FBU0MsZUFBVCxFQUEwQkMsZUFBMUIsUUFBaUQsZ0JBQWpEO0FBQ0EsU0FBU0MsbUJBQVQsUUFBb0MsMkJBQXBDOztBQUVBLFNBQVNDLFlBQVQsQ0FBc0JDLE1BQXRCLEVBQThCQyxLQUE5QixFQUFxQ0MsSUFBckMsRUFBMkM7QUFDekMsTUFBSUYsTUFBTSxDQUFDQyxLQUFELENBQVYsRUFBbUIsT0FBT0QsTUFBTSxDQUFDQyxLQUFELENBQU4sQ0FBY0MsSUFBZCxDQUFQO0FBQ3BCOztBQUVELFNBQVNDLE1BQVQsQ0FBZ0JILE1BQWhC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QVMsQ0FBQytDLE1BSEo7QUFJakJuQixFQUFBQSxVQUFVLEVBQUU1QixTQUFTLENBQUMrQyxNQUpMO0FBS2pCbEIsRUFBQUEsUUFBUSxFQUFFN0IsU0FBUyxDQUFDK0MsTUFMSDtBQU1qQmpCLEVBQUFBLGNBQWMsRUFBRTlCLFNBQVMsQ0FBQytDO0FBTlQsQ0FBbkI7QUFTQSxlQUFldEIsTUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgYXBwZW5kQ2xhc3NOYW1lLCBnZXRVcmxTYW5pdGl6ZXIgfSBmcm9tIFwiLi92aWV3LWhlbHBlcnNcIjtcbmltcG9ydCB7IGlzRmllbGRWYWx1ZVdyYXBwZXIgfSBmcm9tIFwiLi90eXBlcy9GaWVsZFZhbHVlV3JhcHBlclwiO1xuXG5mdW5jdGlvbiBnZXRGaWVsZFR5cGUocmVzdWx0LCBmaWVsZCwgdHlwZSkge1xuICBpZiAocmVzdWx0W2ZpZWxkXSkgcmV0dXJuIHJlc3VsdFtmaWVsZF1bdHlwZV07XG59XG5cbmZ1bmN0aW9uIGdldFJhdyhyZXN1bHQsIGZpZWxkKSB7XG4gIHJldHVybiBnZXRGaWVsZFR5cGUocmVzdWx0LCBmaWVsZCwgXCJyYXdcIik7XG59XG5cbmZ1bmN0aW9uIGdldFNuaXBwZXQocmVzdWx0LCBmaWVsZCkge1xuICByZXR1cm4gZ2V0RmllbGRUeXBlKHJlc3VsdCwgZmllbGQsIFwic25pcHBldFwiKTtcbn1cblxuZnVuY3Rpb24gaHRtbEVzY2FwZShzdHIpIHtcbiAgaWYgKCFzdHIpIHJldHVybiBcIlwiO1xuXG4gIHJldHVybiBTdHJpbmcoc3RyKVxuICAgIC5yZXBsYWNlKC8mL2csIFwiJmFtcDtcIilcbiAgICAucmVwbGFjZSgvXCIvZywgXCImcXVvdDtcIilcbiAgICAucmVwbGFjZSgvJy9nLCBcIiYjMzk7XCIpXG4gICAgLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpXG4gICAgLnJlcGxhY2UoLz4vZywgXCImZ3Q7XCIpO1xufVxuXG5mdW5jdGlvbiBnZXRFc2NhcGVkRmllbGQocmVzdWx0LCBmaWVsZCkge1xuICAvLyBGYWxsYmFjayB0byByYXcgdmFsdWVzIGhlcmUsIGJlY2F1c2Ugbm9uLXN0cmluZyBmaWVsZHNcbiAgLy8gd2lsbCBub3QgaGF2ZSBhIHNuaXBwZXQgZmFsbGJhY2suIFJhdyB2YWx1ZXMgTVVTVCBiZSBodG1sIGVzY2FwZWQuXG4gIGNvbnN0IHNhZmVGaWVsZCA9XG4gICAgZ2V0U25pcHBldChyZXN1bHQsIGZpZWxkKSB8fCBodG1sRXNjYXBlKGdldFJhdyhyZXN1bHQsIGZpZWxkKSk7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHNhZmVGaWVsZCkgPyBzYWZlRmllbGQuam9pbihcIiwgXCIpIDogc2FmZUZpZWxkO1xufVxuXG5mdW5jdGlvbiBnZXRFc2NhcGVkRmllbGRzKHJlc3VsdCkge1xuICByZXR1cm4gT2JqZWN0LmtleXMocmVzdWx0KS5yZWR1Y2UoKGFjYywgZmllbGQpID0+IHtcbiAgICAvLyBJZiB3ZSByZWNlaXZlIGFuIGFyYml0cmFyeSB2YWx1ZSBmcm9tIHRoZSByZXNwb25zZSwgd2UgbWF5IG5vdCBwcm9wZXJseVxuICAgIC8vIGhhbmRsZSBpdCwgc28gd2Ugc2hvdWxkIGZpbHRlciBvdXQgYXJiaXRyYXJ5IHZhbHVlcyBoZXJlLlxuICAgIC8vXG4gICAgLy8gSS5lLixcbiAgICAvLyBBcmJpdHJhcnkgdmFsdWU6IFwiX21ldGFGaWVsZDogJzE5MzkxOTEnXCJcbiAgICAvLyB2cy5cbiAgICAvLyBGaWVsZFZhbHVlV3JhcHBlcjogXCJfbWV0YUZpZWxkOiB7cmF3OiAnMTkzOTE5MSd9XCJcbiAgICBpZiAoIWlzRmllbGRWYWx1ZVdyYXBwZXIocmVzdWx0W2ZpZWxkXSkpIHJldHVybiBhY2M7XG4gICAgcmV0dXJuIHsgLi4uYWNjLCBbZmllbGRdOiBnZXRFc2NhcGVkRmllbGQocmVzdWx0LCBmaWVsZCkgfTtcbiAgfSwge30pO1xufVxuXG5mdW5jdGlvbiBSZXN1bHQoe1xuICBjbGFzc05hbWUsXG4gIHJlc3VsdCxcbiAgb25DbGlja0xpbmssXG4gIHRpdGxlRmllbGQsXG4gIHVybEZpZWxkLFxuICB0aHVtYm5haWxGaWVsZCxcbiAgLi4ucmVzdFxufSkge1xuICBjb25zdCBmaWVsZHMgPSBnZXRFc2NhcGVkRmllbGRzKHJlc3VsdCk7XG4gIGNvbnN0IHRpdGxlID0gZ2V0RXNjYXBlZEZpZWxkKHJlc3VsdCwgdGl0bGVGaWVsZCk7XG4gIGNvbnN0IHVybCA9IGdldFVybFNhbml0aXplcihVUkwsIGxvY2F0aW9uKShnZXRSYXcocmVzdWx0LCB1cmxGaWVsZCkpO1xuICBjb25zdCB0aHVtYm5haWwgPSBnZXRVcmxTYW5pdGl6ZXIoVVJMLCBsb2NhdGlvbikoXG4gICAgZ2V0UmF3KHJlc3VsdCwgdGh1bWJuYWlsRmllbGQpXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPXthcHBlbmRDbGFzc05hbWUoXCJzdWktcmVzdWx0XCIsIGNsYXNzTmFtZSl9IHsuLi5yZXN0fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VpLXJlc3VsdF9faGVhZGVyXCI+XG4gICAgICAgIHt0aXRsZSAmJiAhdXJsICYmIChcbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic3VpLXJlc3VsdF9fdGl0bGVcIlxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0aXRsZSB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHt0aXRsZSAmJiB1cmwgJiYgKFxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzdWktcmVzdWx0X190aXRsZSBzdWktcmVzdWx0X190aXRsZS1saW5rXCJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGl0bGUgfX1cbiAgICAgICAgICAgIGhyZWY9e3VybH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tMaW5rfVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWktcmVzdWx0X19ib2R5XCI+XG4gICAgICAgIHt0aHVtYm5haWwgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VpLXJlc3VsdF9faW1hZ2VcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXt0aHVtYm5haWx9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWktcmVzdWx0X19kZXRhaWxzXCI+XG4gICAgICAgICAge09iamVjdC5lbnRyaWVzKGZpZWxkcykubWFwKChbZmllbGROYW1lLCBmaWVsZFZhbHVlXSkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17ZmllbGROYW1lfT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3VpLXJlc3VsdF9fa2V5XCI+e2ZpZWxkTmFtZX08L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN1aS1yZXN1bHRfX3ZhbHVlXCJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGZpZWxkVmFsdWUgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2xpPlxuICApO1xufVxuXG5SZXN1bHQucHJvcFR5cGVzID0ge1xuICByZXN1bHQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgb25DbGlja0xpbms6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGl0bGVGaWVsZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgdXJsRmllbGQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRodW1ibmFpbEZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHQ7XG4iXX0=