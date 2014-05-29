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

observer2.callback = function(r) {
  console.log('Observer 2', r);
};

Thingy.observe = function(thingy, callback) {
	Object.observe(thingy, callback, [Thingy.INCREMENT,
                                    Thingy.MULTIPLY,
                                    Thingy.INCREMENT_AND_MULTIPLY,
                                    'update']);
};

Thingy.unobserve = function(thingy, callback) {
	Object.unobserve(thingy);
};