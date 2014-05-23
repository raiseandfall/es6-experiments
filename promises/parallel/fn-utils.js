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