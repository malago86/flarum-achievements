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
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");
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

/***/ "./src/admin/components/AchievementModal.js":
/*!**************************************************!*\
  !*** ./src/admin/components/AchievementModal.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AchievementModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Checkbox */ "flarum/components/Checkbox");
/* harmony import */ var flarum_components_Checkbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Checkbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Tooltip */ "flarum/components/Tooltip");
/* harmony import */ var flarum_components_Tooltip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Tooltip__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/utils/Stream */ "flarum/utils/Stream");
/* harmony import */ var flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _GroupSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./GroupSelector */ "./src/admin/components/GroupSelector.js");


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









var AchievementModal = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AchievementModal, _Modal);

  function AchievementModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = AchievementModal.prototype;

  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);

    this.achievement = this.attrs.model || app.store.createRecord("achievements");
    this.id = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(this.achievement.data.id || "-");
    this.name = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(this.achievement.name() || "");
    this.description = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(this.achievement.description() || "");

    if (this.achievement.computation()) {
      var c = this.achievement.computation().split(':');
      this.selected_variable = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(c[0]);
      this.computation = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(c[1]);

      if (this.selected_variable() == "avatar" || this.selected_variable() == "manual") {
        $(".FormInline").hide();
      }
    } else {
      this.computation = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()("");
      this.selected_variable = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()("manual");
    }

    this.points = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(this.achievement.points() || "");
    this.image = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(this.achievement.image() || "");
    this.active = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(this.achievement.active() || 1);
    this.hidden = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(this.achievement.hidden() || 0);

    if (this.achievement.rectangle()) {
      var rectangle = this.achievement.rectangle().split(',');
      this.row = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(rectangle[0] / rectangle[2] + 1);
      this.col = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(rectangle[1] / rectangle[3] + 1);
      this.width = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(rectangle[3]);
      this.height = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(rectangle[2]);
    } else {
      this.row = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()("1");
      this.col = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()("1");
      this.width = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()("");
      this.height = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()("");
    }
  };

  _proto.className = function className() {
    return "EditAchievementModal Modal--large";
  };

  _proto.title = function title() {
    return this.name() ? this.name() + " ID: " + this.id() : app.translator.trans("malago-achievements.admin.achievement_modal.title");
  };

  _proto.content = function content() {
    if (this.loading) {
      return m("div", {
        className: "Modal-body"
      }, m("div", {
        className: "Form"
      }, m("div", {
        className: "container"
      }, m(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5___default.a, null))));
    }

    var all_fields = this.fields().toArray();
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, m("div", {
      className: "ModalColumn"
    }, all_fields.slice(0, 6)), m("div", {
      className: "ModalColumn"
    }, all_fields.slice(6))));
  };

  _proto.fields = function fields() {
    var _this = this;

    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_6___default.a();
    items.add("name", m("div", {
      className: "Form-group"
    }, m("label", null, app.translator.trans("malago-achievements.admin.achievement_modal.name_label")), m("input", {
      className: "FormControl",
      placeholder: app.translator.trans("malago-achievements.admin.achievement_modal.name_placeholder"),
      bidi: this.name
    })), 50);
    items.add("active", m("div", {
      className: "Form-group"
    }, m("label", null, app.translator.trans("malago-achievements.admin.achievement_modal.active_label")), flarum_components_Checkbox__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      state: this.active(),
      onchange: function onchange() {
        _this.active((_this.active() + 1) % 2);
      }
    })), 50);
    items.add("hidden", m("div", {
      className: "Form-group"
    }, m("label", null, app.translator.trans("malago-achievements.admin.achievement_modal.hidden_label")), flarum_components_Checkbox__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      state: this.hidden(),
      onchange: function onchange() {
        _this.hidden((_this.hidden() + 1) % 2);
      }
    })), 50);
    items.add("description", m("div", {
      className: "Form-group"
    }, m("label", null, app.translator.trans("malago-achievements.admin.achievement_modal.description_label")), m("input", {
      className: "FormControl",
      placeholder: app.translator.trans("malago-achievements.admin.achievement_modal.description_placeholder"),
      bidi: this.description
    })), 50);
    items.add("computation", m("div", {
      className: "Form-group"
    }, m("label", null, app.translator.trans("malago-achievements.admin.achievement_modal.variable_label")), m(_GroupSelector__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: app.translator.trans("malago-achievements.admin.achievement_modal.variable_label"),
      id: this.selected_variable
    }), m(flarum_components_Tooltip__WEBPACK_IMPORTED_MODULE_4___default.a, {
      id: "Tooltip-computation",
      text: ""
    }, m("input", {
      className: this.selected_variable() == "avatar" || this.selected_variable() == "manual" ? "FormControl FormHidden FormInline" : "FormControl FormInline",
      placeholder: app.translator.trans("malago-achievements.admin.achievement_modal.computation_placeholder"),
      bidi: this.computation
    }))), 50);
    items.add("points", m("div", {
      className: "Form-group"
    }, m("label", null, app.translator.trans("malago-achievements.admin.achievement_modal.points_label")), m("input", {
      className: "FormControl",
      placeholder: app.translator.trans("malago-achievements.admin.achievement_modal.points_placeholder"),
      bidi: this.points
    })), 50);
    items.add("image", m("div", {
      className: "Form-group"
    }, m("label", null, app.translator.trans("malago-achievements.admin.achievement_modal.image_label")), m("input", {
      className: "FormControl",
      placeholder: app.translator.trans("malago-achievements.admin.achievement_modal.image_placeholder"),
      bidi: this.image,
      onchange: this.showImage()
    })), 50);
    items.add("image-show", m("div", {
      className: "Form-group"
    }, m("div", {
      "class": "AchievementImage-Show"
    }, "\xA0")), 50);
    items.add("size", m("div", {
      className: "Form-group Image-data"
    }, m("table", {
      className: "AchievementModal-Table"
    }, m("tr", null, m("td", null, m("label", null, app.translator.trans("malago-achievements.admin.achievement_modal.height_label"))), m("td", null, m("label", null, app.translator.trans("malago-achievements.admin.achievement_modal.width_label")))), m("tr", null, m("td", null, m("input", {
      className: "FormControl",
      bidi: this.height,
      onchange: this.showImage(),
      type: "number"
    })), m("td", null, m("input", {
      className: "FormControl",
      bidi: this.width,
      onchange: this.showImage(),
      type: "number"
    }))))), 50);
    items.add("position", m("div", {
      className: "Form-group Image-data"
    }, m("table", {
      className: "AchievementModal-Table"
    }, m("tr", null, m("td", null, m("label", null, app.translator.trans("malago-achievements.admin.achievement_modal.row_label"))), m("td", null, m("label", null, app.translator.trans("malago-achievements.admin.achievement_modal.col_label")))), m("tr", null, m("td", null, m("input", {
      className: "FormControl",
      placeholder: 1,
      bidi: this.col,
      onchange: this.showImage(),
      type: "number"
    })), m("td", null, m("input", {
      className: "FormControl",
      placeholder: 1,
      bidi: this.row,
      onchange: this.showImage(),
      type: "number"
    }))))), 50);
    items.add("submit", m("div", {
      className: "Form-group"
    }, flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      type: "submit",
      className: "Button Button--primary EditAchievementModal-save",
      loading: this.loading,
      disabled: this.name().length === 0
    }, app.translator.trans("malago-achievements.admin.achievement_modal.submit_button")), this.achievement.exists ? m("button", {
      type: "button",
      className: "Button EditAchievementsModal-delete",
      onclick: this["delete"].bind(this)
    }, app.translator.trans("malago-achievements.admin.achievement_modal.delete_button")) : ""), -10);
    return items;
  };

  _proto.showImage = function showImage() {
    if (this.image().includes("http")) {
      $(".AchievementImage-Show").html("");
      $(".Image-data").show();
      $(".AchievementImage-Show").css("background-position", "-" + (this.row() - 1) * this.height() + "px -" + (this.col() - 1) * this.width() + "px");
      $(".AchievementImage-Show").css("background-image", "url(" + this.image() + ")");
      $(".AchievementImage-Show").css("width", this.width() + "px");
      $(".AchievementImage-Show").css("height", this.height() + "px");
    } else {
      $(".AchievementImage-Show").html("<i class='icon " + this.image() + "'></i>");
      $(".AchievementImage-Show").css("background", "none");
      $(".AchievementImage-Show").css("height", "32px");
      $(".AchievementImage-Show").css("width", "32px");
      $(".Image-data").hide();
    }
  };

  _proto.submitData = function submitData() {
    var data = {
      name: this.name(),
      description: this.description(),
      computation: this.selected_variable() + ":" + this.computation(),
      points: this.points(),
      image: this.image(),
      rectangle: [(this.row() - 1) * this.height(), (this.col() - 1) * this.width(), this.height(), this.width()].join(','),
      active: this.active(),
      hidden: this.hidden()
    };
    return data;
  };

  _proto.onsubmit = function onsubmit(e) {
    var _this2 = this;

    e.preventDefault();
    this.loading = true;
    this.achievement.save(this.submitData()).then(function () {
      return _this2.hide();
    }, function () {
      return _this2.loading = false;
    });
  };

  _proto["delete"] = function _delete() {
    if (confirm(app.translator.trans("malago-achievements.admin.achievement_modal.delete_confirmation"))) {
      this.achievement["delete"]().then(function () {
        m.redraw();
      });
      this.hide();
    }
  };

  return AchievementModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/components/AchievementUserModal.js":
