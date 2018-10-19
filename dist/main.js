(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global.App = factory();
})(this, function() {
  "use strict";
  var logger = {
    logger: window.console,
    enabled: false,
    log: function log() {
      if (logger.enabled) {
        for (var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++) {
          messages[_key] = arguments[_key];
        }
        messages.push(Date.now());
        logger.log.apply(logger, [ "[Foo]" ].concat(messages));
      }
    }
  };
  var log = logger.log.bind(logger);
  var Foo = {};
  Foo.log = log;
  Foo.logger = logger;
  return Foo;
});
