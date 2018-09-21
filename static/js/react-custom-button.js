/*! @olegbogomaz/react-custom-button v1.0.0 */
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory(require("react"));
  else if (typeof define === 'function' && define.amd)
    define(["react"], factory);
  else if (typeof exports === 'object')
    exports["ReactLoadingButton"] = factory(require("react"));
  else
    root["ReactLoadingButton"] = factory(root["React"]);
})(window, function (__WEBPACK_EXTERNAL_MODULE__1__) {
  return /******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
        /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
        /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
      /******/
}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
        /******/
}
      /******/
};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function (exports) {
/******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
      /******/
};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function (value, mode) {
/******/ 		if (mode & 1) value = __webpack_require__(value);
/******/ 		if (mode & 8) return value;
/******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
      /******/
};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
      /******/
};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
    /******/
})
/************************************************************************/
/******/([
/* 0 */
/***/ (function (module, exports, __webpack_require__) {

        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
          // By explicitly using `prop-types` you are opting into new production behavior.
          // http://fb.me/prop-types-in-prod
          module.exports = __webpack_require__(5)();
        }


        /***/
}),
/* 1 */
/***/ (function (module, exports) {

        module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

        /***/
}),
/* 2 */
/***/ (function (module, exports, __webpack_require__) {

        module.exports = __webpack_require__(7);


        /***/
}),
/* 3 */
/***/ (function (module, exports, __webpack_require__) {

        // extracted by mini-css-extract-plugin

        /***/
}),
/* 4 */,
/* 5 */
/***/ (function (module, exports, __webpack_require__) {

        "use strict";
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */



        var ReactPropTypesSecret = __webpack_require__(6);

        function emptyFunction() { }

        module.exports = function () {
          function shim(props, propName, componentName, location, propFullName, secret) {
            if (secret === ReactPropTypesSecret) {
              // It is still safe when called from React.
              return;
            }
            var err = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
              'Use PropTypes.checkPropTypes() to call them. ' +
              'Read more at http://fb.me/use-check-prop-types'
            );
            err.name = 'Invariant Violation';
            throw err;
          };
          shim.isRequired = shim;
          function getShim() {
            return shim;
          };
          // Important!
          // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
          var ReactPropTypes = {
            array: shim,
            bool: shim,
            func: shim,
            number: shim,
            object: shim,
            string: shim,
            symbol: shim,

            any: shim,
            arrayOf: getShim,
            element: shim,
            instanceOf: getShim,
            node: shim,
            objectOf: getShim,
            oneOf: getShim,
            oneOfType: getShim,
            shape: getShim,
            exact: getShim
          };

          ReactPropTypes.checkPropTypes = emptyFunction;
          ReactPropTypes.PropTypes = ReactPropTypes;

          return ReactPropTypes;
        };


        /***/
}),
/* 6 */
/***/ (function (module, exports, __webpack_require__) {

        "use strict";
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */



        var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

        module.exports = ReactPropTypesSecret;


        /***/
}),
/* 7 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);

        // EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
        var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(1);
        var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);

        // EXTERNAL MODULE: ./node_modules/@progress/kendo-theme-default/dist/all.css
        var dist_all = __webpack_require__(3);

        // EXTERNAL MODULE: ./node_modules/prop-types/index.js
        var prop_types = __webpack_require__(0);

        // CONCATENATED MODULE: ./node_modules/@progress/kendo-react-common/dist/es/classNames.js
        /**
         * @hidden
         */
        var classNames = function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return args
            .filter(function (arg) { return arg !== true && !!arg; })
            .map(function (arg) {
              return Array.isArray(arg)
                ? classNames.apply(void 0, arg) : typeof arg === 'object'
                  ? Object
                    .keys(arg)
                    .map(function (key, idx) { return arg[idx] || (arg[key] && key) || null; })
                    .filter(function (el) { return el !== null; })
                    .join(' ')
                  : arg;
            })
            .filter(function (arg) { return !!arg; })
            .join(' ');
        };
        //# sourceMappingURL=classNames.js.map
        // CONCATENATED MODULE: ./node_modules/@progress/kendo-react-common/dist/es/guid.js
        /* tslint:disable:no-bitwise */
        /**
         * @hidden
         */
        var guid = function () {
          var id = '';
          var i;
          var random;
          for (i = 0; i < 32; i++) {
            random = Math.random() * 16 | 0;
            if (i === 8 || i === 12 || i === 16 || i === 20) {
              id += '-';
            }
            id += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
          }
          return id;
        };

        //# sourceMappingURL=guid.js.map
        // CONCATENATED MODULE: ./node_modules/@progress/kendo-react-common/dist/es/keys.js
        /**
         * @hidden
         */
        var Keys = {
          backspace: 8,
          tab: 9,
          enter: 13,
          shift: 16,
          esc: 27,
          space: 32,
          pageUp: 33,
          pageDown: 34,
          end: 35,
          home: 36,
          left: 37,
          up: 38,
          right: 39,
          down: 40,
          delete: 46
        };

        //# sourceMappingURL=keys.js.map
        // CONCATENATED MODULE: ./node_modules/@progress/kendo-react-common/dist/es/noop.js
        /**
         * @hidden
         */
        var noop = function () { };

        //# sourceMappingURL=noop.js.map
        // CONCATENATED MODULE: ./node_modules/@progress/kendo-react-common/dist/es/FormComponent.js
        /**
         * @hidden
         */
        var FormComponent = /** @class */ (function () {
          function FormComponent() {
          }
          return FormComponent;
        }());

        //# sourceMappingURL=FormComponent.js.map
        // CONCATENATED MODULE: ./node_modules/@progress/kendo-react-common/dist/es/FloatingLabel.js
        var __extends = (undefined && undefined.__extends) || (function () {
          var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        })();



        /**
         * @hidden
         */
        var FloatingLabel_FloatingLabel = /** @class */ (function (_super) {
          __extends(FloatingLabel, _super);
          function FloatingLabel() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
              focused: false
            };
            _this.handleFocus = function (_) {
              _this.setState({ focused: true });
            };
            _this.handleBlur = function (_) {
              _this.setState({ focused: false });
            };
            return _this;
          }
          FloatingLabel.prototype.render = function () {
            var _a = this.props, label = _a.label, id = _a.id, className = _a.className, value = _a.value, placeholder = _a.placeholder, valid = _a.valid, style = _a.style;
            var childClassNames = classNames({
              'k-textbox-container': true,
              'k-state-focused': this.state.focused,
              'k-state-empty': !(value || placeholder),
              'k-state-invalid': !valid && valid !== undefined
            }, className);
            return (external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"]("span", { className: childClassNames, onFocus: this.handleFocus, onBlur: this.handleBlur, style: style },
              this.props.children,
              label
                ? id
                  ? external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"]("label", { htmlFor: id, className: "k-label" }, label)
                  : external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"]("span", { className: "k-label" }, label)
                : null));
          };
          FloatingLabel.propTypes = {
            label: prop_types["string"],
            id: prop_types["string"],
            value: prop_types["string"],
            placeholder: prop_types["string"],
            valid: prop_types["bool"]
          };
          return FloatingLabel;
        }(external_root_React_commonjs2_react_commonjs_react_amd_react_["Component"]));
