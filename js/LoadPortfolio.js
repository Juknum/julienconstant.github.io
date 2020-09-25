function LoadPortfolio(lang){
	var divOld = document.getElementById("containerOld");
	var divNew = document.getElementById("containerNew");

	divOld.style.display = 'none';
	divNew.style.display = 'block';

	$.getJSON('https://raw.githubusercontent.com/Juknum/julienconstant.github.io/master/data/portfolio.json', function(data) {

		var containerNew = document.getElementById('containerNew');
		var html = '';
		var eof = '<hr>';

		console.log(data);

		for (var k = 0; k < data.length; i++){
			var title = '<h2>' + data[k] + '</h2><br>'

	    for (var i = 0; i < data[k].length; i++) {
				var obj = data[k][i];

				html += '<li class="cards-item"><div class="card"><div class="card-image bg-semi-dark"><img src="' + obj.image + '"></div><div class="card-content bg-dark"><h2 class="card-title">' + obj.title + '</h2><p class="card-text">' + obj.description + '</p><a href=' + obj.link + ' class="btn-portfolio card-btn">En savoir plus</a></div></div></li>'

			}

			containerNew.innerHTML += title + html + eof;
			html = '';
		}

	});
}