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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_mac_Desktop_interview_one_github_overreacted_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_mac_Desktop_interview_one_github_overreacted_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_mac_Desktop_interview_one_github_overreacted_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar Home = function(param) {\n    var posts = param.posts, error = param.error;\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"jsx-7a2dc36095ce2989\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"aside\", {\n                className: \"jsx-7a2dc36095ce2989\",\n                /*#__PURE__*/ children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    style: {\n                        display: \"flex\",\n                        marginBottom: \"3.5rem\"\n                    },\n                    className: \"jsx-7a2dc36095ce2989\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            src: \"/profile-pic-c715447ce38098828758e525a1128b87.jpg\",\n                            alt: \"Dan Abramov\",\n                            style: {\n                                margin: \"auto 0px\",\n                                marginRight: \"0.875rem\",\n                                width: \"3.5rem\",\n                                height: \"3.5rem\",\n                                borderRadius: \"50%\"\n                            },\n                            className: \"jsx-7a2dc36095ce2989\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            style: {\n                                maxWidth: \"310px\",\n                                display: \"flex\",\n                                flexDirection: \"column\",\n                                justifyContent: \"flex-end\",\n                                alignContent: \"flex-end\"\n                            },\n                            className: \"jsx-7a2dc36095ce2989\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    style: {\n                                        margin: 0,\n                                        marginBottom: 15\n                                    },\n                                    className: \"jsx-7a2dc36095ce2989\",\n                                    children: [\n                                        \" \",\n                                        \"Personal blog by\",\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                            href: \"https://mobile.twitter.com/dan_abramov\",\n                                            style: {\n                                                color: \"rgb(209,47,104)\"\n                                            },\n                                            className: \"jsx-7a2dc36095ce2989\",\n                                            children: \"Dan Abramov\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    className: \"jsx-7a2dc36095ce2989\" + \" \" + \"aside-subtitle\",\n                                    children: \"I explain with words and code.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                    lineNumber: 8,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                className: \"jsx-7a2dc36095ce2989\",\n                children: posts.map(function(post) {\n                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"article\", {\n                        className: \"jsx-7a2dc36095ce2989\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"header\", {\n                                className: \"jsx-7a2dc36095ce2989\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        className: \"jsx-7a2dc36095ce2989\" + \" \" + \"post-card\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                            rel: \"bookmark\",\n                                            href: \"/post/\".concat(post.id),\n                                            className: \"jsx-7a2dc36095ce2989\" + \" \" + \"post-card-link\",\n                                            children: post.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 19\n                                        }, _this1)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"small\", {\n                                        className: \"jsx-7a2dc36095ce2989\",\n                                        children: \"July 7, 2021 • ☕️☕️☕️ 14 min read\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 17\n                                    }, _this1)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"jsx-7a2dc36095ce2989\" + \" \" + \"post-card-body\",\n                                children: post.body\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 15\n                            }, _this1)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, _this1));\n                })\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"7a2dc36095ce2989\",\n                children: \".post-card.jsx-7a2dc36095ce2989{font-size:1.75rem;\\nmargib-bottom:0.4375rem}\\n.post-card-link.jsx-7a2dc36095ce2989{box-shadow:\\\"none\\\";\\ncolor:\\\"#d23669\\\";\\nfont-weight:900}\\n.post-card-body.jsx-7a2dc36095ce2989{margin-bottom:\\\"38px\\\"}\\n.aside-subtitle.jsx-7a2dc36095ce2989{margin:\\\"0px\\\"}\"\n            }, void 0, false, void 0, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, _this));\n};\n_c = Home;\nHome.getInitialProps = (function() {\n    var _ref = _asyncToGenerator(_Users_mac_Desktop_interview_one_github_overreacted_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ctx) {\n        var res, posts;\n        return _Users_mac_Desktop_interview_one_github_overreacted_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    _ctx.next = 3;\n                    return axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"https://jsonplaceholder.typicode.com/posts\");\n                case 3:\n                    res = _ctx.sent;\n                    posts = res.data;\n                    return _ctx.abrupt(\"return\", {\n                        posts: posts\n                    });\n                case 8:\n                    _ctx.prev = 8;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    return _ctx.abrupt(\"return\", {\n                        error: _ctx.t0\n                    });\n                case 11:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                8\n            ]\n        ]);\n    }));\n    return function(ctx) {\n        return _ref.apply(this, arguments);\n    };\n})();\nHome.getLayout = function getLayout(page) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: page\n        }, void 0, false, {\n            fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n            lineNumber: 103,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mac/Desktop/interview/one/github/overreacted/pages/index.tsx\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, this));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBRXNDLElBQUk7Ozs7Ozs7Ozs7O0FBR2hCLENBQUM7QUFFRCwrREFBZXpDLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBIb21lOiBhbnkgPSAoeyBwb3N0cywgZXJyb3IgfTogYW55KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxhc2lkZT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIzLjVyZW1cIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiL3Byb2ZpbGUtcGljLWM3MTU0NDdjZTM4MDk4ODI4NzU4ZTUyNWExMTI4Yjg3LmpwZ1wiXG4gICAgICAgICAgICBhbHQ9XCJEYW4gQWJyYW1vdlwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBtYXJnaW46IFwiYXV0byAwcHhcIixcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMC44NzVyZW1cIixcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMy41cmVtXCIsXG4gICAgICAgICAgICAgIGhlaWdodDogXCIzLjVyZW1cIixcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBtYXhXaWR0aDogXCIzMTBweFwiLFxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIixcbiAgICAgICAgICAgICAgYWxpZ25Db250ZW50OiBcImZsZXgtZW5kXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogMCwgbWFyZ2luQm90dG9tOiAxNSB9fT5cbiAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICBQZXJzb25hbCBibG9nIGJ5e1wiIFwifVxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL21vYmlsZS50d2l0dGVyLmNvbS9kYW5fYWJyYW1vdlwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwicmdiKDIwOSw0NywxMDQpXCIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIERhbiBBYnJhbW92XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgPHAgIGNsYXNzTmFtZT1cImFzaWRlLXN1YnRpdGxlXCIgPkkgZXhwbGFpbiB3aXRoIHdvcmRzIGFuZCBjb2RlLjwvcD5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hc2lkZT5cbiAgICAgIDxtYWluPlxuICAgICAgICB7cG9zdHMubWFwKChwb3N0OiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBvc3QtY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zdC1jYXJkLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICByZWw9XCJib29rbWFya1wiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvcG9zdC8ke3Bvc3QuaWR9YH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8c21hbGw+SnVseSA3LCAyMDIxIOKAoiDimJXvuI/imJXvuI/imJXvuI8gMTQgbWluIHJlYWQ8L3NtYWxsPlxuICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9zdC1jYXJkLWJvZHlcIj57cG9zdC5ib2R5fTwvcD5cbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnBvc3QtY2FyZCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICAgICAgICAgIG1hcmdpYi1ib3R0b206IDAuNDM3NXJlbTtcbiAgICAgICAgfVxuICAgICAgICAucG9zdC1jYXJkLWxpbmsge1xuICAgICAgICAgIGJveC1zaGFkb3c6IFwibm9uZVwiO1xuICAgICAgICAgIGNvbG9yOiBcIiNkMjM2NjlcIjtcbiAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICB9XG4gICAgICAgIC5wb3N0LWNhcmQtYm9keSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogXCIzOHB4XCI7XG4gICAgICAgIH1cbiAgICAgICAgLmFzaWRlLXN1YnRpdGxlIHtcbiAgICAgICAgICBtYXJnaW46IFwiMHB4XCI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5Ib21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHg6IGFueSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c1wiKTtcbiAgICBjb25zdCBwb3N0cyA9IHJlcy5kYXRhO1xuICAgIHJldHVybiB7IHBvc3RzIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgZXJyb3IgfTtcbiAgfVxufTtcblxuSG9tZS5nZXRMYXlvdXQgPSBmdW5jdGlvbiBnZXRMYXlvdXQocGFnZTogYW55KSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXY+e3BhZ2V9PC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIkxheW91dCIsImF4aW9zIiwiSG9tZSIsInBvc3RzIiwiZXJyb3IiLCJkaXYiLCJhc2lkZSIsInN0eWxlIiwiZGlzcGxheSIsIm1hcmdpbkJvdHRvbSIsImltZyIsInNyYyIsImFsdCIsIm1hcmdpbiIsIm1hcmdpblJpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJwIiwibWF4V2lkdGgiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkNvbnRlbnQiLCJhIiwiaHJlZiIsImNvbG9yIiwibWFpbiIsIm1hcCIsInBvc3QiLCJhcnRpY2xlIiwiaGVhZGVyIiwiaDMiLCJyZWwiLCJpZCIsInRpdGxlIiwic21hbGwiLCJib2R5IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicmVzIiwiZ2V0IiwiZGF0YSIsImdldExheW91dCIsInBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});