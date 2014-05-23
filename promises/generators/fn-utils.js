var friendsDiv = document.querySelector('.friends');

function addHtml(data) {
  var div = document.createElement('div');
  div.innerHTML = data;
  friendsDiv.appendChild(div);
}

function addTitle(data) {
  var h3 = document.createElement('h3');
  h3.textContent = data;
  friendsDiv.appendChild(h3);
}

function addText(data) {
  var p = document.createElement('p');
  p.textContent = data;
  friendsDiv.appendChild(p);
}


function spawn(generatorFunc) {
  function continuer(verb, arg) {
    var result;
    try {
      result = generator[verb](arg);
    } catch (err) {
      return Promise.reject(err);
    }
    if (result.done) {
      return result.value;
    } else {
      return Promise.resolve(result.value).then(onFulfilled, onRejected);
    }
  }
  var generator = generatorFunc();
  var onFulfilled = continuer.bind(continuer, "next");
  var onRejected = continuer.bind(continuer, "throw");
  return onFulfilled();
}