function Show(type, lang){
	var divOld = document.getElementById("containerOld");
	var divNew = document.getElementById("containerNew");

	divOld.style.display = 'none';
	divNew.style.display = 'block';

	const gitURL = 'https://raw.githubusercontent.com/Juknum/julienconstant.github.io/master/sources/';
	const endBtn = '<hr> <a class="btn btn-danger" onclick="Hide()"><i class="fas fa-times"></i></a>';

	if ( (type === 'cv' || type === 'portfolio') && lang === 'fr' ) {
		fetch(gitURL + type + '.html')
	  .then(data => data.text())
	  .then(html => divNew.innerHTML = html + endBtn);
	}

}

function Hide(){
	var divOld = document.getElementById("containerOld");
	var divNew = document.getElementById("containerNew");
	divOld.style.display = 'block';
	divNew.style.display = 'none';
	divNew.innerHTML = '';
}