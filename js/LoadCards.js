function LoadCards(IDcategory){

	$.getJSON('https://raw.githubusercontent.com/Juknum/julienconstant.github.io/master/data/portfolio.json', function(data) {

		console.log(data);

		var cards = document.getElementById(IDcategory);

    for (var i = 0; i < data[IDcategory].length; i++) {
			var obj = data[IDcategory][i];

			var html = '<li class="cards-item"><div class="card"><div class="card-image bg-semi-dark"><img src="' + obj.image + '"></div><div class="card-content bg-dark"><h2 class="card-title">' + obj.title + '</h2><p class="card-text">' + obj.description + '</p><a href=' + obj.link + ' class="btn-portfolio card-btn">En savoir plus</a></div></div></li>'

			cards.innerHTML += html;

		}
	});
}