/* harmony default export */ var es_FloatingLabel = (FloatingLabel_FloatingLabel);
        //# sourceMappingURL=FloatingLabel.js.map
        // CONCATENATED MODULE: ./node_modules/@progress/kendo-react-common/dist/es/events/dispatchEvent.js
        /**
         * @hidden
         * Dispatches a new event based on an already internally dispatched event to the consumers of our React components.
         *
         * @param eventHandler - The public event handler assigned by the consumer of the React component.
         * When undefined, the method is no-op.
         * @param dispatchedEvent - The already internally dispatched event.
         * @param target - The target component of the new event.
         * @param eventData - The additional data to be passed via the new event. When the new event has no additional data
         *  except the args of the `BaseEvent`, `undefined` should be passed.
         */
        function dispatchEvent(eventHandler, dispatchedEvent, target,
          // TODO: Uncomment after switching to TS 3.
          // eventData: Exclude<keyof E, keyof BaseEvent<React.Component>> extends never ?
          //     undefined : Pick<E, Exclude<keyof E, keyof BaseEvent<React.Component>>>
          eventData) {
          if (eventHandler) {
            var eventBaseData = {
              syntheticEvent: dispatchedEvent,
              nativeEvent: dispatchedEvent.nativeEvent,
              target: target
            };
            eventHandler.call(undefined, Object.assign(eventBaseData, eventData));
          }
        }
        //# sourceMappingURL=dispatchEvent.js.map
        // CONCATENATED MODULE: ./node_modules/@progress/kendo-react-common/dist/es/serverRendering.js
        /**
         * @hidden
         */
        var isServerRendering = function () {
          return typeof window === 'undefined';
        };

        //# sourceMappingURL=serverRendering.js.map
        // CONCATENATED MODULE: ./node_modules/@progress/kendo-react-common/dist/es/main.js









        //# sourceMappingURL=main.js.map
        // CONCATENATED MODULE: ./node_modules/@progress/kendo-react-buttons/dist/es/util.js
        /**
         * @hidden
         */
        var styles = {
          button: 'k-button',
          'bare': 'k-bare',
          'flat': 'k-flat',
          'outline': 'k-outline',
          'primary': 'k-primary',
          'state-active': 'k-state-active',
          'button-icon': 'k-button-icon',
          'state-disabled': 'k-state-disabled',
          'group-start': 'k-group-start',
          'group-end': 'k-group-end',
          'button-group': 'k-button-group',
          'button-group-stretched': 'k-button-group-stretched',
          'ltr': 'k-ltr',
          'rtl': 'k-rtl'
        };
