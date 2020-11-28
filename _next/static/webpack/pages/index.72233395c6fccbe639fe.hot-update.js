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
      minWidth: '70%',
      maxWidth: '95%',
      height: 'auto',
      minHeight: '70%',
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
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    minWidth: '50%',
    maxWidth: '100%',
    minHeight: '50%',
    height: "auto"
  };

  var body = __jsx("div", {
    style: modalStyle,
    className: classes.paper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, __jsx("h2", {
    id: "simple-modal-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, props.title), __jsx("p", {
    id: "simple-modal-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, props.description), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx("img", {
    style: divStyle,
    src: props.imgUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  })));

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, __jsx("button", {
    type: "button",
    onClick: handleOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
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
      lineNumber: 78,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9tb2RhbC5qcyJdLCJuYW1lcyI6WyJyYW5kIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiZ2V0TW9kYWxTdHlsZSIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJwYXBlciIsInBvc2l0aW9uIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsImhlaWdodCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiYm94U2hhZG93Iiwic2hhZG93cyIsInBhZGRpbmciLCJzcGFjaW5nIiwib3ZlcmZsb3ciLCJ0ZXh0QWxpZ24iLCJTaW1wbGVNb2RhbCIsInByb3BzIiwiY2xhc3NlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJtb2RhbFN0eWxlIiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVPcGVuIiwiaGFuZGxlQ2xvc2UiLCJkaXZTdHlsZSIsImRpc3BsYXkiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJib2R5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltZ1VybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUNkLFNBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsRUFBM0IsSUFBaUMsRUFBeEM7QUFDRDs7QUFFRCxTQUFTQyxhQUFULEdBQXlCO0FBQ3ZCLE1BQU1DLEdBQUcsR0FBRyxFQUFaO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLEVBQWI7QUFFQSxTQUFPO0FBQ0xELE9BQUcsWUFBS0EsR0FBTCxNQURFO0FBRUxDLFFBQUksWUFBS0EsSUFBTCxNQUZDO0FBR0xDLGFBQVMsdUJBQWdCRixHQUFoQixpQkFBMEJDLElBQTFCO0FB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QUNOcEIsUzs7O0tBRE1vQixXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjcyMjMzMzk1YzZmY2NiZTYzOWZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01vZGFsJztcclxuXHJcbmZ1bmN0aW9uIHJhbmQoKSB7XHJcbiAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDIwKSAtIDEwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRNb2RhbFN0eWxlKCkge1xyXG4gIGNvbnN0IHRvcCA9IDUwO1xyXG4gIGNvbnN0IGxlZnQgPSA1MDtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHRvcDogYCR7dG9wfSVgLFxyXG4gICAgbGVmdDogYCR7bGVmdH0lYCxcclxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgtJHt0b3B9JSwgLSR7bGVmdH0lKWAsXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcGFwZXI6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgbWluV2lkdGg6ICc3MCUnLFxyXG4gICAgbWF4V2lkdGg6ICc5NSUnLFxyXG4gICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICBtaW5IZWlnaHQ6ICc3MCUnLFxyXG4gICAgbWF4SGVpZ2h0OiAnOTUlJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgYm9yZGVyOiAnMnB4IHNvbGlkICMwMDAnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzVdLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyLCA0LCAzKSxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW1wbGVNb2RhbChwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAvLyBnZXRNb2RhbFN0eWxlIGlzIG5vdCBhIHB1cmUgZnVuY3Rpb24sIHdlIHJvbGwgdGhlIHN0eWxlIG9ubHkgb24gdGhlIGZpcnN0IHJlbmRlclxyXG4gIGNvbnN0IFttb2RhbFN0eWxlXSA9IFJlYWN0LnVzZVN0YXRlKGdldE1vZGFsU3R5bGUpO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICB2YXIgZGl2U3R5bGUgPSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxyXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcclxuICAgICAgICAgIG1pbldpZHRoOiAnNTAlJyxcclxuICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICBtaW5IZWlnaHQ6ICc1MCUnLFxyXG4gICAgICAgICAgaGVpZ2h0OiBgYXV0b2AsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYm9keSA9IChcclxuICAgIDxkaXYgc3R5bGU9e21vZGFsU3R5bGV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgIDxoMiBpZD1cInNpbXBsZS1tb2RhbC10aXRsZVwiPntwcm9wcy50aXRsZX08L2gyPlxyXG4gICAgICA8cCBpZD1cInNpbXBsZS1tb2RhbC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgIHtwcm9wcy5kZXNjcmlwdGlvbn1cclxuICAgICAgPC9wPlxyXG4gICAgICA8cD5cclxuICAgICAgICA8aW1nIHN0eWxlPXtkaXZTdHlsZX0gc3JjPXtwcm9wcy5pbWdVcmx9Lz5cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZU9wZW59PlxyXG4gICAgICAgIFZpZXdcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwic2ltcGxlLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwic2ltcGxlLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIHtib2R5fVxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=