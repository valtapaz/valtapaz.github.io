window.addEventListener('scroll',parallax);
function parallax() {
	const itemToScroll = document.querySelectorAll(".parallax");
	var length = itemToScroll.length;
	for (var i = 0; i < length; i++) {
		var position = window.pageYOffset * itemToScroll[i].dataset.scrollrate;
		//Below: affects #topVine
		if (itemToScroll[i].dataset.scrolltype == "pos") {itemToScroll[i].style.transform = "translate3d(0px,"+position+"px,0px)";}
		//Below four lines: affects beetle images; first lines concern position while the final two concern rotation
		//else if (itemToScroll[i].id == "bugContainer1") {itemToScroll[i].style.transform = "translate3d("+(position * 1.5)+"px,"+(position * 3.5)+"px,0px)";}
		else if (itemToScroll[i].id == "bugContainer1") {itemToScroll[i].style.transform = "translate3d("+(position * 1.45)+"px,"+(position * .2)+"px,0px)";}
		else if (itemToScroll[i].id == "bugContainer2") {itemToScroll[i].style.transform = "translate3d("+(position * -.5)+"px,"+(position * -3.2)+"px,0px)";}
		else if (itemToScroll[i].alt == "decorational beetle") {itemToScroll[i].style.transform = "rotate("+(130+(Math.random()*10))+"deg)";}
		else if (itemToScroll[i].alt == "decorational beetle 2") {itemToScroll[i].style.transform = "rotate("+(335+(Math.random()*8))+"deg)";}
		//Below: affects the wrapper and the body background
		else {itemToScroll[i].style.backgroundPositionY = position+"px";}
	}
}

/*function email() {
	alert("hi;");
	var emailScrambled = "'&106' + 'tpav' + 'l' + '&#97;t' + '@' + '&#101;&$#97;rthlin' + 'k' '.&110;e&116'";
	//document.getElementById(email).href = 'mailto:' + emailScrambled + "";
	alert(document.getElementById(email).href);
	//document.getElementById(portfolio).innerHTML = 'mailto:' + emailScrambled;
};

function toggleBasic(content, trigger) {
	if (content.style.display == "none" || content.style.display == "") {content.style.display = "block";} 
	else {content.style.display = "none";}
}*/

function toggleAdvanced(content) {
	if (content.style.display == "none" || content.style.display == "") {
		content.style.display = "block";
		setTimeout(function(){content.style.opacity = "1";},30);
	}
	else {
		content.style.opacity = "0";
		setTimeout(function(){content.style.display = "none";},300);
	}
}





