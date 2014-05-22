var friendsPromise;

function getFriend(i) {
  friendsPromise = friendsPromise || getJSON('friends.json');

  return friendsPromise.then(function(friends) {
  	return getJSON(friends.list[i]);
  });
}

getFriend(0).then(function(friend) {
	console.log('Friend :', friend.firstName + ' ' + friend.lastName);
  return getFriend(1);
}).then(function(friend) {
  console.log('Friend :', friend.firstName + ' ' + friend.lastName);
});