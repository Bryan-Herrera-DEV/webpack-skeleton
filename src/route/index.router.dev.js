"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _homeController = _interopRequireDefault(require("./../views/routes/home/home.controller.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var content = document.getElementById('root');

var router = function router(_router) {
  switch (_router) {
    case '#/' || '#' || '/' || '':
      try {
        if (content.firstChild) {
          content.removeChild(content.firstChild);
        }
      } catch (error) {
        console.log(error);
      }

      content.appendChild((0, _homeController["default"])());
      break;

    default:
      alert('404');
      break;

    /*try {
        content.removeChild(content.firstChild);
    } catch (error) {
        console.log(error);
    }
    content.appendChild(notfound());
    break;*/
  }
};

exports.router = router;