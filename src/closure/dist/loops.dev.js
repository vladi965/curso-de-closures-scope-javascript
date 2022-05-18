"use strict";

var anotherFunction = function anotherFunction() {
  for (var i = 0; i < 10; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
};

anotherFunction();