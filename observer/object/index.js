var _item = [],
    current = {
      music: {},
      book: {}
    };

// Notifier
Object.defineProperty(current, 'music', {
  get: function() {
  	return _item;
  },
  set: function(item) {
  	Object.getNotifier(this).notify({
      type: 'update',
      name: 'music',
      oldValue: _item
    });
    console.log('set', item);
    _item = item;
  }
});

// Observer callback
function observer(changes) {
  changes.forEach(function(change) {
    console.log('change :', change);

    if (change.type === 'update') {
      buildLibrary(change.object);
    }
  });
}

Object.observe(current, observer);

current.music = {
  artist: 'Carlton Melton',
  album: 'Slow Wake',
  year: '2013',
  label: 'Agitated Records',
  image: 'http://s.pixogs.com/image/R-4954069-1380459336-1575.jpeg'
};
current.book = {
  artist: 'Saul Alinsky',
  album: 'Rules for Radicals: A Pragmatic Primer for Realistic Radicals',
  year: '1971',
  label: 'Random House',
  image: 'http://upload.wikimedia.org/wikipedia/en/6/62/Rules_for_Radicals.png'
};
