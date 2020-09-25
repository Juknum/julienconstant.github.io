function LoadCards(IDcategory){
	var requestURL = 'https://raw.githubusercontent.com/Juknum/julienconstant.github.io/master/data/portfolio.json';
	var request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();

	request.onload = function() {
		var json = request.response;
		var cards = document.getElementById(IDcategory);

		for (var i = 0; i < json[category].length; i++) {

			var obj = json[category][i];

			var card = document.createElement('div').classList.add('card');
			var imgDiv = document.createElement('div').classList.add('card-image bg-semi-dark');
			var img = document.createElement('img')
			img.src = obj.image;

			imgDiv.appendChild(img);
			card.appendChild(imgDiv);

			var contentDiv = document.createElement('div').classList.add('card-cotent bg-dark');

			var h2 = document.createElement('h2').classList.add('card-title');
			h2.innerHTML = obj.title;

			var p = document.createElement('p').classList.add('card-text');
			p.innerHTML = obj.description;

			var btn = document.createElement('a').classList.add('btn-portfolio card-btn');
			btn.innerHTML = 'En savoir plus';
			btn.href = json.link;

			contentDiv.appendChild(h2).appendChild(p).appendChild(btn);
			card.appendChild(imgDiv).appendChild(contentDiv);

			cards.appendChild(card);
		}
		
	}
}