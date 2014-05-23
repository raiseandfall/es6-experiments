spawn(function *() {
  try {
    // 'yield' effectively does an async wait,
    // returning the result of the promise
    let friends = yield getJSON('friends.json');
    addHtml(friends.header);

    // Map our array of chapter urls to
    // an array of chapter json promises.
    // This makes sure they all download parallel.
    let friendPromises = friends.list.map(getJSON);

    for (let friendPromise of friendPromises) {
      // Wait for each chapter to be ready, then add it to the page
      let friend = yield friendPromise;
      addTitle(friend.firstName + ' ' + friend.lastName);
      addHtml(friend.description);
    }

    addText("All done");
  }
  catch (err) {
    // try/catch just works, rejected promises are thrown here
    addText("Argh, broken: " + err.message);
  }
});