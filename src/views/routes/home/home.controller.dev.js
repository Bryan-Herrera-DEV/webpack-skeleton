"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _home = _interopRequireDefault(require("./home.html"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Fecha de finalización del objeto dayjs, los últimos 30 días, incluida la fecha actual, debe restar 29 días de la fecha actual
var _default = function _default() {
  var div_Element = document.createElement('div');
  div_Element.classList.add('home');
  div_Element.innerHTML = _home["default"];
  return div_Element;
};

exports["default"] = _default;