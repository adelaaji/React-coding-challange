// prettier-ignore
/* eslint-disable */
import "./bundle_sitecore.css"

import React from 'react';
import { Link as Link$1, Text as Text$1, Image as Image$1, RichText, isExperienceEditorActive } from '@sitecore-jss/sitecore-jss-react';
import { PopupButton, Sidetab, Widget, SliderButton } from '@typeform/embed-react';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

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

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var _excluded$9 = ["text", "link"];

var Button = function Button(_ref) {
  var text = _ref.text,
      link = _ref.link,
      rest = _objectWithoutProperties(_ref, _excluded$9);

  return link ? /*#__PURE__*/React.createElement(Link$1, _extends({
    field: link
  }, rest), /*#__PURE__*/React.createElement(Text$1, {
    field: text
  })) : /*#__PURE__*/React.createElement("button", rest, /*#__PURE__*/React.createElement(Text$1, {
    field: text
  }));
};

var react$3 = function react(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: props.className
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: true
  }));
};

var _excluded$8 = ["bgImage", "style", "children"];

var Container = function Container(_ref) {
  var _bgImage$value;

  var bgImage = _ref.bgImage,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, _excluded$8);

  var backgroundImage = bgImage === null || bgImage === void 0 ? void 0 : (_bgImage$value = bgImage.value) === null || _bgImage$value === void 0 ? void 0 : _bgImage$value.src;
  var containerStyle = backgroundImage ? _objectSpread2(_objectSpread2({}, style), {}, {
    backgroundImage: "url(".concat(backgroundImage, ")")
  }) : style;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: containerStyle
  }, rest), children);
};

var _excluded$7 = ["text"];

var Text = function Text(_ref) {
  var text = _ref.text,
      rest = _objectWithoutProperties(_ref, _excluded$7);

  return /*#__PURE__*/React.createElement(Text$1, _extends({
    field: text,
    tag: "h2"
  }, rest));
};

var s$1 = {"switch":"toggle-module_switch__B8qKv","input":"toggle-module_input__GtF5A","slider":"toggle-module_slider__12m_6","round":"toggle-module_round__1rQsv"};

var react$2 = function react(props) {
  return /*#__PURE__*/React.createElement("label", {
    className: "".concat(props.className, " ").concat(s$1["switch"])
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: s$1.input
  }), /*#__PURE__*/React.createElement("span", {
    className: "".concat(props.slider, " ").concat(s$1.round)
  }));
};

var _excluded$6 = ["src"];

var Image = function Image(_ref) {
  var src = _ref.src,
      rest = _objectWithoutProperties(_ref, _excluded$6);

  return /*#__PURE__*/React.createElement(Image$1, _extends({
    field: src
  }, rest));
};

var _excluded$5 = ["href"];

var Link = function Link(_ref) {
  var href = _ref.href,
      rest = _objectWithoutProperties(_ref, _excluded$5);

  return /*#__PURE__*/React.createElement(Link$1, _extends({
    field: href
  }, rest));
};

var react$1 = function react(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: props.className
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: "radio"
  }));
};

var _excluded$4 = ["text"];

var Label = function Label(_ref) {
  var text = _ref.text,
      rest = _objectWithoutProperties(_ref, _excluded$4);

  return /*#__PURE__*/React.createElement(Text$1, _extends({
    field: text,
    tag: "label"
  }, rest));
};

var TextArea = function TextArea(props) {
  return /*#__PURE__*/React.createElement("textarea", props);
};

var TextInput = function TextInput(props) {
  return /*#__PURE__*/React.createElement("input", _extends({
    type: "text"
  }, props));
};

var _excluded$3 = ["src"];

var Video = function Video(_ref) {
  var src = _ref.src,
      rest = _objectWithoutProperties(_ref, _excluded$3);

  return /*#__PURE__*/React.createElement("video", _extends({
    controls: true
  }, rest), /*#__PURE__*/React.createElement("source", {
    src: src === null || src === void 0 ? void 0 : src.url
  }));
};

var LineBreak = function LineBreak(props) {
  return /*#__PURE__*/React.createElement("hr", props);
};

var _excluded$2 = ["tag", "text"];

