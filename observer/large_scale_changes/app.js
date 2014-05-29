var thingy = new Thingy(2, 4);

Object.observe(thingy, observer.callback);
Thingy.observe(thingy, observer2.callback);

thingy.increment(3);
thingy.b++;
thingy.multiply(2);
thingy.a++;
thingy.incrementAndMultiply(2, 2);

function incr() {
  thingy.increment(1);
  draw();
}

function mult() {
  thingy.multiply(2);
  draw();
}

function incrAndMult() {
  thingy.incrementAndMultiply(1, 2);
  draw();
}

function draw() {
  document.getElementById('spanA').innerHTML = thingy.a;
  document.getElementById('spanB').innerHTML = thingy.b;
}