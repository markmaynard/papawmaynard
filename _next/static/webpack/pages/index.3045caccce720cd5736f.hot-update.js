webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/modal.js":
/*!***********************************!*\
  !*** ./pages/components/modal.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleModal; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/esm/Modal/index.js");


var _jsxFileName = "C:\\Users\\cmayn\\Documents\\repos\\papawmaynard\\pages\\components\\modal.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  var top = 50;
  var left = 50;
  return {
    top: "".concat(top, "%"),
    left: "".concat(left, "%"),
    transform: "translate(-".concat(top, "%, -").concat(left, "%)")
  };
}

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    paper: {
      position: 'absolute',
      minWidth: '50%',
      maxWidth: '95%',
      height: 'auto',
      maxHeight: '95%',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      overflow: 'hidden',
      textAlign: 'center'
    }
  };
});
function SimpleModal(props) {
  _s();

  var classes = useStyles(); // getModalStyle is not a pure function, we roll the style only on the first render

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(getModalStyle),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 1),
      modalStyle = _React$useState2[0];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      open = _React$useState4[0],
      setOpen = _React$useState4[1];

  var handleOpen = function handleOpen() {
    setOpen(true);
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  var divStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "100%",
    height: "auto"
  };

  var body = __jsx("div", {
    style: modalStyle,
    className: classes.paper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, __jsx("h2", {
    id: "simple-modal-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, props.title), __jsx("p", {
    id: "simple-modal-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, props.description), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, __jsx("img", {
    style: divStyle,
    src: props.imgUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  })));

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, __jsx("button", {
    type: "button",
    onClick: handleOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, "View"), __jsx(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "simple-modal-title",
    "aria-describedby": "simple-modal-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, body));
}

_s(SimpleModal, "p+PfpQWRJSW5eCi9+wrB37XJE8A=", false, function () {
  return [useStyles];
});

_c = SimpleModal;

var _c;

$RefreshReg$(_c, "SimpleModal");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9tb2RhbC5qcyJdLCJuYW1lcyI6WyJyYW5kIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiZ2V0TW9kYWxTdHlsZSIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJwYXBlciIsInBvc2l0aW9uIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsImhlaWdodCIsIm1heEhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiYm94U2hhZG93Iiwic2hhZG93cyIsInBhZGRpbmciLCJzcGFjaW5nIiwib3ZlcmZsb3ciLCJ0ZXh0QWxpZ24iLCJTaW1wbGVNb2RhbCIsInByb3BzIiwiY2xhc3NlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJtb2RhbFN0eWxlIiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVPcGVuIiwiaGFuZGxlQ2xvc2UiLCJkaXZTdHlsZSIsImRpc3BsYXkiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJib2R5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltZ1VybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUNkLFNBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsRUFBM0IsSUFBaUMsRUFBeEM7QUFDRDs7QUFFRCxTQUFTQyxhQUFULEdBQXlCO0FBQ3ZCLE1BQU1DLEdBQUcsR0FBRyxFQUFaO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLEVBQWI7QUFFQSxTQUFPO0FBQ0xELE9BQUcsWUFBS0EsR0FBTCxNQURFO0FBRUxDLFFBQUksWUFBS0EsSUFBTCxNQUZDO0FBR0xDLGFBQVMsdUJBQWdCRixHQUFoQixpQkFBMEJDLElBQTFCO0FBSEosR0FBUDtBQUtEOztBQUVELElBQU1FLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsU0FBSyxFQUFFO0FBQ0xDLGNBQVEsRUFBRSxVQURMO0FBRUxDLGNBQVEsRUFBRSxLQUZMO0FBR0xDLGNBQVEsRUFBRSxLQUhMO0FBSUxDLFlBQU0sRUFBRSxNQUpIO0FBS0xDLGVBQVMsRUFBRSxLQUxOO0FBTUxDLHFCQUFlLEVBQUVQLEtBQUssQ0FBQ1EsT0FBTixDQUFjQyxVQUFkLENBQXlCUixLQU5yQztBQU9MUyxZQUFNLEVBQUUsZ0JBUEg7QUFRTEMsZUFBUyxFQUFFWCxLQUFLLENBQUNZLE9BQU4sQ0FBYyxDQUFkLENBUk47QUFTTEMsYUFBTyxFQUFFYixLQUFLLENBQUNjLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLENBVEo7QUFVTEMsY0FBUSxFQUFFLFFBVkw7QUFXTEMsZUFBUyxFQUFFO0FBWE47QUFEZ0MsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFnQmUsU0FBU0MsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFBQTs7QUFDekMsTUFBTUMsT0FBTyxHQUFHckIsU0FBUyxFQUF6QixDQUR5QyxDQUV6Qzs7QUFGeUMsd0JBR3BCc0IsNENBQUssQ0FBQ0MsUUFBTixDQUFlM0IsYUFBZixDQUhvQjtBQUFBO0FBQUEsTUFHbEM0QixVQUhrQzs7QUFBQSx5QkFJakJGLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBSmlCO0FBQUE7QUFBQSxNQUlsQ0UsSUFKa0M7QUFBQSxNQUk1QkMsT0FKNEI7O0FBTXpDLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkJELFdBQU8sQ0FBQyxJQUFELENBQVA7QUFDRCxHQUZEOztBQUlBLE1BQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJGLFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDRCxHQUZEOztBQUlBLE1BQUlHLFFBQVEsR0FBRztBQUNQQyxXQUFPLFNBREE7QUFFUEMsY0FBVSxRQUZIO0FBR1BDLGVBQVcsUUFISjtBQUlQMUIsWUFBUSxRQUpEO0FBS1BDLFVBQU07QUFMQyxHQUFmOztBQVFBLE1BQU0wQixJQUFJLEdBQ1I7QUFBSyxTQUFLLEVBQUVULFVBQVo7QUFBd0IsYUFBUyxFQUFFSCxPQUFPLENBQUNsQixLQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxNQUFFLEVBQUMsb0JBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE2QmlCLEtBQUssQ0FBQ2MsS0FBbkMsQ0FERixFQUVFO0FBQUcsTUFBRSxFQUFDLDBCQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2QsS0FBSyxDQUFDZSxXQURULENBRkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxTQUFLLEVBQUVOLFFBQVo7QUFBc0IsT0FBRyxFQUFFVCxLQUFLLENBQUNnQixNQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FMRixDQURGOztBQVlBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsV0FBTyxFQUFFVCxVQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFJRSxNQUFDLCtEQUFEO0FBQ0UsUUFBSSxFQUFFRixJQURSO0FBRUUsV0FBTyxFQUFFRyxXQUZYO0FBR0UsdUJBQWdCLG9CQUhsQjtBQUlFLHdCQUFpQiwwQkFKbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1HSyxJQU5ILENBSkYsQ0FERjtBQWVEOztHQWpEdUJkLFc7VUFDTm5CLFM7OztLQURNbUIsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zMDQ1Y2FjY2NlNzIwY2Q1NzM2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbCc7XHJcblxyXG5mdW5jdGlvbiByYW5kKCkge1xyXG4gIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAyMCkgLSAxMDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TW9kYWxTdHlsZSgpIHtcclxuICBjb25zdCB0b3AgPSA1MDtcclxuICBjb25zdCBsZWZ0ID0gNTA7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0b3A6IGAke3RvcH0lYCxcclxuICAgIGxlZnQ6IGAke2xlZnR9JWAsXHJcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoLSR7dG9wfSUsIC0ke2xlZnR9JSlgLFxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHBhcGVyOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIG1pbldpZHRoOiAnNTAlJyxcclxuICAgIG1heFdpZHRoOiAnOTUlJyxcclxuICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgbWF4SGVpZ2h0OiAnOTUlJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgYm9yZGVyOiAnMnB4IHNvbGlkICMwMDAnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzVdLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyLCA0LCAzKSxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW1wbGVNb2RhbChwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAvLyBnZXRNb2RhbFN0eWxlIGlzIG5vdCBhIHB1cmUgZnVuY3Rpb24sIHdlIHJvbGwgdGhlIHN0eWxlIG9ubHkgb24gdGhlIGZpcnN0IHJlbmRlclxyXG4gIGNvbnN0IFttb2RhbFN0eWxlXSA9IFJlYWN0LnVzZVN0YXRlKGdldE1vZGFsU3R5bGUpO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICB2YXIgZGl2U3R5bGUgPSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBgYmxvY2tgLFxyXG4gICAgICAgICAgbWFyZ2luTGVmdDogYGF1dG9gLFxyXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IGBhdXRvYCxcclxuICAgICAgICAgIG1heFdpZHRoOiBgMTAwJWAsXHJcbiAgICAgICAgICBoZWlnaHQ6IGBhdXRvYCxcclxuICB9O1xyXG5cclxuICBjb25zdCBib2R5ID0gKFxyXG4gICAgPGRpdiBzdHlsZT17bW9kYWxTdHlsZX0gY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgPGgyIGlkPVwic2ltcGxlLW1vZGFsLXRpdGxlXCI+e3Byb3BzLnRpdGxlfTwvaDI+XHJcbiAgICAgIDxwIGlkPVwic2ltcGxlLW1vZGFsLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAge3Byb3BzLmRlc2NyaXB0aW9ufVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIDxpbWcgc3R5bGU9e2RpdlN0eWxlfSBzcmM9e3Byb3BzLmltZ1VybH0vPlxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlT3Blbn0+XHJcbiAgICAgICAgVmlld1xyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJzaW1wbGUtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJzaW1wbGUtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAge2JvZHl9XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==