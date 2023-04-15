/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



const contactDis = () => {
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.navs)();
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.display)('Lorem ipsum -- Contact');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactDis);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "display": () => (/* binding */ display),
/* harmony export */   "navs": () => (/* binding */ navs)
/* harmony export */ });
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");



const content = document.getElementById('content');

const navs = () => {
  const navContainer = document.createElement('div');
  const home = document.createElement('p');
  const menu = document.createElement('p');
  const contact = document.createElement('p');

  home.innerHTML = '<a href="#">Home</a>';
  menu.innerHTML = '<a href="#">Menu </a>';
  contact.innerHTML = '<a href="#">Contact </a>';

  navContainer.appendChild(home);
  navContainer.appendChild(menu);
  navContainer.appendChild(contact);

  content.appendChild(navContainer);

  // styles

  navContainer.style =
    'display: flex; justify-content: space-around; width: 90vw; margin: 0 auto;';
  home.addEventListener('click', () => {
    alert('Welcome to home!');
  });

  menu.addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  contact.addEventListener('click', _contact_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
};

const display = (text) => {
  const mainContent = document.createElement('div');
  const para = document.createElement('p');
  para.innerHTML = text;
  mainContent.style =
    'width: 802px; height: 70vh; border: 1px solid; margin: 0 auto; margin-top: 50px;';

  mainContent.appendChild(para);
  content.appendChild(mainContent);
};

navs();
display('Lorem ipsum --Home');


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



const menuDis = () => {
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.navs)();
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.display)('Lorem ipsum -- Menu');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuDis);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNHOztBQUVyQztBQUNBLEVBQUUsK0NBQUk7QUFDTixFQUFFLGtEQUFPO0FBQ1Q7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSTTtBQUNNOztBQUV0Qzs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxvQkFBb0IsK0JBQStCLGFBQWEsZUFBZTtBQUMvRTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxpQ0FBaUMsZ0RBQU87QUFDeEMsb0NBQW9DLG1EQUFVO0FBQzlDOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsY0FBYyxtQkFBbUIsZ0JBQWdCLGlCQUFpQjs7QUFFckY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q2tDO0FBQ0c7O0FBRXJDO0FBQ0EsRUFBRSwrQ0FBSTtBQUNOLEVBQUUsa0RBQU87QUFDVDs7QUFFQSxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7VUNSdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG5hdnMgfSBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCB7IGRpc3BsYXkgfSBmcm9tICcuL2luZGV4LmpzJztcblxuY29uc3QgY29udGFjdERpcyA9ICgpID0+IHtcbiAgbmF2cygpO1xuICBkaXNwbGF5KCdMb3JlbSBpcHN1bSAtLSBDb250YWN0Jyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0RGlzO1xuIiwiaW1wb3J0IG1lbnVEaXMgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBjb250YWN0RGlzIGZyb20gJy4vY29udGFjdC5qcyc7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5leHBvcnQgY29uc3QgbmF2cyA9ICgpID0+IHtcbiAgY29uc3QgbmF2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgaG9tZS5pbm5lckhUTUwgPSAnPGEgaHJlZj1cIiNcIj5Ib21lPC9hPic7XG4gIG1lbnUuaW5uZXJIVE1MID0gJzxhIGhyZWY9XCIjXCI+TWVudSA8L2E+JztcbiAgY29udGFjdC5pbm5lckhUTUwgPSAnPGEgaHJlZj1cIiNcIj5Db250YWN0IDwvYT4nO1xuXG4gIG5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lKTtcbiAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnUpO1xuICBuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChuYXZDb250YWluZXIpO1xuXG4gIC8vIHN0eWxlc1xuXG4gIG5hdkNvbnRhaW5lci5zdHlsZSA9XG4gICAgJ2Rpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyB3aWR0aDogOTB2dzsgbWFyZ2luOiAwIGF1dG87JztcbiAgaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhbGVydCgnV2VsY29tZSB0byBob21lIScpO1xuICB9KTtcblxuICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWVudURpcyk7XG4gIGNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250YWN0RGlzKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkaXNwbGF5ID0gKHRleHQpID0+IHtcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcGFyYS5pbm5lckhUTUwgPSB0ZXh0O1xuICBtYWluQ29udGVudC5zdHlsZSA9XG4gICAgJ3dpZHRoOiA4MDJweDsgaGVpZ2h0OiA3MHZoOyBib3JkZXI6IDFweCBzb2xpZDsgbWFyZ2luOiAwIGF1dG87IG1hcmdpbi10b3A6IDUwcHg7JztcblxuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChwYXJhKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGVudCk7XG59O1xuXG5uYXZzKCk7XG5kaXNwbGF5KCdMb3JlbSBpcHN1bSAtLUhvbWUnKTtcbiIsImltcG9ydCB7IG5hdnMgfSBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCB7IGRpc3BsYXkgfSBmcm9tICcuL2luZGV4LmpzJztcblxuY29uc3QgbWVudURpcyA9ICgpID0+IHtcbiAgbmF2cygpO1xuICBkaXNwbGF5KCdMb3JlbSBpcHN1bSAtLSBNZW51Jyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZW51RGlzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==