'use strict';

var _marked = /*#__PURE__*/regeneratorRuntime.mark(readMethod);

function readMethod() {
  var data1, data2;
  return regeneratorRuntime.wrap(function readMethod$(_context) {
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
  }, _marked, this);
}