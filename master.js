var numClicks = 0;
var pointIncrement = 1;

function generatePoints() {
	
	/*if (numClicks==25) {
		document.getElementById("pic").style.visibility="visible";
	}*/

	if (numClicks==24) {
		document.getElementById("firstUpgrade").style.visibility="visible";
	}

	numClicks = numClicks + pointIncrement;
	document.getElementById("p1").innerHTML = numClicks;
	
}

