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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_mac_Desktop_interview_one_github_overreacted_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_mac_Desktop_interview_one_github_overreacted_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_mac_Desktop_interview_one_github_overreacted_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar Home = function(param) {\n    var posts = param.posts, error = param.error;\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"jsx-ecab82993fe1b190\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"aside\", {\n                className: \"jsx-ecab82993fe1b190\",\n                /*#__PURE__*/ children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"jsx-ecab82993fe1b190\" + \" \" + \"aside-container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            src: \"/profile-pic-c715447ce38098828758e525a1128b87.jpg\",\n                            alt: \"Dan Abramov\",\n                            style: {},\n                            className: \"jsx-ecab82993fe1b190\" + \" \" + \"aside-image\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                            lineNumber: 9,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            className: \"jsx-ecab82993fe1b190\" + \" \" + \"aside-content\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    className: \"jsx-ecab82993fe1b190\" + \" \" + \"aside-title\",\n                                    children: [\n                                        \"Personal blog by\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                            href: \"https://mobile.twitter.com/dan_abramov\",\n                                            style: {\n                                                color: \"rgb(209,47,104)\"\n                                            },\n                                            className: \"jsx-ecab82993fe1b190\",\n                                            children: \"Dan Abramov\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                                            lineNumber: 18,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                                    lineNumber: 16,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    className: \"jsx-ecab82993fe1b190\" + \" \" + \"aside-subtitle\",\n                                    children: \"I explain with words and code.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                    lineNumber: 8,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                className: \"jsx-ecab82993fe1b190\",\n                children: posts.map(function(post) {\n                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"article\", {\n                        className: \"jsx-ecab82993fe1b190\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"header\", {\n                                className: \"jsx-ecab82993fe1b190\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        className: \"jsx-ecab82993fe1b190\" + \" \" + \"post-card\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                            rel: \"bookmark\",\n                                            href: \"/post/\".concat(post.id),\n                                            className: \"jsx-ecab82993fe1b190\" + \" \" + \"post-card-link\",\n                                            children: post.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 19\n                                        }, _this1)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 17\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"small\", {\n                                        className: \"jsx-ecab82993fe1b190\",\n                                        children: \"July 7, 2021 • ☕️☕️☕️ 14 min read\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 17\n                                    }, _this1)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 15\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"jsx-ecab82993fe1b190\" + \" \" + \"post-card-body\",\n                                children: post.body\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 15\n                            }, _this1)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, _this1));\n                })\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"ecab82993fe1b190\",\n                children: \".aside-container.jsx-ecab82993fe1b190{display:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\nmargin-bottom:3.5rem}\\n.post-card.jsx-ecab82993fe1b190{font-size:1.75rem;\\nmargib-bottom:0.4375rem}\\n.post-card-link.jsx-ecab82993fe1b190{box-shadow:none;\\ncolor:#d23669;\\nfont-weight:900}\\n.post-card-body.jsx-ecab82993fe1b190{margin-bottom:38px}\\n.aside-subtitle.jsx-ecab82993fe1b190{margin:0px}\\n.aside-title.jsx-ecab82993fe1b190{margin: 0, marginBottom: 15\\n        }\\n.aside-content.jsx-ecab82993fe1b190{max-width:310px;\\ndisplay:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-flex-direction:column;\\n-ms-flex-direction:column;\\nflex-direction:column;\\n-webkit-box-pack:end;\\n-ms-flex-pack:end;\\n-webkit-justify-content:flex-end;\\njustify-content:flex-end;\\nalignContent:flex-end}\\n.aside-image.jsx-ecab82993fe1b190{margin:auto 0px;\\nmargin-right:0.875rem;\\nwidth:3.5rem;\\nheight:3.5rem;\\nborder-radius:50%}\"\n            }, void 0, false, void 0, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, _this));\n};\n_c = Home;\nHome.getInitialProps = (function() {\n    var _ref = _asyncToGenerator(_Users_mac_Desktop_interview_one_github_overreacted_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ctx) {\n        var res, posts;\n        return _Users_mac_Desktop_interview_one_github_overreacted_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    _ctx.next = 3;\n                    return axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"https://jsonplaceholder.typicode.com/posts\");\n                case 3:\n                    res = _ctx.sent;\n                    posts = res.data;\n                    return _ctx.abrupt(\"return\", {\n                        posts: posts\n                    });\n                case 8:\n                    _ctx.prev = 8;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    return _ctx.abrupt(\"return\", {\n                        error: _ctx.t0\n                    });\n                case 11:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                8\n            ]\n        ]);\n    }));\n    return function(ctx) {\n        return _ref.apply(this, arguments);\n    };\n})();\nHome.getLayout = function getLayout(page) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: page\n        }, void 0, false, {\n            fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n            lineNumber: 105,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n        lineNumber: 104,\n        columnNumber: 5\n    }, this));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixHQUFLLENBQUNFLElBQUksR0FBUSxRQUFRLFFBQW1CLENBQUM7UUFBekJDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxLQUFLLFNBQUxBLEtBQUs7O0lBQy9CLE1BQU0sNkVBQ0hDLENBQUc7Ozt3RkFDREMsQ0FBSzs7b0hBQ0hELENBQUc7OERBQVcsQ0FBaUI7O29HQUM3QkUsQ0FBRzs0QkFDRkMsR0FBRyxFQUFDLENBQW1EOzRCQUN2REMsR0FBRyxFQUFDLENBQWE7NEJBRWpCQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO3NFQURDLENBQWE7Ozs7OztvR0FHeEJDLENBQUM7c0VBQVcsQ0FBZTs7NEdBQ3pCQSxDQUFDOzhFQUFXLENBQWE7O3dDQUFDLENBRXpCO29IQUFDQyxDQUFDOzRDQUNBQyxJQUFJLEVBQUMsQ0FBd0M7NENBQzdDSCxLQUFLLEVBQUUsQ0FBQztnREFBQ0ksS0FBSyxFQUFFLENBQWlCOzRDQUFDLENBQUM7O3NEQUNwQyxDQUVEOzs7Ozs7Ozs7Ozs7NEdBR0RILENBQUM7OEVBQVcsQ0FBZ0I7OENBQUMsQ0FBOEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUlqRUksQ0FBSTs7MEJBQ0ZaLEtBQUssQ0FBQ2EsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsSUFBUyxFQUFLLENBQUM7b0JBQ3pCLE1BQU0sNkVBQ0hDLENBQU87Ozt3R0FDTEMsQ0FBTTs7O2dIQUNKQyxDQUFFO2tGQUFXLENBQVc7OEhBQ3RCUixDQUFDOzRDQUVBUyxHQUFHLEVBQUMsQ0FBVTs0Q0FDZFIsSUFBSSxFQUFHLENBQU0sUUFBVSxPQUFSSSxJQUFJLENBQUNLLEVBQUU7c0ZBRlosQ0FBZ0I7c0RBSXpCTCxJQUFJLENBQUNNLEtBQUs7Ozs7Ozs7Ozs7O2dIQUdkQyxDQUFLOztrREFBQyxDQUFpQzs7Ozs7Ozs7Ozs7O3dHQUV6Q2IsQ0FBQzswRUFBVyxDQUFnQjswQ0FBRU0sSUFBSSxDQUFDUSxJQUFJOzs7Ozs7Ozs7Ozs7Z0JBRzlDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQ1QsQ0FBQztLQXZGS3ZCLElBQUk7QUF3RlZBLElBQUksQ0FBQ3dCLGVBQWU7Z01BQUcsUUFBUSxTQUFEQyxHQUFRLEVBQUssQ0FBQztZQUVsQ0MsR0FBRyxFQUNIekIsS0FBSzs7Ozs7OzJCQURPRixnREFBUyxDQUFDLENBQTRDOztvQkFBbEUyQixHQUFHO29CQUNIekIsS0FBSyxHQUFHeUIsR0FBRyxDQUFDRSxJQUFJO2lEQUNmLENBQUM7d0JBQUMzQixLQUFLLEVBQUxBLEtBQUs7b0JBQUMsQ0FBQzs7OztpREFFVCxDQUFDO3dCQUFDQyxLQUFLO29CQUFDLENBQUM7Ozs7Ozs7Ozs7O0lBRXBCLENBQUM7b0JBUjZCdUIsR0FBUTs7OztBQVV0Q3pCLElBQUksQ0FBQzZCLFNBQVMsR0FBRyxRQUFRLENBQUNBLFNBQVMsQ0FBQ0MsSUFBUyxFQUFFLENBQUM7SUFDOUMsTUFBTSw2RUFDSGhDLDBEQUFNOzhGQUNKSyxDQUFHO3NCQUFFMkIsSUFBSTs7Ozs7Ozs7Ozs7QUFHaEIsQ0FBQztBQUVELCtEQUFlOUIsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IEhvbWU6IGFueSA9ICh7IHBvc3RzLCBlcnJvciB9OiBhbnkpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGFzaWRlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzaWRlLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIi9wcm9maWxlLXBpYy1jNzE1NDQ3Y2UzODA5ODgyODc1OGU1MjVhMTEyOGI4Ny5qcGdcIlxuICAgICAgICAgICAgYWx0PVwiRGFuIEFicmFtb3ZcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXNpZGUtaW1hZ2VcIlxuICAgICAgICAgICAgc3R5bGU9e3t9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXNpZGUtY29udGVudFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXNpZGUtdGl0bGVcIj5cbiAgICAgICAgICAgICAgUGVyc29uYWwgYmxvZyBieVxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL21vYmlsZS50d2l0dGVyLmNvbS9kYW5fYWJyYW1vdlwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwicmdiKDIwOSw0NywxMDQpXCIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIERhbiBBYnJhbW92XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXNpZGUtc3VidGl0bGVcIj5JIGV4cGxhaW4gd2l0aCB3b3JkcyBhbmQgY29kZS48L3A+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYXNpZGU+XG4gICAgICA8bWFpbj5cbiAgICAgICAge3Bvc3RzLm1hcCgocG9zdDogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwb3N0LWNhcmRcIj5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvc3QtY2FyZC1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwiYm9va21hcmtcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3Bvc3QvJHtwb3N0LmlkfWB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPHNtYWxsPkp1bHkgNywgMjAyMSDigKIg4piV77iP4piV77iP4piV77iPIDE0IG1pbiByZWFkPC9zbWFsbD5cbiAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBvc3QtY2FyZC1ib2R5XCI+e3Bvc3QuYm9keX08L3A+XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L21haW4+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAuYXNpZGUtY29udGFpbmVye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzLjVyZW1cbiAgICAgIH1cbiAgICAgICAgLnBvc3QtY2FyZCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICAgICAgICAgIG1hcmdpYi1ib3R0b206IDAuNDM3NXJlbTtcbiAgICAgICAgfVxuICAgICAgICAucG9zdC1jYXJkLWxpbmsge1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICNkMjM2Njk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgfVxuICAgICAgICAucG9zdC1jYXJkLWJvZHkge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDM4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmFzaWRlLXN1YnRpdGxlIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgfVxuICAgICAgICAuYXNpZGUtdGl0bGUge1xuICAgICAgICAgIG1hcmdpbjogMCwgbWFyZ2luQm90dG9tOiAxNVxuICAgICAgICB9XG4gICAgICAgIC5hc2lkZS1jb250ZW50IHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDMxMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIGFsaWduQ29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIH1cbiAgICAgICAgLmFzaWRlLWltYWdle1xuICAgICAgICAgIG1hcmdpbjogYXV0byAwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjg3NXJlbTtcbiAgICAgICAgICB3aWR0aDogMy41cmVtO1xuICAgICAgICAgIGhlaWdodDogMy41cmVtO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eDogYW55KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzXCIpO1xuICAgIGNvbnN0IHBvc3RzID0gcmVzLmRhdGE7XG4gICAgcmV0dXJuIHsgcG9zdHMgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBlcnJvciB9O1xuICB9XG59O1xuXG5Ib21lLmdldExheW91dCA9IGZ1bmN0aW9uIGdldExheW91dChwYWdlOiBhbnkpIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdj57cGFnZX08L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiYXhpb3MiLCJIb21lIiwicG9zdHMiLCJlcnJvciIsImRpdiIsImFzaWRlIiwiaW1nIiwic3JjIiwiYWx0Iiwic3R5bGUiLCJwIiwiYSIsImhyZWYiLCJjb2xvciIsIm1haW4iLCJtYXAiLCJwb3N0IiwiYXJ0aWNsZSIsImhlYWRlciIsImgzIiwicmVsIiwiaWQiLCJ0aXRsZSIsInNtYWxsIiwiYm9keSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJlcyIsImdldCIsImRhdGEiLCJnZXRMYXlvdXQiLCJwYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});