/*!******************************************************!*\
  !*** ./src/admin/components/AchievementUserModal.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AchievementUserModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/utils/Stream */ "flarum/utils/Stream");
/* harmony import */ var flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_5__);


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






var AchievementUserModal = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AchievementUserModal, _Modal);

  function AchievementUserModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = AchievementUserModal.prototype;

  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);

    this.achievement = this.attrs.model;
    this.achievement_user = app.store.createRecord("achievement_user");
    this.name = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_5___default()(this.achievement.name() || "");
    this.id = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_5___default()(this.achievement.data.id || "");
    this.user_id = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_5___default()("");
  };

  _proto.className = function className() {
    return "EditAchievementModal Modal--small";
  };

  _proto.title = function title() {
    return this.name() ? this.name() : app.translator.trans("malago-achievements.admin.achievement_modal.add_delete_title");
  };

  _proto.content = function content() {
    if (this.loading) {
      return m("div", {
        className: "Modal-body"
      }, m("div", {
        className: "Form"
      }, m("div", {
        className: "container"
      }, m(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3___default.a, null))));
    }

    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, this.fields().toArray()));
  };

  _proto.fields = function fields() {
    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default.a();
    items.add("instructions", m("div", {
      className: "Form-group"
    }, m("p", null, app.translator.trans("malago-achievements.admin.achievement_modal.add_delete_instructions"))), 50);
    items.add("user_id", m("div", {
      className: "Form-group"
    }, m("label", null, app.translator.trans("malago-achievements.admin.achievement_modal.username")), m("input", {
      className: "FormControl",
      placeholder: app.translator.trans("malago-achievements.admin.achievement_modal.username_placeholder"),
      bidi: this.user_id
    })), 50);
    items.add("submit", m("div", {
      className: "Form-group"
    }, flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      type: "submit",
      className: "Button Button--primary EditAchievementModal-save",
      loading: this.loading,
      disabled: this.name().length === 0
    }, app.translator.trans("malago-achievements.admin.achievement_modal.submit_button"))), -10);
    return items;
  };

  _proto.submitData = function submitData() {
    var data = {
      id: this.id(),
      user_id: this.user_id(),
      "new": 1
    };
    return data;
  };

  _proto.onsubmit = function onsubmit(e) {
    var _this = this;

    e.preventDefault();
    this.loading = true;

    if (this.user_id() != "") {
      this.achievement_user.save(this.submitData()).then(function () {
        return _this.hide();
      }, function () {
        return _this.loading = false;
      });
    }
  };

  return AchievementUserModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/components/AchievementsPage.js":
