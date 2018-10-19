(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global.App = factory();
})(this, function() {
  "use strict";
  var logger = {
    logger: window.console,
    enabled: false
  };
  var log = function log() {
    if (logger.enabled) {
      var _logger$logger;
      for (var _len = arguments.length, messages = Array(_len), _key = 0; _key < _len; _key++) {
        messages[_key] = arguments[_key];
      }
      messages.push(Date.now());
      (_logger$logger = logger.logger).log.apply(_logger$logger, [ "[Foo]" ].concat(messages));
    }
  };
  var Foo = {};
  Foo.log = log;
  Foo.logger = logger;
  return Foo;
});
