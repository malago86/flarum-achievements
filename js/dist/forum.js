module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./src/common/models/Achievement.js":
/*!******************************************!*\
  !*** ./src/common/models/Achievement.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Achievement; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/mixin */ "flarum/utils/mixin");
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_3__);



/*
 *  Achievements Extension for Flarum
 *  Author: Miguel A. Lago
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 */



var Achievement = /*#__PURE__*/function (_Model) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Achievement, _Model);

  function Achievement() {
    return _Model.apply(this, arguments) || this;
  }

  return Achievement;
}(flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a);



Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(Achievement.prototype, {
  id: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute("id"),
  name: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute("name"),
  description: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('description'),
  computation: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('computation'),
  points: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('points'),
  rectangle: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('rectangle'),
  image: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('image'),
  "new": flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('new'),
  active: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('active'),
  hidden: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('hidden')
});

/***/ }),

/***/ "./src/common/models/AchievementUser.js":
/*!**********************************************!*\
  !*** ./src/common/models/AchievementUser.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AchievementUser; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_2__);



/*
 *  Achievements Extension for Flarum
 *  Author: Miguel A. Lago
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 */


var AchievementUser = /*#__PURE__*/function (_Model) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(AchievementUser, _Model);

  function AchievementUser() {
    return _Model.apply(this, arguments) || this;
  }

  return AchievementUser;
}(flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a);



Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(AchievementUser.prototype, {
  achievement_id: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute("achievement_id"),
  user_id: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('user_id'),
  "new": flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('new')
});

/***/ }),

/***/ "./src/common/registerModels.js":
/*!**************************************!*\
  !*** ./src/common/registerModels.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return registerModels; });
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/models/User */ "flarum/models/User");
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_models_User__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_Achievement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/Achievement */ "./src/common/models/Achievement.js");
/* harmony import */ var _models_AchievementUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/AchievementUser */ "./src/common/models/AchievementUser.js");
/*
 *  Achievements Extension for Flarum
 *  Author: Miguel A. Lago
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 */




function registerModels() {
  flarum_models_User__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.achievements = flarum_Model__WEBPACK_IMPORTED_MODULE_0___default.a.hasMany('achievements', 'achievement_user');
  flarum_models_User__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.achievement_user = flarum_Model__WEBPACK_IMPORTED_MODULE_0___default.a.hasMany('achievement_user');
  app.store.models.achievements = _models_Achievement__WEBPACK_IMPORTED_MODULE_2__["default"];
  app.store.models.achievement_user = _models_AchievementUser__WEBPACK_IMPORTED_MODULE_3__["default"];
}

/***/ }),

/***/ "./src/forum/components/AchievementsPage.js":
/*!**************************************************!*\
  !*** ./src/forum/components/AchievementsPage.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AchievementsPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Page */ "flarum/common/components/Page");
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Link */ "flarum/components/Link");
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/helpers/humanTime */ "flarum/helpers/humanTime");
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_components_Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/components/Tooltip */ "flarum/components/Tooltip");
/* harmony import */ var flarum_components_Tooltip__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Tooltip__WEBPACK_IMPORTED_MODULE_7__);









