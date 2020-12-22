webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Album; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/PhotoCamera */ "./node_modules/@material-ui/icons/PhotoCamera.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/modal */ "./pages/components/modal.js");
var _jsxFileName = "C:\\Users\\cmayn\\Documents\\repos\\papawmaynard\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

















function Copyright() {
  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "body2",
    color: "textSecondary",
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, 'Copyright © ', __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_14__["default"], {
    color: "inherit",
    href: "https://material-ui.com/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, "papawmaynard.com"), ' ', new Date().getFullYear(), '.');
}

_c = Copyright;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["makeStyles"])(function (theme) {
  return {
    icon: {
      marginRight: theme.spacing(2)
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6)
    },
    heroButtons: {
      marginTop: theme.spacing(4)
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8)
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    cardMedia: {
      paddingTop: '56.25%' // 16:9

    },
    cardContent: {
      flexGrow: 1
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6)
    }
  };
});
var cards = [{
  title: 'Arnold Maynard Sr.',
  description: 'Sitting on the side rail.',
  imgUrl: "/assets/img/papaw_sitting_on_car.png"
}, {
  title: 'Can I count on your vote?',
  description: 'Arnold Maynard running for mayor',
  imgUrl: "/assets/img/arnold_for_mayor.png"
}, {
  title: 'Father and Son',
  description: 'Joe Pap and Arnold Senior',
  imgUrl: "/assets/img/father_and_son.jpg"
}, {
  title: 'On the radio',
  description: 'Trying to get out the vote',
  imgUrl: "/assets/img/on_the_radio.jpg"
}, {
  title: 'Winter Time',
  description: 'Looking cool.',
  imgUrl: "/assets/img/winter_time.jpg"
}, {
  title: 'Young Guy',
  description: 'Ready for my photo',
  imgUrl: "/assets/img/young.jpg",
  customXOffset: 50
}, {
  title: 'Sitting on the hill',
  description: 'Hurry up, my pants are getting dirty!',
  imgUrl: "/assets/img/sitting.jpg"
}, {
  title: 'Happy Birthday Arnold!',
  description: 'Father and son',
  imgUrl: "/assets/img/Arnold_and_Arnold.jpg"
}, {
  title: 'Arnold and Carl',
  description: 'Arnold sitting with Carl Dove',
  imgUrl: "/assets/img/Arnold_and_Carl.jpg"
}, {
  title: 'The Reverend',
  description: 'Reverend Arnold Maynard',
  imgUrl: "/assets/img/rev_maynard.png"
}];
function Album() {
  _s();

  var _this = this;

  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  }), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.heroContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_13__["default"], {
    maxWidth: "sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    component: "h1",
    variant: "h2",
    align: "center",
    color: "textPrimary",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, "Papaw Maynard"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h5",
    align: "center",
    color: "textSecondary",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, "I made this site for my fathers birthday, the heart of this website is a recording of his two sons playing with his father(my papaw). Please listen."), __jsx("div", {
    className: classes.heroButtons,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    container: true,
    spacing: 2,
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }, __jsx("audio", {
    src: "/assets/audio/papaw-full-clean2.mp3",
    controls: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 19
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    container: true,
    spacing: 2,
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "/assets/ppt/slides.zip",
    download: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 19
    }
  }, "Slides")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "/assets/audio/papaw-full-clean2.mp3",
    download: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 19
    }
  }, "MP3")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "/assets/img/photos.zip",
    download: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 19
    }
  }, "Photos")))))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: classes.cardGrid,
    maxWidth: "md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    container: true,
    spacing: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 11
    }
  }, cards.map(function (card) {
    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
      item: true,
      key: card,
      xs: 12,
      sm: 6,
      md: 4,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.card,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: classes.cardMedia,
      image: card.imgUrl,
      title: "Image title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 19
      }
    }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: classes.cardContent,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 19
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
      gutterBottom: true,
      variant: "h5",
      component: "h2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 21
      }
    }, card.title), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 21
      }
    }, card.description)), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 19
      }
    }, __jsx(_components_modal__WEBPACK_IMPORTED_MODULE_15__["default"], {
      imgUrl: card.imgUrl,
      title: card.title,
      description: card.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 23
      }
    }))));
  })))), __jsx("footer", {
    className: classes.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h6",
    align: "center",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  }, "Papaw Maynard"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "subtitle1",
    align: "center",
    color: "textSecondary",
    component: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 9
    }
  }, "Thanks to Jane, Joann, and Kristina for their help making this site possible."), __jsx(Copyright, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 9
    }
  })));
}

