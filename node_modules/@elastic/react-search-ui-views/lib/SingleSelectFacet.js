"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactSelect = _interopRequireWildcard(require("react-select"));

var _types = require("./types");

var _viewHelpers = require("./view-helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Option(props) {
  return /*#__PURE__*/_react.default.createElement(_reactSelect.components.Option, props, /*#__PURE__*/_react.default.createElement("span", {
    className: "sui-select__option-label"
  }, props.data.label), /*#__PURE__*/_react.default.createElement("span", {
    className: "sui-select__option-count"
  }, props.data.count.toLocaleString("en")));
}

Option.propTypes = {
  data: _propTypes.default.object.isRequired
};

function toSelectBoxOption(filterValue) {
  return {
    value: filterValue.value,
    label: (0, _viewHelpers.getFilterValueDisplay)(filterValue.value),
    count: filterValue.count
  };
}

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

function SingleSelectFacet(_ref) {
  var className = _ref.className,
      label = _ref.label,
      _onChange = _ref.onChange,
      options = _ref.options;
  var selectedSelectBoxOption;
  var isSelectedSelectBoxOptionSet = false;
  var selectBoxOptions = options.map(function (option) {
    var selectBoxOption = toSelectBoxOption(option); // There should never be multiple filters set for this facet because it is single select,
    // but if there is, we use the first value.

    if (option.selected && !isSelectedSelectBoxOptionSet) {
      selectedSelectBoxOption = selectBoxOption;
      isSelectedSelectBoxOptionSet = true;
    }

    return selectBoxOption;
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _viewHelpers.appendClassName)("sui-facet", className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sui-facet__title"
  }, label), /*#__PURE__*/_react.default.createElement(_reactSelect.default, {
    className: "sui-select",
    classNamePrefix: "sui-select",
    components: {
      Option: Option
    },
    value: selectedSelectBoxOption,
    onChange: function onChange(o) {
      return _onChange(o.value);
    },
    options: selectBoxOptions,
    isSearchable: false,
    styles: setDefaultStyle
  }));
}

