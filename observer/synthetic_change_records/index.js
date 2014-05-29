function Circle(r) {
  var radius = r;

  var notifier = Object.getNotifier(this);
  function notifyAreaAndRadius(radius) {
    notifier.notify({
      type: 'update',
      name: 'radius',
      oldValue: radius
    });
    notifier.notify({
      type: 'update',
      name: 'area',
      oldValue: Math.pow(radius * Math.PI, 2)
    });
  }

  Object.defineProperty(this, 'radius', {
    get: function() {
    	return radius;
    },
    set: function(r) {
      if (radius === r)
        return;
      notifyAreaAndRadius(r);
      radius = r;
    }
  });

  Object.defineProperty(this, 'area', {
    get: function() {
    	return Math.pow(radius, 2) * Math.PI;
    },
    set: function(a) {
    	r = Math.sqrt(a)/Math.PI;
      notifyAreaAndRadius(radius);
      radius = r;
    }
  });
}

function observer(changes) {
  changes.forEach(function(change, i) {
  	console.log(change);
  });
}