var AchievementsPage = /*#__PURE__*/function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AchievementsPage, _Page);

  function AchievementsPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = AchievementsPage.prototype;

  _proto.oninit = function oninit(vnode) {
    var _this = this;

    this.loading = true;

    _Page.prototype.oninit.call(this, vnode);

    if (!app.session.user) {
      m.route.set('/');
    }

    this.achievements_ids = [];
    app.data.resources.map(function (item) {
      if (item.type == "achievements") _this.achievements_ids.push(item.id);
    });
    this.achievements_all = [];
    this.html_user = "";
    this.html_all = "";
    this.points = 0;
    this.hidden_count = 0;
    app.store.find('achievements').then(function (val) {
      _this.achievements_all = val;

      _this.achievements_all.map(function (item) {
        var rectangle = item.rectangle().split(',');
        var html = "";

        if (item.image().includes("http")) {
          var style = "background:url(" + item.image() + ");\
            background-position:-" + rectangle[0] + "px -" + rectangle[1] + "px;\
            height:" + rectangle[2] + "px;\
            width:" + rectangle[3] + "px;";
          html = '<li>\
              <div class="AchievementsList-Item">\
                <div class="Badge Achievement" style="' + style + '" data-toggle="tooltip" title=' + item.name() + '></div>\
                  <table class="AchievementsList-info"><tr><td class="AchievementsList-name">' + item.name() + '</td><td class="AchievementsList-points">' + app.translator.trans("malago-achievements.forum.achievement_points") + ": " + item.points() + '</td></tr></table>\
                  <div class="AchievementsList-description">' + item.description() + '</div>\
              </div>\
            </li>';
        } else {
          html = '<li>\
              <div class="AchievementsList-Item">\
                <div class="Badge Achievement--Icon"><i class="icon ' + item.image() + '"></i></div>\
                <table class="AchievementsList-info"><tr><td class="AchievementsList-name">' + item.name() + '</td><td class="AchievementsList-points">' + app.translator.trans("malago-achievements.forum.achievement_points") + ": " + item.points() + '</td></tr></table>\
                <div class="AchievementsList-description">' + item.description() + '</div>\
              </div>\
            </li>';
        }

        if (_this.achievements_ids.indexOf(item.data.id) !== -1) {
          _this.html_user += html;
          _this.points += parseFloat(item.points());
        } else if (item.hidden() == 0) _this.html_all += html;else _this.hidden_count += 1;
      });

      _this.loading = false;
      m.redraw();
    }); // this.achievements = app.forum.data.relationships.achievements_all.data;
  };

  _proto.view = function view() {
    if (this.loading) {
      return m(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default.a, null);
    }

    return m("div", {
      className: "IndexPage"
    }, flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.hero(), m("div", {
      className: "container"
    }, m("div", {
      className: "sideNavContainer"
    }, m("nav", {
      className: "IndexPage-nav sideNav"
    }, m("ul", null, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_5___default()(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.sidebarItems().toArray()))), m("div", {
      className: "IndexPage-results sideNavOffset"
    }, m("h2", null, app.translator.trans("malago-achievements.forum.your_achievements")), m("div", {
      className: "AchievementsList"
    }, m("ul", {
      className: "AchievementsList-achievements"
    }, m.trust(this.html_user), m("li", null, m("div", {
      "class": "AchievementsList-Item"
    }, m("div", {
      className: "AchievementsList-points AchievementsList-total",
      style: "color: black; border: 2px solid black;"
    }, app.translator.trans("malago-achievements.forum.achievement_total_points") + ": " + this.points))))), m("h2", null, app.translator.trans("malago-achievements.forum.other_achievements")), m("div", {
      className: "AchievementsList AchievementsList-Other"
    }, m("ul", {
      className: "AchievementsList-achievements"
    }, m.trust(this.html_all))), m("div", {
      className: "AchievementsHidden"
    }, this.hidden_count > 0 ? app.translator.trans("malago-achievements.forum.hidden_achievements") + ": " + this.hidden_count : "")))));
  };

  _proto.oncreate = function oncreate(vnode) {
    _Page.prototype.oncreate.call(this, vnode);

    app.setTitle(app.translator.trans("malago-achievements.forum.list_heading"));
    app.setTitleCount(0);
  };

  return AchievementsPage;
}(flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/CommentPost */ "flarum/components/CommentPost");
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Application */ "flarum/common/Application");
/* harmony import */ var flarum_common_Application__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Application__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modals_NewAchievementModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals/NewAchievementModal */ "./src/forum/modals/NewAchievementModal.js");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_AchievementsPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/AchievementsPage */ "./src/forum/components/AchievementsPage.js");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/components/LinkButton */ "flarum/components/LinkButton");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_components_Tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/components/Tooltip */ "flarum/components/Tooltip");
/* harmony import */ var flarum_components_Tooltip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Tooltip__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_components_UserCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/components/UserCard */ "flarum/components/UserCard");
/* harmony import */ var flarum_components_UserCard__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_components_UserCard__WEBPACK_IMPORTED_MODULE_9__);
/*
 *  Achievements Extension for Flarum
 *  Author: Miguel A. Lago
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 */
var _require = __webpack_require__(/*! ../common/registerModels */ "./src/common/registerModels.js"),
    registerModels = _require["default"];











