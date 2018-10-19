(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global.App = factory();
})(this, function() {
  "use strict";
  var toConsumableArray = function(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
      return arr2;
    } else {
      return Array.from(arr);
    }
  };
  var logger = {
    logger: window.console,
    enabled: false,
    log: function log() {
      if (logger.enabled) {
        for (var _len = arguments.length, messages = Array(_len), _key = 0; _key < _len; _key++) {
          messages[_key] = arguments[_key];
        }
        messages.push(Date.now());
        logger.log.apply(logger, [ "[Foo]" ].concat(toConsumableArray(messages)));
      }
    }
  };
  var log = logger.log.bind(logger);
  var Foo = {};
  Foo.log = log;
  Foo.logger = logger;
  return Foo;
});