_s(Album, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c2 = Album;

var _c, _c2;

$RefreshReg$(_c, "Copyright");
$RefreshReg$(_c2, "Album");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQ29weXJpZ2h0IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiaWNvbiIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsImhlcm9Db250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsInBhZGRpbmciLCJoZXJvQnV0dG9ucyIsIm1hcmdpblRvcCIsImNhcmRHcmlkIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJjYXJkIiwiaGVpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJjYXJkTWVkaWEiLCJjYXJkQ29udGVudCIsImZsZXhHcm93IiwiZm9vdGVyIiwiY2FyZHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1nVXJsIiwiY3VzdG9tWE9mZnNldCIsIkFsYnVtIiwiY2xhc3NlcyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLFNBQVQsR0FBcUI7QUFDbkIsU0FDRSxNQUFDLHFFQUFEO0FBQVksV0FBTyxFQUFDLE9BQXBCO0FBQTRCLFNBQUssRUFBQyxlQUFsQztBQUFrRCxTQUFLLEVBQUMsUUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLGNBREgsRUFFRSxNQUFDLCtEQUFEO0FBQU0sU0FBSyxFQUFDLFNBQVo7QUFBc0IsUUFBSSxFQUFDLDBCQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZGLEVBSVUsR0FKVixFQUtHLElBQUlDLElBQUosR0FBV0MsV0FBWCxFQUxILEVBTUcs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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFFQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQXlCLFNBQUssRUFBQyxRQUEvQjtBQUF3QyxnQkFBWSxNQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBSUUsTUFBQyxxRUFBRDtBQUFZLFdBQU8sRUFBQyxXQUFwQjtBQUFnQyxTQUFLLEVBQUMsUUFBdEM7QUFBK0MsU0FBSyxFQUFDLGVBQXJEO0FBQXFFLGFBQVMsRUFBQyxHQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFGQUpGLEVBT0UsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQTlERixDQURGO0FBMkVEOztHQTlFdUJNLEs7VUFDTjlCLFM7OztNQURNOEIsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40ODRkZTgyZDY1MDI3ZjNkODYzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBDYW1lcmFJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QaG90b0NhbWVyYSc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnMnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSc7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5pbXBvcnQgU2ltcGxlTW9kYWwgZnJvbSAnLi9jb21wb25lbnRzL21vZGFsJ1xyXG5cclxuXHJcbmZ1bmN0aW9uIENvcHlyaWdodCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgeydDb3B5cmlnaHQgwqkgJ31cclxuICAgICAgPExpbmsgY29sb3I9XCJpbmhlcml0XCIgaHJlZj1cImh0dHBzOi8vbWF0ZXJpYWwtdWkuY29tL1wiPlxyXG4gICAgICAgIHBhcGF3bWF5bmFyZC5jb21cclxuICAgICAgPC9MaW5rPnsnICd9XHJcbiAgICAgIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XHJcbiAgICAgIHsnLid9XHJcbiAgICA8L1R5cG9ncmFwaHk+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgaWNvbjoge1xyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxuICBoZXJvQ29udGVudDoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDgsIDAsIDYpLFxyXG4gIH0sXHJcbiAgaGVyb0J1dHRvbnM6IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg0KSxcclxuICB9LFxyXG4gIGNhcmRHcmlkOiB7XHJcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDgpLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZyg4KSxcclxuICB9LFxyXG4gIGNhcmQ6IHtcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgfSxcclxuICBjYXJkTWVkaWE6IHtcclxuICAgIHBhZGRpbmdUb3A6ICc1Ni4yNSUnLCAvLyAxNjo5XHJcbiAgfSxcclxuICBjYXJkQ29udGVudDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxuICBmb290ZXI6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg2KSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBjYXJkcyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0Fybm9sZCBNYXluYXJkIFNyLicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdTaXR0aW5nIG9uIHRoZSBzaWRlIHJhaWwuJyxcclxuICAgICAgICBpbWdVcmw6IFwiL2Fzc2V0cy9pbWcvcGFwYXdfc2l0dGluZ19vbl9jYXIucG5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdDYW4gSSBjb3VudCBvbiB5b3VyIHZvdGU/JyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0Fybm9sZCBNYXluYXJkIHJ1bm5pbmcgZm9yIG1heW9yJyxcclxuICAgICAgICBpbWdVcmw6IFwiL2Fzc2V0cy9pbWcvYXJub2xkX2Zvcl9tYXlvci5wbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0ZhdGhlciBhbmQgU29uJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0pvZSBQYXAgYW5kIEFybm9sZCBTZW5pb3InLFxyXG4gICAgICAgIGltZ1VybDogXCIvYXNzZXRzL2ltZy9mYXRoZXJfYW5kX3Nvbi5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ09uIHRoZSByYWRpbycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdUcnlpbmcgdG8gZ2V0IG91dCB0aGUgdm90ZScsXHJcbiAgICAgICAgaW1nVXJsOiBcIi9hc3NldHMvaW1nL29uX3RoZV9yYWRpby5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1dpbnRlciBUaW1lJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvb2tpbmcgY29vbC4nLFxyXG4gICAgICAgIGltZ1VybDogXCIvYXNzZXRzL2ltZy93aW50ZXJfdGltZS5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdZb3VuZyBHdXknLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ1JlYWR5IGZvciBteSBwaG90bycsXHJcbiAgICAgIGltZ1VybDogXCIvYXNzZXRzL2ltZy95b3VuZy5qcGdcIixcclxuICAgICAgY3VzdG9tWE9mZnNldDogNTBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnU2l0dGluZyBvbiB0aGUgaGlsbCcsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnSHVycnkgdXAsIG15IHBhbnRzIGFyZSBnZXR0aW5nIGRpcnR5IScsXHJcbiAgICAgIGltZ1VybDogXCIvYXNzZXRzL2ltZy9zaXR0aW5nLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ0hhcHB5IEJpcnRoZGF5IEFybm9sZCEnLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZhdGhlciBhbmQgc29uJyxcclxuICAgICAgaW1nVXJsOiBcIi9hc3NldHMvaW1nL0Fybm9sZF9hbmRfQXJub2xkLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ0Fybm9sZCBhbmQgQ2FybCcsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXJub2xkIHNpdHRpbmcgd2l0aCBDYXJsIERvdmUnLFxyXG4gICAgICBpbWdVcmw6IFwiL2Fzc2V0cy9pbWcvQXJub2xkX2FuZF9DYXJsLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ1RoZSBSZXZlcmVuZCcsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnUmV2ZXJlbmQgQXJub2xkIE1heW5hcmQnLFxyXG4gICAgICBpbWdVcmw6IFwiL2Fzc2V0cy9pbWcvcmV2X21heW5hcmQucG5nXCJcclxuICAgIH0sXHJcbiAgICBdO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxidW0oKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgey8qIEhlcm8gdW5pdCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZXJvQ29udGVudH0+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwic21cIj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDJcIiBhbGlnbj1cImNlbnRlclwiIGNvbG9yPVwidGV4dFByaW1hcnlcIiBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgICAgICAgUGFwYXcgTWF5bmFyZFxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGFsaWduPVwiY2VudGVyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgcGFyYWdyYXBoPlxyXG4gICAgICAgICAgICAgIEkgbWFkZSB0aGlzIHNpdGUgZm9yIG15IGZhdGhlcnMgYmlydGhkYXksIHRoZSBoZWFydCBvZiB0aGlzIHdlYnNpdGUgaXMgYSByZWNvcmRpbmcgb2YgaGlzIHR3byBzb25zIHBsYXlpbmcgd2l0aCBoaXMgZmF0aGVyKG15IHBhcGF3KS4gUGxlYXNlIGxpc3Rlbi5cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZXJvQnV0dG9uc30+XHJcbiAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxhdWRpbyBzcmM9XCIvYXNzZXRzL2F1ZGlvL3BhcGF3LWZ1bGwtY2xlYW4yLm1wM1wiIGNvbnRyb2xzLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvYXNzZXRzL3BwdC9zbGlkZXMuemlwXCIgZG93bmxvYWQ+U2xpZGVzPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9hc3NldHMvYXVkaW8vcGFwYXctZnVsbC1jbGVhbjIubXAzXCIgZG93bmxvYWQ+TVAzPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9hc3NldHMvaW1nL3Bob3Rvcy56aXBcIiBkb3dubG9hZD5QaG90b3M8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRHcmlkfSBtYXhXaWR0aD1cIm1kXCI+XHJcbiAgICAgICAgICB7LyogRW5kIGhlcm8gdW5pdCAqL31cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fT5cclxuICAgICAgICAgICAge2NhcmRzLm1hcCgoY2FyZCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0ga2V5PXtjYXJkfSB4cz17MTJ9IHNtPXs2fSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZE1lZGlhfVxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlPXtjYXJkLmltZ1VybH1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkltYWdlIHRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y2FyZC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y2FyZC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTaW1wbGVNb2RhbCBpbWdVcmwgPSB7Y2FyZC5pbWdVcmx9IHRpdGxlPXtjYXJkLnRpdGxlfSBkZXNjcmlwdGlvbj17Y2FyZC5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1NpbXBsZU1vZGFsPlxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgey8qIEZvb3RlciAqL31cclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyfT5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBhbGlnbj1cImNlbnRlclwiIGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgIFBhcGF3IE1heW5hcmRcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGFsaWduPVwiY2VudGVyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgY29tcG9uZW50PVwicFwiPlxyXG4gICAgICAgICAgVGhhbmtzIHRvIEphbmUsIEpvYW5uLCBhbmQgS3Jpc3RpbmEgZm9yIHRoZWlyIGhlbHAgbWFraW5nIHRoaXMgc2l0ZSBwb3NzaWJsZS5cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPENvcHlyaWdodCAvPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgICAgey8qIEVuZCBmb290ZXIgKi99XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9