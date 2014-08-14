
function Point (x, y) {
  this._x = x;
  this._y = y;
}

Point.prototype = {
  withX: function(val) {
    return new Point(val, this._y);
  },

  withY: function(val) {
    return new Point(this._x, val);
  }
}

exports.Point = Point;
