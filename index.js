class Greeter {
	constructor(message) {
		this.message = message;
	}

	greet() {
		let element = document.querySelector('#message');
		element.innerHTML = this.message;
	}

	arrayComprehension() {
		var array = [for (x of [0, 1, 2]) for (y of [0, 1, 2]) x + '' + y];
		expect(array).to.be.eql([
		  '00', '01', '02', '10', '11', '12', '20', '21', '22'
		]);
	}
}

let greeter = new Greeter('Hello, world !');
greeter.greet();