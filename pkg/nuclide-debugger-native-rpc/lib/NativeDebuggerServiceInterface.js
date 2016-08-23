Object.defineProperty(exports, '__esModule', {
  value: true
});

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var getAttachTargetInfoList = _asyncToGenerator(function* (targetPid) {
  throw new Error('Not implemented');
});

exports.getAttachTargetInfoList = getAttachTargetInfoList;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { var callNext = step.bind(null, 'next'); var callThrow = step.bind(null, 'throw'); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(callNext, callThrow); } } callNext(); }); }; }

var DebuggerConnection = (function () {
  function DebuggerConnection() {
    _classCallCheck(this, DebuggerConnection);
  }

  _createClass(DebuggerConnection, [{
    key: 'getServerMessageObservable',
    value: function getServerMessageObservable() {
      throw new Error('Not implemented');
    }
  }, {
    key: 'sendCommand',
    value: _asyncToGenerator(function* (message) {
      throw new Error('Not implemented');
    })
  }, {
    key: 'dispose',
    value: _asyncToGenerator(function* () {
      throw new Error('Not implemented');
    })
  }]);

  return DebuggerConnection;
})();

exports.DebuggerConnection = DebuggerConnection;

var NativeDebuggerService = (function () {
  function NativeDebuggerService(config) {
    _classCallCheck(this, NativeDebuggerService);

    throw new Error('Not implemented');
  }

  _createClass(NativeDebuggerService, [{
    key: 'getOutputWindowObservable',
    value: function getOutputWindowObservable() {
      throw new Error('Not implemented');
    }
  }, {
    key: 'attach',
    value: _asyncToGenerator(function* (attachInfo) {
      throw new Error('Not implemented');
    })
  }, {
    key: 'launch',
    value: _asyncToGenerator(function* (launchInfo) {
      throw new Error('Not implemented');
    })
  }, {
    key: 'dispose',
    value: _asyncToGenerator(function* () {
      throw new Error('Not implemented');
    })
  }]);

  return NativeDebuggerService;
})();

exports.NativeDebuggerService = NativeDebuggerService;