app.initializers.add('malago-achievements', function (app) {
  app.routes['achievements'] = {
    path: '/achievements',
    component: _components_AchievementsPage__WEBPACK_IMPORTED_MODULE_6__["default"]
  };
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_4___default.a.prototype, 'navItems', function (items) {
    if (!app.session.user) {
      return;
    }

    items.add('achievements', m(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
      icon: "fas fa-trophy",
      href: app.route('achievements')
    }, app.translator.trans("malago-achievements.forum.list_heading")), -11);
  });
  registerModels();
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_UserCard__WEBPACK_IMPORTED_MODULE_9___default.a.prototype, 'view', function (element) {
    var points = 0; //comment.children[0].children[2].children.splice(0,0, m("div.Achievements--User"));

    var here = app.forum.attribute('malago-achievements.show-user-card'); // var element = this.element;
    // element.appendChild(m('div'));
    // $(element).append(m("div","HOLA"));
    //console.log(this.attrs.user);

    var list = m("div.UserCard-Achievement-list");

    if (here == "1" && element.attrs.className.includes("UserCard--popover")) {
      var achievements = this.attrs.user.achievements();

      if (achievements !== undefined) {
        Object.keys(achievements).forEach(function (obj) {
          var item = achievements[obj].data.attributes;
          var rectangle = item.rectangle.split(',');

          if (item.image.includes("http")) {
            var style = "background:url(" + item.image + ");\
              background-position:-" + rectangle[0] + "px -" + rectangle[1] + "px;\
              height:" + rectangle[2] + "px;\
              width:" + rectangle[3] + "px;\
              margin: -" + (rectangle[3] / 4 - 4) + "px;";
            list.children.push(m(flarum_components_Tooltip__WEBPACK_IMPORTED_MODULE_8___default.a, {
              text: item.name
            }, m("span.Badge.Achievement", {
              style: style
            }, "")));
          } else {
            list.children.push(m(flarum_components_Tooltip__WEBPACK_IMPORTED_MODULE_8___default.a, {
              text: item.name
            }, m("span.Badge.Achievement--Icon", m("i.icon." + item.image))));
          }

          points += item.points;
        });

        if (list.children.length > 0 && points > 0) {
          list.children.push(m(flarum_components_Tooltip__WEBPACK_IMPORTED_MODULE_8___default.a, {
            text: app.translator.trans("malago-achievements.forum.achievement_points")
          }, m("span.Achievement--Points", app.translator.trans("malago-achievements.forum.achievement_points") + ": ", m("span.Achievement--Points--Number", points))));
        }

        element.children.push(list);
      }
    }
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'view', function (comment) {
    var points = 0; //comment.children[0].children[2].children.splice(0,0, m("div.Achievements--User"));

    var here = app.forum.attribute('malago-achievements.show-post-footer');

    if (here == "1" && !this.attrs.post.data.attributes.isHidden) {
      this.attrs.post.data.attributes.achievements.forEach(function (item, index) {
        var rectangle = item.rectangle.split(',');

        if (item.image.includes("http")) {
          var style = "background:url(" + item.image + ");\
            background-position:-" + rectangle[0] + "px -" + rectangle[1] + "px;\
            height:" + rectangle[2] + "px;\
            width:" + rectangle[3] + "px;\
            margin: -" + (rectangle[3] / 4 - 4) + "px;";
          comment.children[0].children[2].children[0].children.push(m(flarum_components_Tooltip__WEBPACK_IMPORTED_MODULE_8___default.a, {
            text: item.name
          }, m("span.Badge.Achievement", {
            style: style
          }, "")));
        } else {
          comment.children[0].children[2].children[0].children.push(m(flarum_components_Tooltip__WEBPACK_IMPORTED_MODULE_8___default.a, {
            text: item.name
          }, m("span.Badge.Achievement--Icon", m("i.icon." + item.image))));
        }

        points += item.points;
      });

      if (comment.children[0].children[2].children[0].children.length > 0 && points > 0) {
        comment.children[0].children[2].children[0].children.push(m(flarum_components_Tooltip__WEBPACK_IMPORTED_MODULE_8___default.a, {
          text: app.translator.trans("malago-achievements.forum.achievement_points")
        }, m("span.Achievement--Points", app.translator.trans("malago-achievements.forum.achievement_points") + ": ", m("span.Achievement--Points--Number", points))));
      }
    }
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_common_Application__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'request', function (promise) {
    if (promise) {
      promise.then(function (data) {
        if (data && data.new_achievements !== undefined && data.new_achievements !== null && JSON.parse(data.new_achievements).length > 0) {
          app.modal.show(_modals_NewAchievementModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
            achievements: data.new_achievements
          });
        }
      });
    }
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_Page__WEBPACK_IMPORTED_MODULE_5___default.a.prototype, 'oncreate', function (promise) {
    if (app.session.user !== undefined) {
      setTimeout(function () {
        var new_achievements = app.session.user.achievements();

        if (new_achievements !== undefined && new_achievements !== null && new_achievements.length > 0) {
          var only_new_achievements = [];

          for (var i = 0; i < new_achievements.length; i++) {
            if (new_achievements[i].data.attributes["new"] == 1) {
              only_new_achievements.push(new_achievements[i].data.attributes);
              new_achievements[i].save({
                "new": 0,
                user_id: app.session.user.data.id
              });
            }
          }

          if (only_new_achievements.length > 0) app.modal.show(_modals_NewAchievementModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
            achievements: only_new_achievements
          });
        }
      }, 1000);
    }
  });
});

/***/ }),

/***/ "./src/forum/modals/NewAchievementModal.js":
/*!*************************************************!*\
  !*** ./src/forum/modals/NewAchievementModal.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewAchievementModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5__);


/*
 *  Achievements Extension for Flarum
 *  Author: Miguel A. Lago
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 */






