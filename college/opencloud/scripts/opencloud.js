function bringBack(x) {
	if (x.matches) {
		document.getElementById('topNav').style.display = "block";
	} else {
		document.getElementById('burger').src = "images/hamburger.png";
		document.getElementById('topNav').style.display = "none";
	}
} //Thanks to https://www.w3schools.com/howto/howto_js_media_queries.asp

function navListen() {
	var x = window.matchMedia("(min-width:937px)");
	bringBack(x);
	x.addListener (bringBack);
}

function menu(i) {
	if (i.style.display !== "block") {
		i.style.display = "block";
		document.getElementById('burger').src = "images/close1.png";
	} else {
		i.style.display = "none";
		document.getElementById('burger').src = "images/hamburger.png";
	}
}

function validForm() {
	var x = document.forms["contact"]["flname"].value;
	var y = document.forms["contact"]["emailAddress"].value;
	var z = document.forms["contact"]["message"].value;
	var warning = "The field/s for (";
	if (x == "") {
		warning += "name";
	}
	if (y == "") {
		if (x == "") {
			warning += ", email";
		} else (warning += "email")
	}
	if (z == "") {
		if (x == "" || y == "") {
			warning += ", message";
		} else {warning += "message";}
	}
	warning += ") must be filled out."
	alert (warning);
	return false;
}