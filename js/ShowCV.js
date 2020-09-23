function ShowCV(){
	var divOld = document.getElementById("containerOld");
	var divNew = document.getElementById("containerNew");

	divOld.style.display = 'hidden';
	divNew.style.display = 'block';

	fetch('https://raw.githubusercontent.com/Juknum/julienconstant.github.io/master/sources/cv.html')
  .then(data => data.text())
  .then(html => divNew.innerHTML = html);
}