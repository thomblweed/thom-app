"use strict";
(self["webpackChunklogin"] = self["webpackChunklogin"] || []).push([["src_state_AuthProvider_tsx"],{

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config)
/* harmony export */ });
const config = {
  development: {
    api: {
      auth: {
        baseUrl: "http://localhost:3001"
      }
    }
  },
  test: {
    api: {
      auth: {
        baseUrl: "http://testurl"
      }
    }
  },
  production: {
    api: {
      auth: {
        baseUrl: "http://testurl"
      }
    }
  }
};



/***/ }),

/***/ "./src/hooks/useAuth.ts":
/*!******************************!*\
  !*** ./src/hooks/useAuth.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAuth": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared */ "webpack/sharing/consume/default/shared");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shared__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useAxios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useAxios */ "./src/hooks/useAxios.ts");



const statusNotLoading = (status) => status !== shared__WEBPACK_IMPORTED_MODULE_1__.Status.LOADING;
const useAuth = () => {
  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [userStatus, setUserStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(shared__WEBPACK_IMPORTED_MODULE_1__.Status.LOADING);
  const [{ axiosResponse: userResponse, status }, getUser] = (0,_useAxios__WEBPACK_IMPORTED_MODULE_2__.useAxios)("/api/users/currentuser", "GET");
  const [{ axiosResponse: loginResponse, status: loginStatus }, signin] = (0,_useAxios__WEBPACK_IMPORTED_MODULE_2__.useAxios)("/api/users/signin", "POST", true);
  const [{ axiosResponse: logoutResponse, status: logoutStatus }, signout] = (0,_useAxios__WEBPACK_IMPORTED_MODULE_2__.useAxios)("/api/users/signout", "POST", true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    statusNotLoading(status) && setUserStatus(status);
  }, [status]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    statusNotLoading(loginStatus) && setUserStatus(loginStatus);
  }, [loginStatus]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    statusNotLoading(logoutStatus) && setUserStatus(logoutStatus);
  }, [logoutStatus]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    loginResponse && setUser(loginResponse.data);
  }, [loginResponse]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    userResponse && setUser(userResponse.data);
  }, [userResponse]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    logoutResponse && setUser(null);
  }, [logoutResponse]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    user,
    userStatus,
    signin,
    signout,
    getUser
  }), [user, userStatus, signin, signout, getUser]);
};



/***/ }),

/***/ "./src/hooks/useAxios.ts":
/*!*******************************!*\
  !*** ./src/hooks/useAxios.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAxios": () => (/* binding */ useAxios)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "webpack/sharing/consume/default/axios/axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared */ "webpack/sharing/consume/default/shared");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shared__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/config.ts");
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var _a;




const env = (_a = "development") != null ? _a : "development";
const baseUrl = _config__WEBPACK_IMPORTED_MODULE_3__.config[env].api.auth.baseUrl;
const useAxios = (relativeUrl, type, manual) => {
  const [axiosState, setAxiosState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    axiosResponse: null,
    status: shared__WEBPACK_IMPORTED_MODULE_2__.Status.LOADING
  });
  const callAxios = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((data) => __async(undefined, null, function* () {
    try {
      const res = yield axios__WEBPACK_IMPORTED_MODULE_1___default()(__spreadValues({
        method: type,
        url: new URL(relativeUrl, baseUrl).toString(),
        withCredentials: true
      }, data && { data }));
      setAxiosState({ axiosResponse: res, status: shared__WEBPACK_IMPORTED_MODULE_2__.Status.DONE });
    } catch (error) {
      setAxiosState((state) => __spreadProps(__spreadValues({}, state), { status: shared__WEBPACK_IMPORTED_MODULE_2__.Status.ERROR }));
    }
  }), [relativeUrl, type]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    !axiosState.axiosResponse && !manual && callAxios();
  }, [axiosState.axiosResponse, manual, callAxios]);
  return [axiosState, callAxios];
};



