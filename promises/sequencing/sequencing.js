// Promise with array reduce
getJSON('friends.json').then(function(data) {
  addHtml(data.header);

  return data.list.reduce(function(sequence, friend) {
    return sequence.then(function() {
      return getJSON(friend);
    }).then(function(friend) {
      addTitle(friend.firstName + ' ' + friend.lastName);
      addHtml(friend.description);
    });
  }, Promise.resolve());

}).then(function() {
	addText('Content loaded');
}).catch(function(err) {
	addText('Failed :' + err.message);
}).then(function() {
	document.querySelector('.spinner').style.display = 'none';
});


// Promise all
getJSON('friends.json').then(function(data) {
	addHtml(data.header);

  return Promise.all(
    data.list.map(getJSON)
  );
}).then(function(friends) {
	friends.forEach(function(friend) {
    addTitle(friend.firstName + ' ' + friend.lastName);
    addHtml(friend.description);
	});
  addText('Content loaded');
}).catch(function(err) {
  addText('Failed :' + err.message);
}).then(function() {
  document.querySelector('.spinner').style.display = 'none';
});