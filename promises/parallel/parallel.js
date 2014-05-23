// Load in parallel
getJSON('friends.json').then(function(data) {
  addHtml(data.header);

  return data.list.map(getJSON)
      .reduce(function(sequence, friendPromise) {
        
        console.log('reduce result');
        
      	return sequence.then(function() {

          console.log('reduce result 2');

      		return friendPromise;
      	}).then(function(friend) {

          console.log('reduce result 3');

          addTitle(friend.firstName + ' ' + friend.lastName);
          addHtml(friend.description);
      	});
      }, Promise.resolve());
}).then(function() {
  console.log('Content loaded');
	addText('Content loaded');
}).catch(function(err) {
	addText('Failed :' + err.message);
}).then(function() {
	document.querySelector('.spinner').style.display = 'none';
});
