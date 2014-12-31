// Generated by CoffeeScript 1.7.1
(function(WIN, DOC) {
  "use strict";
  var Bugoo, bind, elBody, entry, exports, noop;
  noop = function() {};
  elBody = DOC.body || DOC.getElementsByTagName("html")[0];
  bind = function(el, evt, callback) {
    return el.addEventListener(evt, callback, false);
  };
  Bugoo = (function() {
    var elAudio;

    elAudio = DOC.createElement("audio");

    function Bugoo(config) {
      this.config = config;
      this.currentTime = 0;
      this.status = "ready";
      this.media = config.media;
      this.startFn = config.start || noop;
      this.loadingFn = config.loading || noop;
      this.timeupdateFn = config.timeupdate || noop;
      this.endFn = config.end || config.stop || noop;
      this.pauseFn = config.pause || noop;
      this.loop = config.loop;
    }

    Bugoo.prototype.play = function() {
      elAudio.play();
      return this;
    };

    Bugoo.prototype.pause = function() {
      elAudio.pause();
      this.status = "paused";
      return this;
    };

    Bugoo.prototype.stop = function() {
      return this.pause();
    };

    Bugoo.prototype.end = function() {
      elAudio.src = elAudio.currentSrc;
      this.status = "ended";
      this.endFn();
      return this;
    };

    Bugoo.prototype.init = function() {
      if (this.status !== "paused") {
        elAudio.src = this.media;
      }
      bind(elAudio, "play", (function(_this) {
        return function() {
          return _this.startFn();
        };
      })(this));
      bind(elAudio, "playing", (function(_this) {
        return function() {
          return _this.status = "playing";
        };
      })(this));
      bind(elAudio, "waiting", (function(_this) {
        return function() {
          _this.status = "loading";
          return _this.loadingFn();
        };
      })(this));
      bind(elAudio, "ended", (function(_this) {
        return function() {
          _this.end();
          return _this.status = "ended";
        };
      })(this));
      bind(elAudio, "timeupdate", (function(_this) {
        return function() {
          _this.currentTime = elAudio.currentTime;
          _this.duration = elAudio.duration;
          return _this.timeupdateFn();
        };
      })(this));
      return this;
    };

    return Bugoo;

  })();
  entry = function(config) {
    return (new Bugoo(config)).init();
  };
  if (typeof exports !== "undefined" && module.exports) {
    return module.exports = exports = entry;
  } else if (typeof define === "function") {
    return define("binnng/bugoo", function(require, exports, module) {
      return module.exports = exports = entry;
    });
  } else if (typeof angular === "object") {
    return angular.module("binnng/bugoo", []).factory("$bugoo", function() {
      return entry;
    });
  } else {
    return WIN["Bugoo"] = entry;
  }
})(window, document);