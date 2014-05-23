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


//
var jsonPromise = new Promise(function(resolve, reject) {
	resolve(JSON.parse('{"firstName":"Gebertrude", "description":"Martin"}'));
});

jsonPromise.then(function(data) {
	console.log('Parsing JSON worked', data);
}).catch(function(err) {
	console.log('Parsing JSON failed', err);
});


// 
get('/').then(JSON.parse).then(function() {
	console.log('JSON parsing worked', data);
}).catch(function(err) {
	console.log('JSON parsing failed', err);
});