// Different types of error handling

get('friends-false.json').then(function(response) {
  console.log('Success', response);
}, function(error) {
  console.log('Failed with regular promise fail', error);
});

get('friends-false.json').then(function(response) {
  console.log('Success', response);
}).catch(function(error) {
	console.log('Failed with catch', error);
});

get('friends-false.json').then(function(response) {
  console.log('Success', response);
}).then(undefined, function(error) {
	console.log('Failed with skipping to the next then', error);
});