var NewAchievementModal = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(NewAchievementModal, _Modal);

  function NewAchievementModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = NewAchievementModal.prototype;

  _proto.title = function title() {
    return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('malago-achievements.forum.new_achievement_title');
  };

  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);
  };

  _proto.fields = function fields() {
    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default.a();

    for (var i = 0; i < this.attrs.achievements.length; i++) {
      var rectangle = this.attrs.achievements[i].rectangle.split(',');

      if (this.attrs.achievements[i].image.includes("http")) {
        var style = "background:url(" + this.attrs.achievements[i].image + ");\
                    background-position:-" + rectangle[0] + "px -" + rectangle[1] + "px;\
                    height:" + rectangle[2] + "px;\
                    width:" + rectangle[3] + "px;";
        items.add("image" + i, m("div", {
          className: "Form-group"
        }, m("span", {
          "class": "Badge Achievement",
          style: style
        })), -10);
      } else {
        items.add("image" + i, m("div", {
          className: "Form-group"
        }, m("span", {
          "class": "Badge Achievement--Icon"
        }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()(this.attrs.achievements[i].image))), -10);
      }

      items.add("name" + i, m("div", {
        className: "Form-group"
      }, m("h1", null, this.attrs.achievements[i].name)), -10);
      items.add("description" + i, m("div", {
        className: "Form-group"
      }, m("h3", null, this.attrs.achievements[i].description)), -10);
    }

    items.add("close", m("div", {
      className: "NewAchievementModal--Button"
    }, flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a.component({
      type: "button",
      className: "Button Button--primary",
      onclick: this.hide.bind(this)
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("malago-achievements.forum.new_achievement_close"))), -10);
    return items;
  } // Hide the footer completely
  ;

  _proto.footer = function footer() {
    return null;
  };

  _proto.content = function content() {
    if (this.loading) {
      return m("div", {
        className: "Modal-body"
      }, m("div", {
        className: "Form"
      }, m("div", {
        className: "container"
      }, m(LoadingIndicator, null))));
    }

    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Modal--New-Achievement"
    }, this.fields().toArray()));
  } // Instead of hitting /register (which would change which user is connected in this session)
  // We just hit the API that's already used behind the scenes when registering
  // Doing it this way skips connecting the new account and just returns the new user data
  // onsubmit(e) {
  //     e.preventDefault();
  //     this.loading = true;
  //     app.request({
  //         url: app.forum.attribute('apiUrl') + '/users',
  //         method: 'POST',
  //         body: {
  //             data: {
  //                 attributes: this.submitData(),
  //             },
  //         },
  //         errorHandler: this.onerror.bind(this)
  //     }).then(
  //         payload => {
  //             const user = app.store.pushPayload(payload);
  //             // Add the missing groups relationship we can't include from the CreateUserController
  //             // Without this there's an error trying to access the user edit modal just after the redirect to the profile
  //             user.pushData({
  //                 relationships: {
  //                     groups: {
  //                         data: [],
  //                     },
  //                 },
  //             });
  //             m.route.set(app.route.user(user));
  //         },
  //         this.loaded.bind(this)
  //     );
  // }
  ;

  return NewAchievementModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_3___default.a);



/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/common/Application":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['common/Application']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/Application'];

/***/ }),

/***/ "flarum/common/components/Page":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Page']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Page'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/CommentPost":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['components/CommentPost']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/CommentPost'];

/***/ }),

/***/ "flarum/components/IndexPage":
/*!*************************************************************!*\
  !*** external "flarum.core.compat['components/IndexPage']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/IndexPage'];

/***/ }),

/***/ "flarum/components/Link":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Link']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Link'];

/***/ }),

/***/ "flarum/components/LinkButton":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/LinkButton']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LinkButton'];

/***/ }),

/***/ "flarum/components/LoadingIndicator":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['components/LoadingIndicator']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LoadingIndicator'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Modal'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/components/Tooltip":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['components/Tooltip']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Tooltip'];

/***/ }),

/***/ "flarum/components/UserCard":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/UserCard']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/UserCard'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/helpers/humanTime":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/humanTime']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/humanTime'];

/***/ }),

/***/ "flarum/helpers/icon":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['helpers/icon']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/icon'];

/***/ }),

/***/ "flarum/helpers/listItems":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/listItems']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/listItems'];

/***/ }),

/***/ "flarum/models/User":
/*!****************************************************!*\
  !*** external "flarum.core.compat['models/User']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['models/User'];

/***/ }),

/***/ "flarum/utils/ItemList":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/ItemList']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/ItemList'];

/***/ }),

/***/ "flarum/utils/mixin":
/*!****************************************************!*\
  !*** external "flarum.core.compat['utils/mixin']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/mixin'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map