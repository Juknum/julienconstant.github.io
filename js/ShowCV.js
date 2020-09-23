function ShowCV(){
	var divOld = document.getElementById("containerOld");
	var divNew = document.getElementById("containerNew");

	divOld.style.display = 'hidden';
	divNew.style.display = 'block';

	$("#containerNew").load("https://github.com/Juknum/julienconstant.github.io/tree/master/sources/cv.html");
}