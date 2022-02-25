"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ThemeToggle.tsx":
/*!************************************!*\
  !*** ./components/ThemeToggle.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/hooks */ \"./redux/hooks.tsx\");\n/* harmony import */ var _redux_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/toggle */ \"./redux/toggle.tsx\");\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  --toggle-width: 70px;\\n  --toggle-height: 33px;\\n  --toggle-padding: 2px;\\n  position: relative;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n  font-size: 1.5rem;\\n  line-height: 1;\\n  width: var(--toggle-width);\\n  height: var(--toggle-height);\\n  padding: var(--toggle-padding);\\n  border: 0;\\n  border-radius: calc(var(--toggle-width) / 2);\\n  cursor: pointer;\\n  background: var(--color-bg-toggle);\\n  transition: background 0.25s ease-in-out, box-shadow 0.25s ease-in-out;\\n  &:focus {\\n    outline-offset: 5px;\\n  }\\n  &:focus:not(:focus-visible) {\\n    outline: none;\\n  }\\n  &:hover {\\n    box-shadow: 0 0 5px 2px var(--color-bg-toggle);\\n  },\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  position: absolute;\\n  top: 2px;\\n  left: var(--toggle-padding);\\n  width: calc(var(--toggle-height) - (var(--toggle-padding) * 1.2));\\n  height: calc(var(--toggle-height) - (var(--toggle-padding) * 1.2));\\n  border-radius: 50%;\\n  background: white;\\n  transition: transform 0.25s ease-in-out;\\n  transform: \",\n        \";\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar ToggleButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button(_templateObject());\n_c = ToggleButton;\nvar ToggleThumb = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span(_templateObject1(), function(p) {\n    return p.activeTheme === \"dark\" ? \"translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)\" : \"none\";\n});\n_c1 = ToggleThumb;\nvar ThemeToggle = function() {\n    _s();\n    var dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    var activeTheme = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(_redux_toggle__WEBPACK_IMPORTED_MODULE_4__.getToggle);\n    // const [activeTheme, setActiveTheme] = useState(\"light\");\n    var inactiveTheme = activeTheme === \"light\" ? \"dark\" : \"light\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        document.body.dataset.theme = activeTheme;\n        window.localStorage.setItem(\"theme\", activeTheme);\n    }, [\n        activeTheme\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ToggleButton, {\n        \"aria-label\": \"Change to \".concat(inactiveTheme, \" mode\"),\n        title: \"Change to \".concat(inactiveTheme, \" mode\"),\n        type: \"button\",\n        onClick: function() {\n            return dispatch((0,_redux_toggle__WEBPACK_IMPORTED_MODULE_4__.setActiveTheme)(inactiveTheme));\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ToggleThumb, {\n                activeTheme: activeTheme\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/components/ThemeToggle.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"🌙\"\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/components/ThemeToggle.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"☀️\"\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/components/ThemeToggle.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/components/ThemeToggle.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, _this));\n};\n_s(ThemeToggle, \"ID954j8mOBi2L8/cVr8aNx+xjCY=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector\n    ];\n});\n_c2 = ThemeToggle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeToggle);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ToggleButton\");\n$RefreshReg$(_c1, \"ToggleThumb\");\n$RefreshReg$(_c2, \"ThemeToggle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RoZW1lVG9nZ2xlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMkM7QUFDUDtBQUMyQjtBQUNKOzs7Ozs7Ozs7Ozs7OztRQUV4QixDQTJCbkM7Ozs7Ozs7OztRQUVnQyxDQVNuQjtRQUdFLENBQ2Y7Ozs7Ozs7O0FBMUNBLEdBQUssQ0FBQ00sWUFBWSxHQUFHTCw4REFBYTtLQUE1QkssWUFBWTtBQTZCbEIsR0FBSyxDQUFDRSxXQUFXLEdBQUdQLDREQUFXLHFCQVNoQixRQUNkLENBRGVTLENBQUM7SUFDYkEsTUFBTSxDQUFOQSxDQUFDLENBQUNDLFdBQVcsS0FBSyxDQUFNLFFBQ3BCLENBQXFFLHVFQUNyRSxDQUFNOztNQVpSSCxXQUFXO0FBZWpCLEdBQUssQ0FBQ0ksV0FBVyxHQUFHLFFBQ3BCLEdBRDBCLENBQUM7O0lBQ3pCLEdBQUssQ0FBQ0MsUUFBUSxHQUFHWCw0REFBYztJQUMvQixHQUFHLENBQUNTLFdBQVcsR0FBR1IsNERBQWMsQ0FBQ0Msb0RBQVM7SUFDMUMsRUFBMkQ7SUFDM0QsR0FBSyxDQUFDVSxhQUFhLEdBQUdILFdBQVcsS0FBSyxDQUFPLFNBQUcsQ0FBTSxRQUFHLENBQU87SUFFaEVYLGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2ZlLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUNDLEtBQUssR0FBR1AsV0FBVztRQUN6Q1EsTUFBTSxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFPLFFBQUVWLFdBQVc7SUFDbEQsQ0FBQyxFQUFFLENBQUNBO1FBQUFBLFdBQVc7SUFBQSxDQUFDO0lBQ2hCLE1BQU0sNkVBQ0hMLFlBQVk7UUFDWGdCLENBQVUsYUFBRyxDQUFVLFlBQWdCLE1BQUssQ0FBbkJSLGFBQWEsRUFBQyxDQUFLO1FBQzVDUyxLQUFLLEVBQUcsQ0FBVSxZQUFnQixNQUFLLENBQW5CVCxhQUFhLEVBQUMsQ0FBSztRQUN2Q1UsSUFBSSxFQUFDLENBQVE7UUFDYkMsT0FBTyxFQUFFLFFBQVE7WUFBRlosTUFBTSxDQUFOQSxRQUFRLENBQUNSLDZEQUFjLENBQUNTLGFBQWE7Ozt3RkFFbkROLFdBQVc7Z0JBQUNHLFdBQVcsRUFBRUEsV0FBVzs7Ozs7O3dGQUNwQ0YsQ0FBSTswQkFBQyxDQUFDOzs7Ozs7d0ZBQ0hBLENBQUM7MEJBQUMsQ0FBRTs7Ozs7Ozs7Ozs7O0FBR2QsQ0FBQztHQXRCS0csV0FBVzs7UUFDRVYsd0RBQWM7UUFDYkMsd0RBQWM7OztNQUY1QlMsV0FBVztBQXdCakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RoZW1lVG9nZ2xlLnRzeD9kYzE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIi4uL3JlZHV4L2hvb2tzXCI7XG5pbXBvcnQgeyBnZXRUb2dnbGUsIHNldEFjdGl2ZVRoZW1lIH0gZnJvbSBcIi4uL3JlZHV4L3RvZ2dsZVwiO1xuXG5jb25zdCBUb2dnbGVCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAtLXRvZ2dsZS13aWR0aDogNzBweDtcbiAgLS10b2dnbGUtaGVpZ2h0OiAzM3B4O1xuICAtLXRvZ2dsZS1wYWRkaW5nOiAycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbiAgd2lkdGg6IHZhcigtLXRvZ2dsZS13aWR0aCk7XG4gIGhlaWdodDogdmFyKC0tdG9nZ2xlLWhlaWdodCk7XG4gIHBhZGRpbmc6IHZhcigtLXRvZ2dsZS1wYWRkaW5nKTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLXRvZ2dsZS13aWR0aCkgLyAyKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iZy10b2dnbGUpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMjVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMjVzIGVhc2UtaW4tb3V0O1xuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lLW9mZnNldDogNXB4O1xuICB9XG4gICY6Zm9jdXM6bm90KDpmb2N1cy12aXNpYmxlKSB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDJweCB2YXIoLS1jb2xvci1iZy10b2dnbGUpO1xuICB9LFxuYDtcblxuY29uc3QgVG9nZ2xlVGh1bWIgPSBzdHlsZWQuc3BhbmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDJweDtcbiAgbGVmdDogdmFyKC0tdG9nZ2xlLXBhZGRpbmcpO1xuICB3aWR0aDogY2FsYyh2YXIoLS10b2dnbGUtaGVpZ2h0KSAtICh2YXIoLS10b2dnbGUtcGFkZGluZykgKiAxLjIpKTtcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXRvZ2dsZS1oZWlnaHQpIC0gKHZhcigtLXRvZ2dsZS1wYWRkaW5nKSAqIDEuMikpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogJHsocCkgPT5cbiAgICBwLmFjdGl2ZVRoZW1lID09PSBcImRhcmtcIlxuICAgICAgPyBcInRyYW5zbGF0ZTNkKGNhbGModmFyKC0tdG9nZ2xlLXdpZHRoKSAtIHZhcigtLXRvZ2dsZS1oZWlnaHQpKSwgMCwgMClcIlxuICAgICAgOiBcIm5vbmVcIn07XG5gO1xuXG5jb25zdCBUaGVtZVRvZ2dsZSA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICBsZXQgYWN0aXZlVGhlbWUgPSB1c2VBcHBTZWxlY3RvcihnZXRUb2dnbGUpO1xuICAvLyBjb25zdCBbYWN0aXZlVGhlbWUsIHNldEFjdGl2ZVRoZW1lXSA9IHVzZVN0YXRlKFwibGlnaHRcIik7XG4gIGNvbnN0IGluYWN0aXZlVGhlbWUgPSBhY3RpdmVUaGVtZSA9PT0gXCJsaWdodFwiID8gXCJkYXJrXCIgOiBcImxpZ2h0XCI7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmRhdGFzZXQudGhlbWUgPSBhY3RpdmVUaGVtZTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBhY3RpdmVUaGVtZSk7XG4gIH0sIFthY3RpdmVUaGVtZV0pO1xuICByZXR1cm4gKFxuICAgIDxUb2dnbGVCdXR0b25cbiAgICAgIGFyaWEtbGFiZWw9e2BDaGFuZ2UgdG8gJHtpbmFjdGl2ZVRoZW1lfSBtb2RlYH1cbiAgICAgIHRpdGxlPXtgQ2hhbmdlIHRvICR7aW5hY3RpdmVUaGVtZX0gbW9kZWB9XG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHNldEFjdGl2ZVRoZW1lKGluYWN0aXZlVGhlbWUpKX1cbiAgICA+XG4gICAgICA8VG9nZ2xlVGh1bWIgYWN0aXZlVGhlbWU9e2FjdGl2ZVRoZW1lfSAvPlxuICAgICAgPHNwYW4+8J+MmTwvc3Bhbj5cbiAgICAgIDxzcGFuPuKYgO+4jzwvc3Bhbj5cbiAgICA8L1RvZ2dsZUJ1dHRvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lVG9nZ2xlO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInN0eWxlZCIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJnZXRUb2dnbGUiLCJzZXRBY3RpdmVUaGVtZSIsIlRvZ2dsZUJ1dHRvbiIsImJ1dHRvbiIsIlRvZ2dsZVRodW1iIiwic3BhbiIsInAiLCJhY3RpdmVUaGVtZSIsIlRoZW1lVG9nZ2xlIiwiZGlzcGF0Y2giLCJpbmFjdGl2ZVRoZW1lIiwiZG9jdW1lbnQiLCJib2R5IiwiZGF0YXNldCIsInRoZW1lIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImFyaWEtbGFiZWwiLCJ0aXRsZSIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ThemeToggle.tsx\n");

/***/ })

});