SingleSelectFacet.propTypes = {
  label: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  options: _propTypes.default.arrayOf(_types.FacetValue).isRequired,
  className: _propTypes.default.string
};
var _default = SingleSelectFacet;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9TaW5nbGVTZWxlY3RGYWNldC5qcyJdLCJuYW1lcyI6WyJPcHRpb24iLCJwcm9wcyIsImRhdGEiLCJsYWJlbCIsImNvdW50IiwidG9Mb2NhbGVTdHJpbmciLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwidG9TZWxlY3RCb3hPcHRpb24iLCJmaWx0ZXJWYWx1ZSIsInZhbHVlIiwic2V0RGVmYXVsdFN0eWxlIiwib3B0aW9uIiwiY29udHJvbCIsImRyb3Bkb3duSW5kaWNhdG9yIiwiaW5kaWNhdG9yU2VwYXJhdG9yIiwiU2luZ2xlU2VsZWN0RmFjZXQiLCJjbGFzc05hbWUiLCJvbkNoYW5nZSIsIm9wdGlvbnMiLCJzZWxlY3RlZFNlbGVjdEJveE9wdGlvbiIsImlzU2VsZWN0ZWRTZWxlY3RCb3hPcHRpb25TZXQiLCJzZWxlY3RCb3hPcHRpb25zIiwibWFwIiwic2VsZWN0Qm94T3B0aW9uIiwic2VsZWN0ZWQiLCJvIiwic3RyaW5nIiwiZnVuYyIsImFycmF5T2YiLCJGYWNldFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7QUFHQSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUNyQixzQkFDRSw2QkFBQyx1QkFBRCxDQUFZLE1BQVosRUFBdUJBLEtBQXZCLGVBQ0U7QUFBTSxJQUFBLFNBQVMsRUFBQztBQUFoQixLQUE0Q0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEtBQXZELENBREYsZUFFRTtBQUFNLElBQUEsU0FBUyxFQUFDO0FBQWhCLEtBQ0dGLEtBQUssQ0FBQ0MsSUFBTixDQUFXRSxLQUFYLENBQWlCQyxjQUFqQixDQUFnQyxJQUFoQyxDQURILENBRkYsQ0FERjtBQVFEOztBQUVETCxNQUFNLENBQUNNLFNBQVAsR0FBbUI7QUFDakJKLEVBQUFBLElBQUksRUFBRUssbUJBQVVDLE1BQVYsQ0FBaUJDO0FBRE4sQ0FBbkI7O0FBSUEsU0FBU0MsaUJBQVQsQ0FBMkJDLFdBQTNCLEVBQXdDO0FBQ3RDLFNBQU87QUFDTEMsSUFBQUEsS0FBSyxFQUFFRCxXQUFXLENBQUNDLEtBRGQ7QUFFTFQsSUFBQUEsS0FBSyxFQUFFLHdDQUFzQlEsV0FBVyxDQUFDQyxLQUFsQyxDQUZGO0FBR0xSLElBQUFBLEtBQUssRUFBRU8sV0FBVyxDQUFDUDtBQUhkLEdBQVA7QUFLRDs7QUFFRCxJQUFNUyxlQUFlLEdBQUc7QUFDdEJDLEVBQUFBLE1BQU0sRUFBRTtBQUFBLFdBQU8sRUFBUDtBQUFBLEdBRGM7QUFFdEJDLEVBQUFBLE9BQU8sRUFBRTtBQUFBLFdBQU8sRUFBUDtBQUFBLEdBRmE7QUFHdEJDLEVBQUFBLGlCQUFpQixFQUFFO0FBQUEsV0FBTyxFQUFQO0FBQUEsR0FIRztBQUl0QkMsRUFBQUEsa0JBQWtCLEVBQUU7QUFBQSxXQUFPLEVBQVA7QUFBQTtBQUpFLENBQXhCOztBQU9BLFNBQVNDLGlCQUFULE9BQW9FO0FBQUEsTUFBdkNDLFNBQXVDLFFBQXZDQSxTQUF1QztBQUFBLE1BQTVCaEIsS0FBNEIsUUFBNUJBLEtBQTRCO0FBQUEsTUFBckJpQixTQUFxQixRQUFyQkEsUUFBcUI7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7QUFDbEUsTUFBSUMsdUJBQUo7QUFDQSxNQUFJQyw0QkFBNEIsR0FBRyxLQUFuQztBQUVBLE1BQU1DLGdCQUFnQixHQUFHSCxPQUFPLENBQUNJLEdBQVIsQ0FBWSxVQUFBWCxNQUFNLEVBQUk7QUFDN0MsUUFBTVksZUFBZSxHQUFHaEIsaUJBQWlCLENBQUNJLE1BQUQsQ0FBekMsQ0FENkMsQ0FFN0M7QUFDQTs7QUFDQSxRQUFJQSxNQUFNLENBQUNhLFFBQVAsSUFBbUIsQ0FBQ0osNEJBQXhCLEVBQXNEO0FBQ3BERCxNQUFBQSx1QkFBdUIsR0FBR0ksZUFBMUI7QUFDQUgsTUFBQUEsNEJBQTRCLEdBQUcsSUFBL0I7QUFDRDs7QUFDRCxXQUFPRyxlQUFQO0FBQ0QsR0FUd0IsQ0FBekI7QUFXQSxzQkFDRTtBQUFLLElBQUEsU0FBUyxFQUFFLGtDQUFnQixXQUFoQixFQUE2QlAsU0FBN0I7QUFBaEIsa0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQW1DaEIsS0FBbkMsQ0FERixlQUVFLDZCQUFDLG9CQUFEO0FBQ0UsSUFBQSxTQUFTLEVBQUMsWUFEWjtBQUVFLElBQUEsZUFBZSxFQUFDLFlBRmxCO0FBR0UsSUFBQSxVQUFVLEVBQUU7QUFBRUgsTUFBQUEsTUFBTSxFQUFOQTtBQUFGLEtBSGQ7QUFJRSxJQUFBLEtBQUssRUFBRXNCLHVCQUpUO0FBS0UsSUFBQSxRQUFRLEVBQUUsa0JBQUFNLENBQUM7QUFBQSxhQUFJUixTQUFRLENBQUNRLENBQUMsQ0FBQ2hCLEtBQUgsQ0FBWjtBQUFBLEtBTGI7QUFNRSxJQUFBLE9BQU8sRUFBRVksZ0JBTlg7QUFPRSxJQUFBLFlBQVksRUFBRSxLQVBoQjtBQVFFLElBQUEsTUFBTSxFQUFFWDtBQVJWLElBRkYsQ0FERjtBQWVEOztBQUVESyxpQkFBaUIsQ0FBQ1osU0FBbEIsR0FBOEI7QUFDNUJILEVBQUFBLEtBQUssRUFBRUksbUJBQVVzQixNQUFWLENBQWlCcEIsVUFESTtBQUU1QlcsRUFBQUEsUUFBUSxFQUFFYixtQkFBVXVCLElBQVYsQ0FBZXJCLFVBRkc7QUFHNUJZLEVBQUFBLE9BQU8sRUFBRWQsbUJBQVV3QixPQUFWLENBQWtCQyxpQkFBbEIsRUFBOEJ2QixVQUhYO0FBSTVCVSxFQUFBQSxTQUFTLEVBQUVaLG1CQUFVc0I7QUFKTyxDQUE5QjtlQU9lWCxpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZWxlY3QsIHsgY29tcG9uZW50cyB9IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcblxuaW1wb3J0IHsgRmFjZXRWYWx1ZSB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBnZXRGaWx0ZXJWYWx1ZURpc3BsYXkgfSBmcm9tIFwiLi92aWV3LWhlbHBlcnNcIjtcbmltcG9ydCB7IGFwcGVuZENsYXNzTmFtZSB9IGZyb20gXCIuL3ZpZXctaGVscGVyc1wiO1xuXG5mdW5jdGlvbiBPcHRpb24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8Y29tcG9uZW50cy5PcHRpb24gey4uLnByb3BzfT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1aS1zZWxlY3RfX29wdGlvbi1sYWJlbFwiPntwcm9wcy5kYXRhLmxhYmVsfTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1aS1zZWxlY3RfX29wdGlvbi1jb3VudFwiPlxuICAgICAgICB7cHJvcHMuZGF0YS5jb3VudC50b0xvY2FsZVN0cmluZyhcImVuXCIpfVxuICAgICAgPC9zcGFuPlxuICAgIDwvY29tcG9uZW50cy5PcHRpb24+XG4gICk7XG59XG5cbk9wdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGRhdGE6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuZnVuY3Rpb24gdG9TZWxlY3RCb3hPcHRpb24oZmlsdGVyVmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICB2YWx1ZTogZmlsdGVyVmFsdWUudmFsdWUsXG4gICAgbGFiZWw6IGdldEZpbHRlclZhbHVlRGlzcGxheShmaWx0ZXJWYWx1ZS52YWx1ZSksXG4gICAgY291bnQ6IGZpbHRlclZhbHVlLmNvdW50XG4gIH07XG59XG5cbmNvbnN0IHNldERlZmF1bHRTdHlsZSA9IHtcbiAgb3B0aW9uOiAoKSA9PiAoe30pLFxuICBjb250cm9sOiAoKSA9PiAoe30pLFxuICBkcm9wZG93bkluZGljYXRvcjogKCkgPT4gKHt9KSxcbiAgaW5kaWNhdG9yU2VwYXJhdG9yOiAoKSA9PiAoe30pXG59O1xuXG5mdW5jdGlvbiBTaW5nbGVTZWxlY3RGYWNldCh7IGNsYXNzTmFtZSwgbGFiZWwsIG9uQ2hhbmdlLCBvcHRpb25zIH0pIHtcbiAgbGV0IHNlbGVjdGVkU2VsZWN0Qm94T3B0aW9uO1xuICBsZXQgaXNTZWxlY3RlZFNlbGVjdEJveE9wdGlvblNldCA9IGZhbHNlO1xuXG4gIGNvbnN0IHNlbGVjdEJveE9wdGlvbnMgPSBvcHRpb25zLm1hcChvcHRpb24gPT4ge1xuICAgIGNvbnN0IHNlbGVjdEJveE9wdGlvbiA9IHRvU2VsZWN0Qm94T3B0aW9uKG9wdGlvbik7XG4gICAgLy8gVGhlcmUgc2hvdWxkIG5ldmVyIGJlIG11bHRpcGxlIGZpbHRlcnMgc2V0IGZvciB0aGlzIGZhY2V0IGJlY2F1c2UgaXQgaXMgc2luZ2xlIHNlbGVjdCxcbiAgICAvLyBidXQgaWYgdGhlcmUgaXMsIHdlIHVzZSB0aGUgZmlyc3QgdmFsdWUuXG4gICAgaWYgKG9wdGlvbi5zZWxlY3RlZCAmJiAhaXNTZWxlY3RlZFNlbGVjdEJveE9wdGlvblNldCkge1xuICAgICAgc2VsZWN0ZWRTZWxlY3RCb3hPcHRpb24gPSBzZWxlY3RCb3hPcHRpb247XG4gICAgICBpc1NlbGVjdGVkU2VsZWN0Qm94T3B0aW9uU2V0ID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdEJveE9wdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YXBwZW5kQ2xhc3NOYW1lKFwic3VpLWZhY2V0XCIsIGNsYXNzTmFtZSl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWktZmFjZXRfX3RpdGxlXCI+e2xhYmVsfTwvZGl2PlxuICAgICAgPFNlbGVjdFxuICAgICAgICBjbGFzc05hbWU9XCJzdWktc2VsZWN0XCJcbiAgICAgICAgY2xhc3NOYW1lUHJlZml4PVwic3VpLXNlbGVjdFwiXG4gICAgICAgIGNvbXBvbmVudHM9e3sgT3B0aW9uIH19XG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZFNlbGVjdEJveE9wdGlvbn1cbiAgICAgICAgb25DaGFuZ2U9e28gPT4gb25DaGFuZ2Uoby52YWx1ZSl9XG4gICAgICAgIG9wdGlvbnM9e3NlbGVjdEJveE9wdGlvbnN9XG4gICAgICAgIGlzU2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgIHN0eWxlcz17c2V0RGVmYXVsdFN0eWxlfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuU2luZ2xlU2VsZWN0RmFjZXQucHJvcFR5cGVzID0ge1xuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoRmFjZXRWYWx1ZSkuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVTZWxlY3RGYWNldDtcbiJdfQ==