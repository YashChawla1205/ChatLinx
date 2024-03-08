"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./src/pages/login.tsx":
/*!*****************************!*\
  !*** ./src/pages/login.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/AuthContext */ \"./src/context/AuthContext.tsx\");\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/AppContext */ \"./src/context/AppContext.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/axios */ \"./src/lib/axios.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst userID = Math.random().toString(36).slice(2, 14);\nconst OTP = Math.random().toString(36);\nconst Login = ()=>{\n    _s();\n    const { dispatchAuth, isLoggedIn } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    const { loadUserSettings } = (0,_context_AppContext__WEBPACK_IMPORTED_MODULE_3__.useApp)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const loginAnonymously = ()=>{\n        setIsLoading(true);\n        dispatchAuth({\n            type: \"LOGIN\",\n            payload: {\n                loginType: \"anonymous\",\n                loginId: userID,\n                email: null\n            }\n        });\n        setIsLoading(false);\n        router.push(\"/\");\n    };\n    async function login() {\n        var _emailRef_current;\n        setIsLoading(true);\n        const email = (_emailRef_current = emailRef.current) === null || _emailRef_current === void 0 ? void 0 : _emailRef_current.value;\n        try {\n            const response = await _lib_axios__WEBPACK_IMPORTED_MODULE_6__.api.post(\"/login\", {\n                email\n            });\n            if (response.status === 200) {\n                const data = await response.data;\n                const userID = data.id;\n                dispatchAuth({\n                    type: \"LOGIN\",\n                    payload: {\n                        loginType: \"email\",\n                        loginId: userID,\n                        email\n                    }\n                });\n                try {\n                    var _userData_data;\n                    const userData = await _lib_axios__WEBPACK_IMPORTED_MODULE_6__.api.get(\"/profile/\".concat(email));\n                    loadUserSettings((_userData_data = userData.data) === null || _userData_data === void 0 ? void 0 : _userData_data.settings);\n                } catch (error) {\n                    console.error(\"Error loading user data:\", error);\n                }\n            } else {\n                setIsLoading(false);\n                throw new Error(\"Login failed\");\n            }\n        } catch (err) {\n            setIsLoading(false);\n            console.error(\"Error logging in:\", err);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        isLoggedIn && router.push(\"/\");\n    }, [\n        isLoggedIn\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-light dark:bg-primary h-[100vh] w-[100vw] text-primary dark:text-white flex\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-full w-full max-w-[1750px] flex\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center flex-col sm:w-2/4 w-full gap-4 px-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-center flex-col gap-2 w-4/5 sm:w-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"font-bold text-4xl 2xl:text-5xl\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Yash Chawla\\\\Downloads\\\\Whisper-main\\\\src\\\\pages\\\\login.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"font-medium text-2xl text-center 2xl:text-3xl\",\n                                    children: \"Chat anonymously and safely with people for free\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Yash Chawla\\\\Downloads\\\\Whisper-main\\\\src\\\\pages\\\\login.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Yash Chawla\\\\Downloads\\\\Whisper-main\\\\src\\\\pages\\\\login.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, undefined),\n                        isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"uppercase py-5\",\n                            children: \"Processing Login\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Yash Chawla\\\\Downloads\\\\Whisper-main\\\\src\\\\pages\\\\login.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-4/5\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Yash Chawla\\\\Downloads\\\\Whisper-main\\\\src\\\\pages\\\\login.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex gap-3 items-center w-4/5 sm:w-full justify-center flex-wrap\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            disabled: isLoading,\n                                            onClick: loginAnonymously,\n                                            className: \"text-white bg-secondary h-10 px-10 font-light cursor-pointer rounded-md\",\n                                            children: \"Login Anonymously\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Yash Chawla\\\\Downloads\\\\Whisper-main\\\\src\\\\pages\\\\login.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"h-10 px-10 bg-highlight rounded-md cursor-pointer\",\n                                            disabled: isLoading,\n                                            onClick: login,\n                                            children: \"Login\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Yash Chawla\\\\Downloads\\\\Whisper-main\\\\src\\\\pages\\\\login.tsx\",\n                                            lineNumber: 98,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Yash Chawla\\\\Downloads\\\\Whisper-main\\\\src\\\\pages\\\\login.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Yash Chawla\\\\Downloads\\\\Whisper-main\\\\src\\\\pages\\\\login.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-full bg-secondary w-2/4 sm:flex hidden items-center justify-center px-4 relative\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        src: \"/landing page image.jpg\",\n                        className: \"h-auto rounded-full w-auto object-cover\",\n                        alt: \"Landing Page Image\",\n                        fill: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Yash Chawla\\\\Downloads\\\\Whisper-main\\\\src\\\\pages\\\\login.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Yash Chawla\\\\Downloads\\\\Whisper-main\\\\src\\\\pages\\\\login.tsx\",\n                    lineNumber: 109,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Yash Chawla\\\\Downloads\\\\Whisper-main\\\\src\\\\pages\\\\login.tsx\",\n            lineNumber: 77,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Yash Chawla\\\\Downloads\\\\Whisper-main\\\\src\\\\pages\\\\login.tsx\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Login, \"3uQ25BTl5BO4h6XhBsovjmj/ZPg=\", false, function() {\n    return [\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth,\n        _context_AppContext__WEBPACK_IMPORTED_MODULE_3__.useApp,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTJEO0FBRVg7QUFDRjtBQUNGO0FBRWI7QUFDRztBQUVsQyxNQUFNUyxTQUFTQyxLQUFLQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQyxJQUFJQyxLQUFLLENBQUMsR0FBRztBQUNuRCxNQUFNQyxNQUFNSixLQUFLQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQztBQUVuQyxNQUFNRyxRQUFROztJQUNaLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxVQUFVLEVBQUUsR0FBR2IsNkRBQU9BO0lBQzVDLE1BQU0sRUFBRWMsZ0JBQWdCLEVBQUUsR0FBR2IsMkRBQU1BO0lBQ25DLE1BQU1jLFNBQVNiLDBEQUFTQTtJQUV4QixNQUFNLENBQUNjLFdBQVdDLGFBQWEsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU1tQixXQUFXcEIsNkNBQU1BO0lBRXZCLE1BQU1xQixtQkFBbUI7UUFDdkJGLGFBQWE7UUFDYkwsYUFBYTtZQUNYUSxNQUFNO1lBQ05DLFNBQVM7Z0JBQ1BDLFdBQVc7Z0JBQ1hDLFNBQVNsQjtnQkFDVG1CLE9BQU87WUFDVDtRQUNGO1FBQ0FQLGFBQWE7UUFDYkYsT0FBT1UsSUFBSSxDQUFDO0lBQ2Q7SUFFQSxlQUFlQztZQUVDUjtRQURkRCxhQUFhO1FBQ2IsTUFBTU8sU0FBUU4sb0JBQUFBLFNBQVNTLE9BQU8sY0FBaEJULHdDQUFBQSxrQkFBa0JVLEtBQUs7UUFDckMsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTXpCLDJDQUFHQSxDQUFDMEIsSUFBSSxDQUFDLFVBQVU7Z0JBQ3hDTjtZQUNGO1lBRUEsSUFBSUssU0FBU0UsTUFBTSxLQUFLLEtBQUs7Z0JBQzNCLE1BQU1DLE9BQU8sTUFBTUgsU0FBU0csSUFBSTtnQkFDaEMsTUFBTTNCLFNBQVMyQixLQUFLQyxFQUFFO2dCQUV0QnJCLGFBQWE7b0JBQ1hRLE1BQU07b0JBQ05DLFNBQVM7d0JBQ1BDLFdBQVc7d0JBQ1hDLFNBQVNsQjt3QkFDVG1CO29CQUNGO2dCQUNGO2dCQUNBLElBQUk7d0JBRWVVO29CQURqQixNQUFNQSxXQUFXLE1BQU05QiwyQ0FBR0EsQ0FBQytCLEdBQUcsQ0FBQyxZQUFrQixPQUFOWDtvQkFDM0NWLGtCQUFpQm9CLGlCQUFBQSxTQUFTRixJQUFJLGNBQWJFLHFDQUFBQSxlQUFlRSxRQUFRO2dCQUMxQyxFQUFFLE9BQU9DLE9BQU87b0JBQ2RDLFFBQVFELEtBQUssQ0FBQyw0QkFBNEJBO2dCQUM1QztZQUNGLE9BQU87Z0JBQ0xwQixhQUFhO2dCQUNiLE1BQU0sSUFBSXNCLE1BQU07WUFDbEI7UUFDRixFQUFFLE9BQU9DLEtBQUs7WUFDWnZCLGFBQWE7WUFDYnFCLFFBQVFELEtBQUssQ0FBQyxxQkFBcUJHO1FBQ3JDO0lBQ0Y7SUFFQTNDLGdEQUFTQSxDQUFDO1FBQ1JnQixjQUFjRSxPQUFPVSxJQUFJLENBQUM7SUFDNUIsR0FBRztRQUFDWjtLQUFXO0lBRWYscUJBQ0UsOERBQUM0QjtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNDO29DQUFHRCxXQUFVOzs7Ozs7OENBQ2QsOERBQUNFO29DQUFFRixXQUFVOzhDQUFnRDs7Ozs7Ozs7Ozs7O3dCQUk5RDFCLDBCQUNDLDhEQUFDeUI7NEJBQUlDLFdBQVU7c0NBQWlCOzs7OztzREFFaEM7OzhDQUNFLDhEQUFDRDtvQ0FBSUMsV0FBVTs7Ozs7OzhDQUNmLDhEQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNHOzRDQUNDQyxVQUFVOUI7NENBQ1YrQixTQUFTNUI7NENBQ1R1QixXQUFZO3NEQUNiOzs7Ozs7c0RBR0QsOERBQUNHOzRDQUNDSCxXQUFVOzRDQUNWSSxVQUFVOUI7NENBQ1YrQixTQUFTckI7c0RBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQU9ULDhEQUFDZTtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ3ZDLG1EQUFLQTt3QkFDSjZDLEtBQUk7d0JBQ0pOLFdBQVU7d0JBQ1ZPLEtBQUk7d0JBQ0pDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEI7R0EzR012Qzs7UUFDaUNYLHlEQUFPQTtRQUNmQyx1REFBTUE7UUFDcEJDLHNEQUFTQTs7O0tBSHBCUztBQTZHTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbG9naW4udHN4PzExZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJ0AvY29udGV4dC9BdXRoQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VBcHAgfSBmcm9tICdAL2NvbnRleHQvQXBwQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyBhcGkgfSBmcm9tICdAL2xpYi9heGlvcyc7XG5cbmNvbnN0IHVzZXJJRCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsIDE0KTtcbmNvbnN0IE9UUCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpO1xuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcbiAgY29uc3QgeyBkaXNwYXRjaEF1dGgsIGlzTG9nZ2VkSW4gfSA9IHVzZUF1dGgoKTtcbiAgY29uc3QgeyBsb2FkVXNlclNldHRpbmdzIH0gPSB1c2VBcHAoKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgZW1haWxSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4oKTtcblxuICBjb25zdCBsb2dpbkFub255bW91c2x5ID0gKCkgPT4ge1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICBkaXNwYXRjaEF1dGgoe1xuICAgICAgdHlwZTogJ0xPR0lOJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgbG9naW5UeXBlOiAnYW5vbnltb3VzJyxcbiAgICAgICAgbG9naW5JZDogdXNlcklELFxuICAgICAgICBlbWFpbDogbnVsbCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICByb3V0ZXIucHVzaCgnLycpO1xuICB9O1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGxvZ2luKCkge1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICBjb25zdCBlbWFpbCA9IGVtYWlsUmVmLmN1cnJlbnQ/LnZhbHVlO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KCcvbG9naW4nLCB7XG4gICAgICAgIGVtYWlsLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgY29uc3QgdXNlcklEID0gZGF0YS5pZDtcblxuICAgICAgICBkaXNwYXRjaEF1dGgoe1xuICAgICAgICAgIHR5cGU6ICdMT0dJTicsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgbG9naW5UeXBlOiAnZW1haWwnLFxuICAgICAgICAgICAgbG9naW5JZDogdXNlcklELFxuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCBhcGkuZ2V0KGAvcHJvZmlsZS8ke2VtYWlsfWApO1xuICAgICAgICAgIGxvYWRVc2VyU2V0dGluZ3ModXNlckRhdGEuZGF0YT8uc2V0dGluZ3MpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgdXNlciBkYXRhOicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMb2dpbiBmYWlsZWQnKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2dnaW5nIGluOicsIGVycik7XG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpc0xvZ2dlZEluICYmIHJvdXRlci5wdXNoKCcvJyk7XG4gIH0sIFtpc0xvZ2dlZEluXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYmctbGlnaHQgZGFyazpiZy1wcmltYXJ5IGgtWzEwMHZoXSB3LVsxMDB2d10gdGV4dC1wcmltYXJ5IGRhcms6dGV4dC13aGl0ZSBmbGV4Jz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLWZ1bGwgdy1mdWxsIG1heC13LVsxNzUwcHhdIGZsZXgnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC1jb2wgc206dy0yLzQgdy1mdWxsIGdhcC00IHB4LTQnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LWNvbCBnYXAtMiB3LTQvNSBzbTp3LWZ1bGwnPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtNHhsIDJ4bDp0ZXh0LTV4bCc+PC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1tZWRpdW0gdGV4dC0yeGwgdGV4dC1jZW50ZXIgMnhsOnRleHQtM3hsJz5cbiAgICAgICAgICAgICAgQ2hhdCBhbm9ueW1vdXNseSBhbmQgc2FmZWx5IHdpdGggcGVvcGxlIGZvciBmcmVlXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1cHBlcmNhc2UgcHktNSc+UHJvY2Vzc2luZyBMb2dpbjwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy00LzUnPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBnYXAtMyBpdGVtcy1jZW50ZXIgdy00LzUgc206dy1mdWxsIGp1c3RpZnktY2VudGVyIGZsZXgtd3JhcCc+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzTG9hZGluZ31cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2xvZ2luQW5vbnltb3VzbHl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlIGJnLXNlY29uZGFyeSBoLTEwIHB4LTEwIGZvbnQtbGlnaHQgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1tZGB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTG9naW4gQW5vbnltb3VzbHlcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2gtMTAgcHgtMTAgYmctaGlnaGxpZ2h0IHJvdW5kZWQtbWQgY3Vyc29yLXBvaW50ZXInXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17bG9naW59XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtZnVsbCBiZy1zZWNvbmRhcnkgdy0yLzQgc206ZmxleCBoaWRkZW4gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTQgcmVsYXRpdmUnPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPScvbGFuZGluZyBwYWdlIGltYWdlLmpwZydcbiAgICAgICAgICAgIGNsYXNzTmFtZT0naC1hdXRvIHJvdW5kZWQtZnVsbCB3LWF1dG8gb2JqZWN0LWNvdmVyJ1xuICAgICAgICAgICAgYWx0PSdMYW5kaW5nIFBhZ2UgSW1hZ2UnXG4gICAgICAgICAgICBmaWxsXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VBdXRoIiwidXNlQXBwIiwidXNlUm91dGVyIiwiSW1hZ2UiLCJhcGkiLCJ1c2VySUQiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzbGljZSIsIk9UUCIsIkxvZ2luIiwiZGlzcGF0Y2hBdXRoIiwiaXNMb2dnZWRJbiIsImxvYWRVc2VyU2V0dGluZ3MiLCJyb3V0ZXIiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJlbWFpbFJlZiIsImxvZ2luQW5vbnltb3VzbHkiLCJ0eXBlIiwicGF5bG9hZCIsImxvZ2luVHlwZSIsImxvZ2luSWQiLCJlbWFpbCIsInB1c2giLCJsb2dpbiIsImN1cnJlbnQiLCJ2YWx1ZSIsInJlc3BvbnNlIiwicG9zdCIsInN0YXR1cyIsImRhdGEiLCJpZCIsInVzZXJEYXRhIiwiZ2V0Iiwic2V0dGluZ3MiLCJlcnJvciIsImNvbnNvbGUiLCJFcnJvciIsImVyciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsImJ1dHRvbiIsImRpc2FibGVkIiwib25DbGljayIsInNyYyIsImFsdCIsImZpbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/login.tsx\n"));

/***/ })

});