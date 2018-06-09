'use strict';

var readMethod = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var data1, data2;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return read('1.txt', 'utf8');

          case 2:
            data1 = _context.sent;
            _context.next = 5;
            return read(data1, 'utf8');

          case 5:
            data2 = _context.sent;
            return _context.abrupt('return', data2);

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function readMethod() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { //async + await = generator+ co库
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
      function step(key, arg) {
        // it.next()
        var info = gen[key](arg);
        var value = info.value;
         if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      } 
      return step("next");
    });
  };
}