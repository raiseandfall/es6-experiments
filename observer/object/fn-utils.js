var container = document.getElementById('changes');

function addHtml(data) {
  var div = document.createElement('div');
  div.innerHTML = data;
  container.appendChild(div);
}

function addLibraryItem(title, content, path) {
  var itemDiv = document.createElement('div');
  itemDiv.className = 'item';

  var img = document.createElement('img');
  img.style.float = 'left';
  img.src = path;
  img.style.width = '70px';

  var textDiv = document.createElement('div');
  textDiv.style.float = 'left';
  textDiv.style.paddingLeft = '10px';

  var h3 = document.createElement('h3');
  h3.textContent = title;
  h3.style.marginTop = '5px';
  var p = document.createElement('p');
  p.textContent = content;

  textDiv.appendChild(h3);
  textDiv.appendChild(p);

  itemDiv.appendChild(img);
  itemDiv.appendChild(textDiv);

  container.appendChild(itemDiv);
}

function buildLibrary(data) {
  container.innerHTML = '';
  for (var i in data) {
    var it = data[i];
    addLibraryItem(it.artist+' - '+it.album, it.year+' - '+it.label, it.image);
  }
}