/**
 * @hidden
 */
/* harmony default export */ var util = ({
          styles: styles
        });
        //# sourceMappingURL=util.js.map
        // CONCATENATED MODULE: ./node_modules/@progress/kendo-react-buttons/dist/es/Button.js
        var Button_extends = (undefined && undefined.__extends) || (function () {
          var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        })();
        var __assign = (undefined && undefined.__assign) || Object.assign || function (t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
          }
          return t;
        };
        var __rest = (undefined && undefined.__rest) || function (s, e) {
          var t = {};
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
          if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
              t[p[i]] = s[p[i]];
          return t;
        };




        var Button_styles = util.styles;
        /**
         * @hidden
         */
        function iconElement(_a) {
          var imageUrl = _a.imageUrl, icon = _a.icon, iconClass = _a.iconClass, imageAlt = _a.imageAlt;
          if (imageUrl) {
            return (external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"]("img", { role: "presentation", className: 'k-image', alt: imageAlt, src: imageUrl }));
          }
          else if (icon) {
            var iconClasses = classNames('k-icon', 'k-i-' + icon);
            return (external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"]("span", { role: "presentation", className: iconClasses }));
          }
          else if (iconClass) {
            return (external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"]("span", { role: "presentation", className: iconClass }));
          }
          return null;
        }
        var Button_Button = /** @class */ (function (_super) {
          Button_extends(Button, _super);
          function Button(props) {
            var _this = _super.call(this, props) || this;
            _this.handleClick = function (event) {
              _this.activate();
              if (_this.props.onClick) {
                _this.props.onClick.call(undefined, event);
              }
            };
            _this.state = {
              active: (_this.props.selected === true && _this.props.togglable === true)
            };
            return _this;
          }
          /**
           * @hidden
           */
          Button.prototype.componentWillReceiveProps = function (props) {
            this.setState({ active: props.selected === true && this.props.togglable === true });
          };
          /**
           * @hidden
           */
          Button.prototype.render = function () {
            var _a;
            var _b = this.props, children = _b.children, look = _b.look, primary = _b.primary, selected = _b.selected, togglable = _b.togglable, icon = _b.icon, iconClass = _b.iconClass, imageUrl = _b.imageUrl, imageAlt = _b.imageAlt, className = _b.className, onClick = _b.onClick, htmlAttributes = __rest(_b, ["children", "look", "primary", "selected", "togglable", "icon", "iconClass", "imageUrl", "imageAlt", "className", "onClick"]);
            var buttonClasses = classNames([Button_styles.button], (_a = {},
              _a[Button_styles["" + look]] = look !== 'default',
              _a[Button_styles.primary] = primary,
              _a[Button_styles['state-disabled']] = this.props.disabled,
              _a[Button_styles['state-active']] = this.state.active,
              _a[Button_styles['button-icon']] = children === undefined,
              _a), [Button_styles["" + this.props.dir]], className);
            var buttonProps = {
              className: buttonClasses,
              onClick: this.handleClick,
              // Accessibility properties
              role: togglable ? 'checkbox' : 'button',
              'aria-disabled': this.props.disabled || undefined,
              'aria-checked': this.state.active
            };
            var iconEl = iconElement({
              icon: icon,
              iconClass: iconClass,
              imageUrl: imageUrl,
              imageAlt: imageAlt
            });
            return (external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"]("button", __assign({}, buttonProps, htmlAttributes),
              iconEl,
              children));
          };
          Button.prototype.activate = function () {
            if (this.props.togglable) {
              this.setState({ active: !this.state.active });
            }
          };
          /**
           * @hidden
           */
          Button.propTypes = {
            children: prop_types["oneOfType"]([prop_types["arrayOf"](prop_types["element"]), prop_types["string"]]),
            look: prop_types["oneOf"](['default', 'bare', 'flat', 'outline']),
            primary: prop_types["bool"],
            selected: prop_types["bool"],
            togglable: prop_types["bool"],
            icon: prop_types["string"],
            iconClass: prop_types["string"],
            imageUrl: prop_types["string"],
            imageAlt: prop_types["string"]
          };
          /**
           * @hidden
           */
          Button.defaultProps = {
            look: 'default',
            primary: false,
            selected: false,
            togglable: false
          };
          return Button;
        }(external_root_React_commonjs2_react_commonjs_react_amd_react_["Component"]));
/* harmony default export */ var es_Button = (Button_Button);
        //# sourceMappingURL=Button.js.map
        // CONCATENATED MODULE: ./node_modules/@progress/kendo-react-buttons/dist/es/ButtonGroup.js
        var ButtonGroup_extends = (undefined && undefined.__extends) || (function () {
          var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        })();
        var ButtonGroup_assign = (undefined && undefined.__assign) || Object.assign || function (t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
          }
          return t;
        };




        var ButtonGroup_styles = util.styles;
        var ButtonGroup_ButtonGroup = /** @class */ (function (_super) {
          ButtonGroup_extends(ButtonGroup, _super);
          function ButtonGroup() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._element = null;
            return _this;
          }
          /**
           * @hidden
           */
          ButtonGroup.prototype.render = function () {
            var _this = this;
            var _a;
            var buttons = this.mapButtons(this.props.children);
            var groupClasses = classNames([ButtonGroup_styles['button-group']], (_a = {},
              _a[ButtonGroup_styles['state-disabled']] = this.props.disabled,
              _a[ButtonGroup_styles['button-group-stretched']] = !!this.props.width,
              _a), this.props.className);
            var groupProps = {
              className: groupClasses,
              style: { 'width': "" + this.props.width },
              dir: this.props.dir,
              // Accessibility properties
              role: 'group',
              'aria-disabled': this.props.disabled || undefined,
              'aria-multiselectable': true
            };
            return (external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"]("div", ButtonGroup_assign({ ref: function (div) { _this._element = div; } }, groupProps, { className: groupClasses }), buttons));
          };
          ButtonGroup.prototype.mapButtons = function (children) {
            var _this = this;
            var count = external_root_React_commonjs2_react_commonjs_react_amd_react_["Children"].count(children);
            return external_root_React_commonjs2_react_commonjs_react_amd_react_["Children"].map(children, function (child, index) {
              if (external_root_React_commonjs2_react_commonjs_react_amd_react_["isValidElement"](child)) {
                return _this.renderButton(child, index, (index === count - 1));
              }
              return child;
            });
          };
          ButtonGroup.prototype.renderButton = function (child, index, isLast) {
            var _a;
            var rtl = this.props.dir !== undefined
              ? this.props.dir === 'rtl'
              : (this._element && (getComputedStyle(this._element).direction === 'rtl') || false);
            var buttonClasses = classNames((_a = {},
              _a[ButtonGroup_styles['group-start']] = rtl ? isLast : index === 0,
              _a[ButtonGroup_styles['group-end']] = rtl ? index === 0 : isLast,
              _a));
            var buttonProps = ButtonGroup_assign({}, child.props, { className: buttonClasses, style: { 'width': "" + this.props.width }, disabled: this.props.disabled || undefined });
            return external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"](child, buttonProps, child.props.children);
          };
          /**
           * @hidden
           */
          ButtonGroup.propTypes = {
            children: prop_types["arrayOf"](prop_types["element"]),
            className: prop_types["string"],
            disabled: prop_types["bool"],
            width: prop_types["string"],
            dir: prop_types["string"]
          };
          /**
           * @hidden
           */
          ButtonGroup.defaultProps = {
            disabled: false
          };
          return ButtonGroup;
        }(external_root_React_commonjs2_react_commonjs_react_amd_react_["Component"]));
/* harmony default export */ var es_ButtonGroup = (ButtonGroup_ButtonGroup);
        //# sourceMappingURL=ButtonGroup.js.map
        // CONCATENATED MODULE: ./node_modules/@progress/kendo-react-buttons/dist/es/main.js



        //# sourceMappingURL=main.js.map
        // CONCATENATED MODULE: ./src/index.js
        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





        var src_CustomButton = function (_Component) {
          _inherits(CustomButton, _Component);

          function CustomButton(props) {
            _classCallCheck(this, CustomButton);

            return _possibleConstructorReturn(this, _Component.call(this, props));
          }

          CustomButton.prototype.render = function render() {
            return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
              es_Button,
              {
                onClick: this.props.onClick,
                primary: true
              },
              this.props.text
            );
          };

          return CustomButton;
        }(external_root_React_commonjs2_react_commonjs_react_amd_react_["Component"]);

/* harmony default export */ var src = __webpack_exports__["default"] = (src_CustomButton);

        /***/
})
/******/])["default"];
});