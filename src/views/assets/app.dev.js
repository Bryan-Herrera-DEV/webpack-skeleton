"use strict";

var _index = require("./../../route/index.router");

/* Animaciones entrada */
require('./style.min.css');

//listener para los hashlocationa
window.location.hash = window.location.hash || '#/';
(0, _index.router)(window.location.hash);
window.addEventListener('hashchange', function () {
  (0, _index.router)(window.location.hash);
  /*if (window.location.hash === '#/markets') {
      
  }
  if (window.location.hash == '#/api' || window.location.hash == '#/api/documentation') {
      
    } else {
      
    }
  if (window.location.hash == '#/api/documentation') {
      
  }*/
});