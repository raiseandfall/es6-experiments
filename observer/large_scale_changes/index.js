function Thingy(a, b, c) {
  this.a = a;
  this.b = b;
}

Thingy.MULTIPLY = 'multiply';
Thingy.INCREMENT = 'increment';
Thingy.INCREMENT_AND_MULTIPLY = 'incrementAndMultiply';

var observer = {},
    observer2 = {
      records: undefined,
      callbackCount: 0,
      reset: function() {
        this.records = undefined;
        this.callbackCount = 0;
      }
    };

observer.callback = function(r) {
  console.log('Observer', r);
  observer.records = r;
  observer.callbackCount++;
};

Thingy.prototype = {
  increment: function(amount) {
  	var notifier = Object.getNotifier(this);
    var that = this;

    notifier.performChange(Thingy.INCREMENT, function() {
      that.a += amount;
      that.b += amount;
    }, this);

    notifier.notify({
      object: this,
      type: Thingy.INCREMENT,
      incremented: amount
    });
  },

  multiply: function(amount) {
    var notifier = Object.getNotifier(this);
    var that = this;

    notifier.performChange(Thingy.MULTIPLY, function() {
      that.a *= amount;
      that.b *= amount;
    }, this);

    notifier.notify({
      object: this,
      type: Thingy.MULTIPLY,
      multiplied: amount
    });
  },

  incrementAndMultiply: function(incAmount, multAmount) {
  	var notifier = Object.getNotifier(this);
    var that = this;

    notifier.performChange(Thingy.INCREMENT_AND_MULTIPLY, function() {
      that.increment(incAmount);
      that.multiply(multAmount);
    }, this);

    notifier.notify({
      object: this,
      type: Thingy.INCREMENT_AND_MULTIPLY,
      incremented: incAmount,
      multiplied: multAmount
    });
  }
};

observer2.callback = function(r){
  console.log('Observer 2', r);
  draw();
};

Thingy.observe = function(thingy, callback) {
  Object.observe(thingy, callback, [Thingy.INCREMENT,
                                    Thingy.MULTIPLY,
                                    Thingy.INCREMENT_AND_MULTIPLY,
                                    'updated']);
};

Thingy.unobserve = function(thingy, callback) {
  Object.unobserve(thingy);
};


var thingy = new Thingy(2, 4);
draw();

Object.observe(thingy, observer.callback);
Thingy.observe(thingy, observer2.callback);

function incr() {
  thingy.increment(1);
}

function mult() {
  thingy.multiply(2);
}

function incrAndMult() {
  thingy.incrementAndMultiply(1, 2);
}

function draw() {
  document.getElementById('spanA').innerHTML = thingy.a;
  document.getElementById('spanB').innerHTML = thingy.b;
}