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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_mac_Desktop_interview_one_github_overreacted_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_mac_Desktop_interview_one_github_overreacted_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_mac_Desktop_interview_one_github_overreacted_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar Home = function(param) {\n    var posts = param.posts, error = param.error;\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"jsx-30f37b08d6f11661\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"aside\", {\n                className: \"jsx-30f37b08d6f11661\",\n                /*#__PURE__*/ children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    style: {\n                        display: \"flex\",\n                        marginBottom: \"3.5rem\"\n                    },\n                    className: \"jsx-30f37b08d6f11661\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            src: \"/profile-pic-c715447ce38098828758e525a1128b87.jpg\",\n                            alt: \"Dan Abramov\",\n                            style: {\n                                margin: \"auto 0px\",\n                                marginRight: \"0.875rem\",\n                                width: \"3.5rem\",\n                                height: \"3.5rem\",\n                                borderRadius: \"50%\"\n                            },\n                            className: \"jsx-30f37b08d6f11661\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            style: {\n                                maxWidth: \"310px\",\n                                display: \"flex\",\n                                flexDirection: \"column\",\n                                justifyContent: \"flex-end\",\n                                alignContent: \"flex-end\"\n                            },\n                            className: \"jsx-30f37b08d6f11661\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    style: {\n                                        margin: 0,\n                                        marginBottom: 15\n                                    },\n                                    className: \"jsx-30f37b08d6f11661\",\n                                    children: [\n                                        \" \",\n                                        \"Personal blog by\",\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                            href: \"https://mobile.twitter.com/dan_abramov\",\n                                            style: {\n                                                color: \"rgb(209,47,104)\"\n                                            },\n                                            className: \"jsx-30f37b08d6f11661\",\n                                            children: \"Dan Abramov\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    style: {\n                                        margin: 0\n                                    },\n                                    className: \"jsx-30f37b08d6f11661\",\n                                    children: \"I explain with words and code.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                    lineNumber: 8,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                className: \"jsx-30f37b08d6f11661\",\n                children: posts.map(function(post) {\n                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"article\", {\n                        className: \"jsx-30f37b08d6f11661\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"header\", {\n                                className: \"jsx-30f37b08d6f11661\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        className: \"jsx-30f37b08d6f11661\" + \" \" + \"post-card\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                            rel: \"bookmark\",\n                                            href: \"/post/\".concat(post.id),\n                                            className: \"jsx-30f37b08d6f11661\" + \" \" + \"post-card-link\",\n                                            children: post.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 19\n                                        }, _this1)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"small\", {\n                                        className: \"jsx-30f37b08d6f11661\",\n                                        children: \"July 7, 2021 • ☕️☕️☕️ 14 min read\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 17\n                                    }, _this1)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                style: {\n                                    marginBottom: \"38px\"\n                                },\n                                className: \"jsx-30f37b08d6f11661\",\n                                children: post.body\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 15\n                            }, _this1)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, _this1));\n                })\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"30f37b08d6f11661\",\n                children: \".post-card.jsx-30f37b08d6f11661{font-size:1.75rem;\\nmargib-bottom:0.4375rem}\\npost-card-link.jsx-30f37b08d6f11661{box-shadow: \\\"none\\\",\\n          color: \\\"#d23669\\\",\\n          font-weight: 900,\\n        }\"\n            }, void 0, false, void 0, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, _this));\n};\n_c = Home;\nHome.getInitialProps = (function() {\n    var _ref = _asyncToGenerator(_Users_mac_Desktop_interview_one_github_overreacted_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ctx) {\n        var res, posts;\n        return _Users_mac_Desktop_interview_one_github_overreacted_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    _ctx.next = 3;\n                    return axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"https://jsonplaceholder.typicode.com/posts\");\n                case 3:\n                    res = _ctx.sent;\n                    posts = res.data;\n                    return _ctx.abrupt(\"return\", {\n                        posts: posts\n                    });\n                case 8:\n                    _ctx.prev = 8;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    return _ctx.abrupt(\"return\", {\n                        error: _ctx.t0\n                    });\n                case 11:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                8\n            ]\n        ]);\n    }));\n    return function(ctx) {\n        return _ref.apply(this, arguments);\n    };\n})();\nHome.getLayout = function getLayout(page) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: page\n        }, void 0, false, {\n            fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n            lineNumber: 97,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n        lineNumber: 96,\n        columnNumber: 5\n    }, this));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0MsU0FBUyxHQUFHLFFBQVEsQ0FBQ0EsU0FBUyxDQUFDQyxJQUFTLEVBQUUsQ0FBQztJQUM5QyxNQUFNLDZFQUNIM0MsMERBQU07OEZBQ0pLLENBQUc7c0JBQUVzQyxJQUFJOzs7Ozs7Ozs7OztBQUdoQixDQUFDO0FBRUQsK0RBQWV6QyxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgSG9tZTogYW55ID0gKHsgcG9zdHMsIGVycm9yIH06IGFueSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YXNpZGU+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMy41cmVtXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIi9wcm9maWxlLXBpYy1jNzE1NDQ3Y2UzODA5ODgyODc1OGU1MjVhMTEyOGI4Ny5qcGdcIlxuICAgICAgICAgICAgYWx0PVwiRGFuIEFicmFtb3ZcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgbWFyZ2luOiBcImF1dG8gMHB4XCIsXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjAuODc1cmVtXCIsXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjMuNXJlbVwiLFxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMy41cmVtXCIsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cFxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiMzEwcHhcIixcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsXG4gICAgICAgICAgICAgIGFsaWduQ29udGVudDogXCJmbGV4LWVuZFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46IDAsIG1hcmdpbkJvdHRvbTogMTUgfX0+XG4gICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgUGVyc29uYWwgYmxvZyBieXtcIiBcIn1cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tb2JpbGUudHdpdHRlci5jb20vZGFuX2FicmFtb3ZcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcInJnYigyMDksNDcsMTA0KVwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBEYW4gQWJyYW1vdlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogMCB9fT5JIGV4cGxhaW4gd2l0aCB3b3JkcyBhbmQgY29kZS48L3A+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYXNpZGU+XG4gICAgICA8bWFpbj5cbiAgICAgICAge3Bvc3RzLm1hcCgocG9zdDogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwb3N0LWNhcmRcIj5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3N0LWNhcmQtbGlua1wiXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cImJvb2ttYXJrXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9wb3N0LyR7cG9zdC5pZH1gfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDxzbWFsbD5KdWx5IDcsIDIwMjEg4oCiIOKYle+4j+KYle+4j+KYle+4jyAxNCBtaW4gcmVhZDwvc21hbGw+XG4gICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMzhweFwiIH19Pntwb3N0LmJvZHl9PC9wPlxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9tYWluPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucG9zdC1jYXJkIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNzVyZW07XG4gICAgICAgICAgbWFyZ2liLWJvdHRvbTogMC40Mzc1cmVtO1xuICAgICAgICB9XG4gICAgICAgIHBvc3QtY2FyZC1saW5rIHtcbiAgICAgICAgICBib3gtc2hhZG93OiBcIm5vbmVcIixcbiAgICAgICAgICBjb2xvcjogXCIjZDIzNjY5XCIsXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMCxcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eDogYW55KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzXCIpO1xuICAgIGNvbnN0IHBvc3RzID0gcmVzLmRhdGE7XG4gICAgcmV0dXJuIHsgcG9zdHMgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBlcnJvciB9O1xuICB9XG59O1xuXG5Ib21lLmdldExheW91dCA9IGZ1bmN0aW9uIGdldExheW91dChwYWdlOiBhbnkpIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdj57cGFnZX08L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiYXhpb3MiLCJIb21lIiwicG9zdHMiLCJlcnJvciIsImRpdiIsImFzaWRlIiwic3R5bGUiLCJkaXNwbGF5IiwibWFyZ2luQm90dG9tIiwiaW1nIiwic3JjIiwiYWx0IiwibWFyZ2luIiwibWFyZ2luUmlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsInAiLCJtYXhXaWR0aCIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduQ29udGVudCIsImEiLCJocmVmIiwiY29sb3IiLCJtYWluIiwibWFwIiwicG9zdCIsImFydGljbGUiLCJoZWFkZXIiLCJoMyIsInJlbCIsImlkIiwidGl0bGUiLCJzbWFsbCIsImJvZHkiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJyZXMiLCJnZXQiLCJkYXRhIiwiZ2V0TGF5b3V0IiwicGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});