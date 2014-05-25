var numClicks = 0;

function storePoints() {
	numClicks = numClicks + 1;
}

function start() {
	var message = "Hello world!";
	confirm(message);
}

function displayPoints() {
	document.write(numClicks);
}