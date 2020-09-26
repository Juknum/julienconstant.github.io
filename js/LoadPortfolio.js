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
	var html = '';
	const eof = '<hr>';
	const endBtn = '<hr> <a class="btn btn-danger" onclick="Hide()"><i class="fas fa-times"></i></a>';

	console.log('json :',data);

	for (var k = 0; k < 3; k++){
		var title = '<h2>' + data[k] + '</h2><br>'

        console.log(k,data.length);
		
    for (var i = 0; i < 4; i++) {
			var obj = data[k][i];
			console.log('data[',k,'] : ',obj);
			html += '<li class="cards-item"><div class="card"><div class="card-image bg-semi-dark"><img src="' + obj.image + '"></div><div class="card-content bg-dark"><h2 class="card-title">' + obj.title + '</h2><p class="card-text">' + obj.description + '</p><a href=' + obj.link + ' class="btn-portfolio card-btn">En savoir plus</a></div></div></li>'
		}

		divNew.innerHTML += title + html + eof;
		html = '';
	}

	divNew.innerHTML += endBtn;
}