/***/ }),

/***/ "./src/state/AuthContext.ts":
/*!**********************************!*\
  !*** ./src/state/AuthContext.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthContext": () => (/* binding */ AuthContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared */ "webpack/sharing/consume/default/shared");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shared__WEBPACK_IMPORTED_MODULE_1__);


const AuthContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  user: null,
  userStatus: shared__WEBPACK_IMPORTED_MODULE_1__.Status.LOADING,
  signin: () => {
  },
  signout: () => {
  },
  getUser: () => {
  }
});


/***/ }),

/***/ "./src/state/AuthProvider.tsx":
/*!************************************!*\
  !*** ./src/state/AuthProvider.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthProvider": () => (/* binding */ AuthProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useAuth */ "./src/hooks/useAuth.ts");
/* harmony import */ var _AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthContext */ "./src/state/AuthContext.ts");



const AuthProvider = ({ children }) => {
  const auth = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_1__.useAuth)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthContext.Provider, {
    value: auth
  }, children);
};



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQ1IsS0FBSyxJQUFJLElBQUksYUFBYSxPQUFPLEVBQUUsU0FBUztBQUFBLFFBQzVDLGlCQUFpQjtBQUFBLFNBQ2IsUUFBUSxFQUFFLEtBQUssRUFDcEI7QUFDRCxvQkFBYyxFQUFFLGVBQWUsS0FBSyxRQUFRLCtDQUFXLENBQUMsQ0FBQztBQUFBLElBQzNELFNBQVMsT0FBUDtBQUNBLG9CQUFjLENBQUMsVUFBVyxpQ0FBSyxRQUFMLEVBQVksUUFBUSxnREFBWSxDQUFDLEVBQUU7QUFBQSxJQUMvRDtBQUFBLEVBQ0YsSUFDQSxDQUFDLGFBQWEsSUFBSSxDQUNwQjtBQUVBLGtEQUFTLENBQUMsTUFBTTtBQUNkLEtBQUMsV0FBVyxpQkFBaUIsQ0FBQyxVQUFVLFVBQVU7QUFBQSxFQUNwRCxHQUFHLENBQUMsV0FBVyxlQUFlLFFBQVEsU0FBUyxDQUFDO0FBRWhELFNBQU8sQ0FBQyxZQUFZLFNBQVM7QUFDL0I7QUFFb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRHBCO0FBR0E7QUFFTyxNQUFNLGNBQTZCLG9EQUFhLENBQU87QUFBQSxFQUM1RCxNQUFNO0FBQUEsRUFDTixZQUFZLGtEQUFjO0FBQVAsRUFDbkIsUUFBUSxNQUFNO0FBQUEsRUFBQztBQUFBLEVBQ2YsU0FBUyxNQUFNO0FBQUEsRUFBQztBQUFBLEVBQ2hCLFNBQVMsTUFBTTtBQUFBLEVBQUM7QUFDbEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZEO0FBRUE7QUFDQTtBQUdBLE1BQU0sZUFBa0MsQ0FBQyxFQUFFLGVBQWU7QUFDeEQsUUFBTSxPQUFhLHVEQUFPLENBQUM7QUFDM0IsU0FBTywyRUFBQyw4REFBb0IsRUFBcEI7QUFBQSxJQUFxQixPQUFPO0FBQUEsS0FBTyxRQUFTO0FBQ3REO0FBRXdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9naW4vLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovL2xvZ2luLy4vc3JjL2hvb2tzL3VzZUF1dGgudHMiLCJ3ZWJwYWNrOi8vbG9naW4vLi9zcmMvaG9va3MvdXNlQXhpb3MudHMiLCJ3ZWJwYWNrOi8vbG9naW4vLi9zcmMvc3RhdGUvQXV0aENvbnRleHQudHMiLCJ3ZWJwYWNrOi8vbG9naW4vLi9zcmMvc3RhdGUvQXV0aFByb3ZpZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIEVudmlyb25tZW50ID0gJ2RldmVsb3BtZW50JyB8ICd0ZXN0JyB8ICdwcm9kdWN0aW9uJztcblxudHlwZSBDb25maWcgPSB7XG4gIFtrZXkgaW4gRW52aXJvbm1lbnRdOiB7XG4gICAgYXBpOiB7XG4gICAgICBhdXRoOiB7XG4gICAgICAgIGJhc2VVcmw6IHN0cmluZztcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbn07XG5cbmNvbnN0IGNvbmZpZzogQ29uZmlnID0ge1xuICBkZXZlbG9wbWVudDoge1xuICAgIGFwaToge1xuICAgICAgYXV0aDoge1xuICAgICAgICBiYXNlVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAxJ1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgdGVzdDoge1xuICAgIGFwaToge1xuICAgICAgYXV0aDoge1xuICAgICAgICBiYXNlVXJsOiAnaHR0cDovL3Rlc3R1cmwnXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBwcm9kdWN0aW9uOiB7XG4gICAgYXBpOiB7XG4gICAgICBhdXRoOiB7XG4gICAgICAgIGJhc2VVcmw6ICdodHRwOi8vdGVzdHVybCdcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCB0eXBlIHsgQ29uZmlnLCBFbnZpcm9ubWVudCB9O1xuZXhwb3J0IHsgY29uZmlnIH07XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlTWVtbywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3RhdHVzIH0gZnJvbSAnc2hhcmVkJztcblxuaW1wb3J0IHsgQ3JlZGVudGlhbHMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2NyZWRlbnRpYWxzJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3VzZXInO1xuaW1wb3J0IHsgdXNlQXhpb3MgfSBmcm9tICcuL3VzZUF4aW9zJztcblxuaW50ZXJmYWNlIEF1dGgge1xuICB1c2VyOiBVc2VyIHwgbnVsbDtcbiAgdXNlclN0YXR1czogU3RhdHVzO1xuICBzaWduaW46IChkYXRhOiBDcmVkZW50aWFscykgPT4gdm9pZDtcbiAgc2lnbm91dDogKCkgPT4gdm9pZDtcbiAgZ2V0VXNlcjogKCkgPT4gdm9pZDtcbn1cblxuY29uc3Qgc3RhdHVzTm90TG9hZGluZyA9IChzdGF0dXM6IFN0YXR1cykgPT4gc3RhdHVzICE9PSBTdGF0dXMuTE9BRElORztcblxuY29uc3QgdXNlQXV0aCA9ICgpOiBBdXRoID0+IHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlciB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbdXNlclN0YXR1cywgc2V0VXNlclN0YXR1c10gPSB1c2VTdGF0ZTxTdGF0dXM+KFN0YXR1cy5MT0FESU5HKTtcbiAgY29uc3QgW3sgYXhpb3NSZXNwb25zZTogdXNlclJlc3BvbnNlLCBzdGF0dXMgfSwgZ2V0VXNlcl0gPSB1c2VBeGlvczxcbiAgICB1bmRlZmluZWQsXG4gICAgVXNlclxuICA+KCcvYXBpL3VzZXJzL2N1cnJlbnR1c2VyJywgJ0dFVCcpO1xuICBjb25zdCBbeyBheGlvc1Jlc3BvbnNlOiBsb2dpblJlc3BvbnNlLCBzdGF0dXM6IGxvZ2luU3RhdHVzIH0sIHNpZ25pbl0gPVxuICAgIHVzZUF4aW9zPENyZWRlbnRpYWxzLCBVc2VyPignL2FwaS91c2Vycy9zaWduaW4nLCAnUE9TVCcsIHRydWUpO1xuICBjb25zdCBbeyBheGlvc1Jlc3BvbnNlOiBsb2dvdXRSZXNwb25zZSwgc3RhdHVzOiBsb2dvdXRTdGF0dXMgfSwgc2lnbm91dF0gPVxuICAgIHVzZUF4aW9zPHVuZGVmaW5lZCwgdW5rbm93bj4oJy9hcGkvdXNlcnMvc2lnbm91dCcsICdQT1NUJywgdHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzdGF0dXNOb3RMb2FkaW5nKHN0YXR1cykgJiYgc2V0VXNlclN0YXR1cyhzdGF0dXMpO1xuICB9LCBbc3RhdHVzXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc3RhdHVzTm90TG9hZGluZyhsb2dpblN0YXR1cykgJiYgc2V0VXNlclN0YXR1cyhsb2dpblN0YXR1cyk7XG4gIH0sIFtsb2dpblN0YXR1c10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHN0YXR1c05vdExvYWRpbmcobG9nb3V0U3RhdHVzKSAmJiBzZXRVc2VyU3RhdHVzKGxvZ291dFN0YXR1cyk7XG4gIH0sIFtsb2dvdXRTdGF0dXNdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2dpblJlc3BvbnNlICYmIHNldFVzZXIobG9naW5SZXNwb25zZS5kYXRhKTtcbiAgfSwgW2xvZ2luUmVzcG9uc2VdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB1c2VyUmVzcG9uc2UgJiYgc2V0VXNlcih1c2VyUmVzcG9uc2UuZGF0YSk7XG4gIH0sIFt1c2VyUmVzcG9uc2VdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2dvdXRSZXNwb25zZSAmJiBzZXRVc2VyKG51bGwpO1xuICB9LCBbbG9nb3V0UmVzcG9uc2VdKTtcblxuICByZXR1cm4gdXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgdXNlcixcbiAgICAgIHVzZXJTdGF0dXMsXG4gICAgICBzaWduaW4sXG4gICAgICBzaWdub3V0LFxuICAgICAgZ2V0VXNlclxuICAgIH0pLFxuICAgIFt1c2VyLCB1c2VyU3RhdHVzLCBzaWduaW4sIHNpZ25vdXQsIGdldFVzZXJdXG4gICk7XG59O1xuXG5leHBvcnQgeyB1c2VBdXRoLCBBdXRoIH07XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcywgeyBBeGlvc1Jlc3BvbnNlLCBNZXRob2QgfSBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBTdGF0dXMgfSBmcm9tICdzaGFyZWQnO1xuXG5pbXBvcnQgeyBjb25maWcsIEVudmlyb25tZW50IH0gZnJvbSAnLi4vY29uZmlnJztcblxuY29uc3QgZW52OiBFbnZpcm9ubWVudCA9IChwcm9jZXNzLmVudi5OT0RFX0VOViBhcyBFbnZpcm9ubWVudCkgPz8gJ2RldmVsb3BtZW50JztcbmNvbnN0IGJhc2VVcmw6IHN0cmluZyA9IGNvbmZpZ1tlbnZdLmFwaS5hdXRoLmJhc2VVcmw7XG5cbmludGVyZmFjZSBSZXNwb25zZTxSZXNwb25zZVR5cGU+IHtcbiAgYXhpb3NSZXNwb25zZTogQXhpb3NSZXNwb25zZTxSZXNwb25zZVR5cGU+IHwgbnVsbDtcbiAgc3RhdHVzOiBTdGF0dXM7XG59XG5cbnR5cGUgQXhpb3M8RGF0YVR5cGUsIFJlc3BvbnNlVHlwZT4gPSBbXG4gIFJlc3BvbnNlPFJlc3BvbnNlVHlwZT4sXG4gIChkYXRhPzogRGF0YVR5cGUpID0+IHZvaWRcbl07XG5cbmNvbnN0IHVzZUF4aW9zID0gPERhdGFUeXBlLCBSZXNwb25zZVR5cGU+KFxuICByZWxhdGl2ZVVybDogc3RyaW5nLFxuICB0eXBlOiBNZXRob2QsXG4gIG1hbnVhbD86IGJvb2xlYW5cbik6IEF4aW9zPERhdGFUeXBlLCBSZXNwb25zZVR5cGU+ID0+IHtcbiAgY29uc3QgW2F4aW9zU3RhdGUsIHNldEF4aW9zU3RhdGVdID0gdXNlU3RhdGU8UmVzcG9uc2U8UmVzcG9uc2VUeXBlPj4oe1xuICAgIGF4aW9zUmVzcG9uc2U6IG51bGwsXG4gICAgc3RhdHVzOiBTdGF0dXMuTE9BRElOR1xuICB9KTtcblxuICBjb25zdCBjYWxsQXhpb3MgPSB1c2VDYWxsYmFjayhcbiAgICBhc3luYyAoZGF0YT86IERhdGFUeXBlKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcyh7XG4gICAgICAgICAgbWV0aG9kOiB0eXBlLFxuICAgICAgICAgIHVybDogbmV3IFVSTChyZWxhdGl2ZVVybCwgYmFzZVVybCkudG9TdHJpbmcoKSxcbiAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgICAgLi4uKGRhdGEgJiYgeyBkYXRhIH0pXG4gICAgICAgIH0pO1xuICAgICAgICBzZXRBeGlvc1N0YXRlKHsgYXhpb3NSZXNwb25zZTogcmVzLCBzdGF0dXM6IFN0YXR1cy5ET05FIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgc2V0QXhpb3NTdGF0ZSgoc3RhdGUpID0+ICh7IC4uLnN0YXRlLCBzdGF0dXM6IFN0YXR1cy5FUlJPUiB9KSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbcmVsYXRpdmVVcmwsIHR5cGVdXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAhYXhpb3NTdGF0ZS5heGlvc1Jlc3BvbnNlICYmICFtYW51YWwgJiYgY2FsbEF4aW9zKCk7XG4gIH0sIFtheGlvc1N0YXRlLmF4aW9zUmVzcG9uc2UsIG1hbnVhbCwgY2FsbEF4aW9zXSk7XG5cbiAgcmV0dXJuIFtheGlvc1N0YXRlLCBjYWxsQXhpb3NdO1xufTtcblxuZXhwb3J0IHsgdXNlQXhpb3MgfTtcbiIsImltcG9ydCB7IENvbnRleHQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEF1dGggfSBmcm9tICcuLi9ob29rcy91c2VBdXRoJztcbmltcG9ydCB7IFN0YXR1cyB9IGZyb20gJ3NoYXJlZCc7XG5cbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dDogQ29udGV4dDxBdXRoPiA9IGNyZWF0ZUNvbnRleHQ8QXV0aD4oe1xuICB1c2VyOiBudWxsLFxuICB1c2VyU3RhdHVzOiBTdGF0dXMuTE9BRElORyxcbiAgc2lnbmluOiAoKSA9PiB7fSxcbiAgc2lnbm91dDogKCkgPT4ge30sXG4gIGdldFVzZXI6ICgpID0+IHt9XG59KTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1mdW5jdGlvbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQXV0aCwgdXNlQXV0aCB9IGZyb20gJy4uL2hvb2tzL3VzZUF1dGgnO1xuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuL0F1dGhDb250ZXh0JztcbmltcG9ydCB7IEF1dGhQcm92aWRlclN0YXRlIH0gZnJvbSAnc2hhcmVkJztcblxuY29uc3QgQXV0aFByb3ZpZGVyOiBBdXRoUHJvdmlkZXJTdGF0ZSA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgYXV0aDogQXV0aCA9IHVzZUF1dGgoKTtcbiAgcmV0dXJuIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17YXV0aH0+e2NoaWxkcmVufTwvQXV0aENvbnRleHQuUHJvdmlkZXI+O1xufTtcblxuZXhwb3J0IHsgQXV0aFByb3ZpZGVyIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=