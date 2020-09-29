function setCookie(name,value,exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires=" + d.toGMTString();
	document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
	name += "=";
	var decodedCookie = decodedURIComponent(document.cookie);
	var ca = decodedCookie.split(";");

	for (var i = 0; i < ca.length; i++){
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}

	return "";
}

function loadColor() {
	var color = getCookie("BACKGROUNDCOLOR");
	if (color != "") {
		document.getElementById("background").style.backgroundColor = '#' + color;
	}
}

function checkColor() {
	var color = prompt("Entrez une couleur héxadécimale :","");
	if (color != "" && color != null) {
		setCookie("BACKGROUNDCOLOR",color,365);
		document.getElementById("background").style.backgroundColor = '#' + color;
	}
}