/*!**************************************************!*\
  !*** ./src/admin/components/AchievementsPage.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AchievementsPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/ExtensionPage */ "flarum/components/ExtensionPage");
/* harmony import */ var flarum_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AchievementModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AchievementModal */ "./src/admin/components/AchievementModal.js");
/* harmony import */ var _AchievementUserModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AchievementUserModal */ "./src/admin/components/AchievementUserModal.js");
/* harmony import */ var flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/utils/saveSettings */ "flarum/utils/saveSettings");
/* harmony import */ var flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/utils/Stream */ "flarum/utils/Stream");
/* harmony import */ var flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/components/Switch */ "flarum/components/Switch");
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Switch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_9__);


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










function AchievementsItem(achievement) {
  var name = achievement ? achievement.name() : app.translator.trans("malago-achievements.admin.achievements_page.create_achievement_button");
  var rectangle = (achievement ? achievement.rectangle() : "0,0,32,32").split(',');
  var iconName = achievement ? "" : flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default()("fas fa-plus");
  var addString = app.translator.trans("malago-achievements.admin.achievements_page.add_delete_users");
  var style = "background:none;\
      height:32px;\
      width:32px;";
  if (achievement) if (achievement.image().includes("http")) {
    style = "background:url(" + achievement.image() + ");\
      background-position:-" + rectangle[0] + "px -" + rectangle[1] + "px;\
      height:" + rectangle[2] + "px;\
      width:" + rectangle[3] + "px;";
  } else {
    iconName = flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default()(achievement.image());
  }
  return m("div", {
    className: "ExtensionListItem"
  }, m("span", {
    className: "ExtensionListItem-icon ExtensionIcon Achievement",
    style: style,
    onclick: function onclick() {
      return app.modal.show(_AchievementModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
        model: achievement
      });
    }
  }, iconName), m("span", {
    className: "ExtensionListItem-title"
  }, name), m("span", {
    className: "ExtensionListItem-user",
    "data-toggle": "tooltip",
    title: addString,
    onclick: function onclick() {
      return achievement ? app.modal.show(_AchievementUserModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
        model: achievement
      }) : null;
    }
  }, m("i", {
    "class": "fas fa-users-cog"
  })));
}