var Paragraph = function Paragraph(_ref) {
  var tag = _ref.tag,
      text = _ref.text,
      rest = _objectWithoutProperties(_ref, _excluded$2);

  return /*#__PURE__*/React.createElement(RichText, _extends({
    tag: tag || 'p',
    field: text
  }, rest));
};

var s = {"dropbtn":"dropdown-module_dropbtn__3zFAg","dropdown":"dropdown-module_dropdown__33CIU","dropdownContent":"dropdown-module_dropdownContent__1iX_q"};

var react = function react(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(props.className, " ").concat(s.dropdown)
  }, /*#__PURE__*/React.createElement("button", {
    className: s.dropbtn,
    style: {
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(Text$1, {
    field: props.text,
    editable: true,
    encode: true
  })), /*#__PURE__*/React.createElement("div", {
    className: s.dropdownContent
  }, /*#__PURE__*/React.createElement("div", null, props.list && props.list.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: 'listItem-' + index
    }, /*#__PURE__*/React.createElement("span", null, item.name));
  }))));
};

var _excluded$1 = ["list"];

var List = function List(_ref) {
  var list = _ref.list,
      rest = _objectWithoutProperties(_ref, _excluded$1);

  if (!list) return null;
  return /*#__PURE__*/React.createElement("ul", rest, list === null || list === void 0 ? void 0 : list.map(function (listItem, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: "listItem-".concat(index)
    }, /*#__PURE__*/React.createElement("span", null, listItem.name || listItem.displayName));
  }));
};

var Styles = {"errorContainer":"typeForm-module_errorContainer__3Gc5b","errorMessage":"typeForm-module_errorMessage__2VqC8","modeContainer":"typeForm-module_modeContainer__TUV-7","mode":"typeForm-module_mode__2Hyhq"};

var _excluded = ["formId", "mode", "buttonText"];
var validModes = ['popupButton', 'sliderButton', 'widget', 'popover'];

var TypeForm = function TypeForm(props) {
  var formId = props.formId,
      _props$mode = props.mode,
      mode = _props$mode === void 0 ? {} : _props$mode,
      buttonText = props.buttonText,
      rest = _objectWithoutProperties(props, _excluded);

  var modeValue = mode.value;
  var isValidMode = validModes.includes(modeValue);

  if (!isValidMode && isExperienceEditorActive()) {
    return /*#__PURE__*/React.createElement("div", {
      className: Styles.errorContainer
    }, /*#__PURE__*/React.createElement("div", {
      className: Styles.errorMessage
    }, /*#__PURE__*/React.createElement("p", null, "Please enter a valid mode for type form and click on save."), /*#__PURE__*/React.createElement("p", null, "Type one of \"".concat(validModes.join('", "'), "\""))), /*#__PURE__*/React.createElement("p", {
      className: Styles.modeContainer
    }, "mode: ", /*#__PURE__*/React.createElement(Text$1, {
      field: mode,
      tag: "span",
      className: Styles.mode
    })));
  }

  if (modeValue === 'popupButton') {
    return /*#__PURE__*/React.createElement(PopupButton, _extends({
      id: formId
    }, rest), /*#__PURE__*/React.createElement(Text$1, {
      field: buttonText || 'click to open'
    }));
  }

  if (modeValue === 'popover') {
    return /*#__PURE__*/React.createElement(Sidetab, _extends({
      id: formId
    }, rest, {
      buttonText: (buttonText === null || buttonText === void 0 ? void 0 : buttonText.value) || 'click to open'
    }));
  }

  if (modeValue === 'widget') {
    return /*#__PURE__*/React.createElement(Widget, _extends({
      id: formId
    }, rest));
  }

  if (modeValue === 'sliderButton') {
    return /*#__PURE__*/React.createElement(SliderButton, _extends({
      id: formId
    }, rest), /*#__PURE__*/React.createElement(Text$1, {
      field: buttonText || 'click to open'
    }));
  }

  return null;
};

export { Button, react$3 as Checkbox, Container, react as Dropdown, Text as Header, Image, Label, LineBreak as Linebreak, Link, List, Paragraph, react$1 as Radiobutton, TextArea as Textarea, TextInput as Textinput, react$2 as Toggle, TypeForm, Video };
