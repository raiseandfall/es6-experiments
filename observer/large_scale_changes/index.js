function Thingy(a, b) {
  this.a = a;
  this.b = b;
}

Thingy.MULTIPLY = 'multiply';
Thingy.INCREMENT = 'increment';
Thingy.INCREMENT_AND_MULTIPLY = 'incrementAndMultiply';

Thingy.prototype = {
  increment: function(amount) {
  	var notifier = Object.getNotifier(this);

    notifier.performChange(Thingy.INCREMENT, function() {
    	this.a += amount;
      this.b += amount;
    }, this);

    notifier.notify({
      object: this,
      type: Thingy.INCREMENT,
      incremented: amount
    });
  },

  multiply: function(amount) {
    var notifier = Object.getNotifier(this);

    notifier.performChange(Thingy.MULTIPLY, function() {
    	this.a *= amount;
    	this.b *= amount;
    }, this);

    notifier.notify({
      object: this,
      type: Thingy.MULTIPLY,
      multiplied: amount
    });
  },

  incrementAndMultiply: function(incAmount, multAmount) {
  	var notifier = Object.getNotifier(this);

    notifier.performChange(Thingy.INCREMENT_AND_MULTIPLY, function() {
    	this.a += incAmount;
    	this.b += incAmount;

      this.a *= multAmount;
      this.b *= multAmount;
    }, this);

    notifier.notify({
      object: this,
      type: Thingy.INCREMENT_AND_MULTIPLY,
      increment: incAmount,
      multiplied: multAmount
    });
  }
};