var AchievementsPage = /*#__PURE__*/function (_ExtensionPage) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AchievementsPage, _ExtensionPage);

  function AchievementsPage() {
    return _ExtensionPage.apply(this, arguments) || this;
  }

  var _proto = AchievementsPage.prototype;

  _proto.oninit = function oninit(vnode) {
    var _this = this;

    _ExtensionPage.prototype.oninit.call(this, vnode);

    var settings = app.data.settings;
    this.values = {};
    this.settingsPrefix = "malago-achievements";
    this.settings = ['show-post-footer', 'show-user-card'];
    this.settings.forEach(function (key) {
      return _this.values[key] = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(Number(settings[_this.addPrefix(key)]));
    });
    this.loading = true;
    app.store.find("achievements").then(function () {
      _this.loading = false;
      m.redraw();
    });
  };

  _proto.content = function content() {
    if (this.loading) {
      return m("div", {
        className: "Achievements"
      }, m("div", {
        className: "container"
      }, m(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2___default.a, null)));
    }

    return m("div", {
      className: "Achievements"
    }, m("div", {
      className: "container"
    }, m("div", {
      className: "ExtensionsWidget-list Achievements-list"
    }, m("p", {
      className: "Achievements-list-heading"
    }, app.translator.trans("malago-achievements.admin.achievements_page.list_heading")), m("div", {
      className: "ExtensionList"
    }, [].concat(app.store.all("achievements").map(AchievementsItem), [AchievementsItem()]))), m("p", {
      className: "Achievements-list-heading"
    }, app.translator.trans("malago-achievements.admin.achievements_page.show")), m('form', {
      onsubmit: this.onsubmit.bind(this)
    }, m('fieldset', {
      className: 'Achievements-settings'
    }, [flarum_components_Switch__WEBPACK_IMPORTED_MODULE_8___default.a.component({
      state: this.values['show-post-footer']() || false,
      onchange: this.values['show-post-footer']
    }, app.translator.trans('malago-achievements.admin.settings.show-post-footer')), flarum_components_Switch__WEBPACK_IMPORTED_MODULE_8___default.a.component({
      state: this.values['show-user-card']() || false,
      onchange: this.values['show-user-card']
    }, app.translator.trans('malago-achievements.admin.settings.show-user-card')), flarum_components_Button__WEBPACK_IMPORTED_MODULE_9___default.a.component({
      type: 'submit',
      className: 'Button Button--primary',
      disabled: !this.changed()
    }, app.translator.trans('flagrow-ads.admin.buttons.save'))])), m("div", {
      className: "Achievements-footer"
    }, m("p", {
      className: "Achievements-list-heading"
    }, app.translator.trans("malago-achievements.admin.achievements_page.instructions_header")), m("ul", null, app.translator.trans("malago-achievements.admin.achievements_page.instructions_text")))));
  }
  /**
     * Checks if the values of the fields and checkboxes are different from
     * the ones stored in the database
     *
     * @returns boolean
     */
  ;

  _proto.changed = function changed() {
    var _this2 = this;

    var settingsChecked = this.settings.some(function (key) {
      return _this2.values[key]() !== app.data.settings[_this2.addPrefix(key)];
    });
    return settingsChecked;
  };

  _proto.onsubmit = function onsubmit(e) {
    var _this3 = this;

    e.preventDefault(); // if the page is already saving, do nothing

    if (this.loading) return; // prevents multiple savings

    this.loading = true; // remove previous success popup

    app.alerts.dismiss(this.successAlert);
    var settings = {}; // gets all the values from the form

    this.settings.forEach(function (key) {
      return settings[_this3.addPrefix(key)] = _this3.values[key]();
    });
    flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_6___default()(settings).then(function () {
      // on success, show popup
      app.alerts.show({
        type: 'success'
      }, app.translator.trans('core.admin.settings.saved_message'));
    })["catch"](function () {}).then(function () {
      // return to the initial state and redraw the page
      _this3.loading = false; // window.location.reload();
    });
  };

  _proto.addPrefix = function addPrefix(key) {
    return this.settingsPrefix + '.' + key;
  };

  return AchievementsPage;
}(flarum_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/components/GroupSelector.js":
/*!***********************************************!*\
  !*** ./src/admin/components/GroupSelector.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GroupSelector; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Dropdown */ "flarum/components/Dropdown");
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__);


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




