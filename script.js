function loadAjax() {

var myRequest;

if (window.XMLHttpRequest) {
	myRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) {
	myRequest = new ActiveXObject('Microsoft.XMLHTTP');
}

myRequest.onreadystatechange = function() {
	console.log("We're called!");
	console.log(myRequest.readyState);
	if (myRequest.readyState == 4) {
		var ajaxText = document.createTextNode(myRequest.responseText);
		var p = document.createElement('p');
		p.appendChild(ajaxText);
		document.getElementById('ajaxHere').appendChild(p);
	}
};

myRequest.open("GET", "sample.txt", true);
myRequest.send();

}

window.onload = loadAjax();
