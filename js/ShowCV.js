function ShowCV(){
	var divOld = document.getElementById("containerOld");
	var divNew = document.getElementById("containerNew");

	divOld.style.display = 'none';
	divNew.style.display = 'block';

	fetch('https://raw.githubusercontent.com/Juknum/julienconstant.github.io/master/sources/cv.html')
  .then(data => data.text())
  .then(html => divNew.innerHTML = '<a class="btn btn-dark" onclick="HideCV()"><i class="fas fa-times"></i>Fermer</a> <br>' + html);
}

function HideCV(){
	var divOld = document.getElementById("containerOld");
	var divNew = document.getElementById("containerNew");
	divOld.style.display = 'block';
	divNew.style.display = 'none';
	divNew.innerHTML = '';
}