var GroupSelector = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(GroupSelector, _Component);

  function GroupSelector() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = GroupSelector.prototype;

  _proto.view = function view() {
    var _this = this;

    var variables = ["manual", "posts", "likes", "selflikes", "discussions", "edits", "avatar", "comments", "contains", "meanwords", "tagposts", "years"];
    var label = app.translator.trans("malago-achievements.admin.achievement_modal.variable." + this.attrs.id());
    return m("span", null, m(flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
      label: label,
      buttonClassName: "Button Button--danger"
    }, variables.map(function (g) {
      return flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
        active: _this.attrs.id(),
        onclick: function onclick() {
          _this.attrs.id(g);

          if (g == "avatar" || g == "manual") {
            $(".FormInline").addClass("FormHidden");
          } else {
            $(".FormInline").removeClass("FormHidden");
            $("input.FormInline").attr("data-original-title", app.translator.trans("malago-achievements.admin.achievement_modal.tooltip." + g));
          }
        }
      }, app.translator.trans("malago-achievements.admin.achievement_modal.variable." + g));
    })));
  };

  return GroupSelector;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_registerModels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/registerModels */ "./src/common/registerModels.js");
/* harmony import */ var _components_AchievementsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/AchievementsPage */ "./src/admin/components/AchievementsPage.js");
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


app.initializers.add("malago/achievements", function () {
  app.extensionData["for"]("malago-achievements").registerPage(_components_AchievementsPage__WEBPACK_IMPORTED_MODULE_1__["default"]);
  Object(_common_registerModels__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

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

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/Checkbox":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/Checkbox']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Checkbox'];

/***/ }),

/***/ "flarum/components/Dropdown":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/Dropdown']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Dropdown'];

/***/ }),

/***/ "flarum/components/ExtensionPage":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['components/ExtensionPage']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/ExtensionPage'];

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

/***/ "flarum/components/Switch":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Switch']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Switch'];

/***/ }),

/***/ "flarum/components/Tooltip":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['components/Tooltip']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Tooltip'];

/***/ }),

/***/ "flarum/helpers/icon":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['helpers/icon']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/icon'];

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

/***/ "flarum/utils/Stream":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['utils/Stream']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/Stream'];

/***/ }),

/***/ "flarum/utils/mixin":
/*!****************************************************!*\
  !*** external "flarum.core.compat['utils/mixin']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/mixin'];

/***/ }),

/***/ "flarum/utils/saveSettings":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['utils/saveSettings']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/saveSettings'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map