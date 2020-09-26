function LoadPortfolio(lang){

	var data = [];

	$.ajax({
	  url: 'https://raw.githubusercontent.com/Juknum/julienconstant.github.io/master/data/portfolio.json',
	  async: false,
	  dataType: 'json',
	  success: function (json) {
	    data = json;
	  }
	});

	var divOld = document.getElementById("containerOld");
	var divNew = document.getElementById("containerNew");

	divOld.style.display = 'none';
	divNew.style.display = 'block';
	var   html   = '';
	const eof    = '<hr>';
	const endBtn = '<hr> <a class="btn btn-danger" onclick="Hide()"><i class="fas fa-times"></i></a>';

	console.log('json :',data);

	var i = 0;
  var obj = '';

	divNew.innerHTML = '<h2>Projet Personnels:</h2><br>';
	for(var i = 0; i < data.pp.length; i++) {
		obj = data.pp[i];
		html += '<li class="cards-item"><div class="card"><div class="card-image bg-semi-dark"><img src="' + obj.image + '"></div><div class="card-content bg-dark"><h2 class="card-title">' + obj.title + '</h2><p class="card-text">' + obj.description + '</p><a href=' + obj.link + ' class="btn-portfolio card-btn">En savoir plus</a></div></div></li>';
	}

	divNew.innerHTML += html + '<hr><h2>Projet Scolaires:</h2><br>';
	html = '';

	for(var i = 0; i < data.ps.length; i++) {
		obj = data.ps[i];
		html += '<li class="cards-item"><div class="card"><div class="card-image bg-semi-dark"><img src="' + obj.image + '"></div><div class="card-content bg-dark"><h2 class="card-title">' + obj.title + '</h2><p class="card-text">' + obj.description + '</p><a href=' + obj.link + ' class="btn-portfolio card-btn">En savoir plus</a></div></div></li>';
	}

	divNew.innerHTML += html + '<hr><h2>Projet Communautaires:</h2><br>';
	html = '';

	for(var i = 0; i < data.pc.length; i++) {
		obj = data.pc[i];
		html += '<li class="cards-item"><div class="card"><div class="card-image bg-semi-dark"><img src="' + obj.image + '"></div><div class="card-content bg-dark"><h2 class="card-title">' + obj.title + '</h2><p class="card-text">' + obj.description + '</p><a href=' + obj.link + ' class="btn-portfolio card-btn">En savoir plus</a></div></div></li>';
	}

	divNew.innerHTML += endBtn;
}