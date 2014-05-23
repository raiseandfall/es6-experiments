var _vinyls = [],
    vinyls = [],
    library = {
      vinyls: []
    };

// Observer callback
function observer(changes) {
  changes.forEach(function(change) {
    console.log('change :', change);

    if (change.type === 'splice') {
      for (var i in change.object) {
        var it = change.object[i];
        addLibraryItem(it.artist+' - '+it.album, it.year+' - '+it.label, it.image);
      }
    }
  });
}

Array.observe(library.vinyls, observer);

library.vinyls.push({
  artist: 'Big Joe Williams',
  album: 'Crawlin\' King Snake',
  year: '1970',
  label: 'RCA International',
  image: 'http://s.pixogs.com/image/R-2660869-1295449945.jpeg'
},{
  artist: 'Nick Garrie',
  album: 'The Nightmare Of J. B. Stanislas',
  year: '1968',
  label: 'Elefant Records',
  image: 'http://s.pixogs.com/image/R-1656222-1289507750.jpeg'
});
