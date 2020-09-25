function LoadCards(IDcategory){

	$.getJSON('https://raw.githubusercontent.com/Juknum/julienconstant.github.io/master/data/portfolio.json', function(data) {

		console.log(data);

		var cards = document.getElementById(IDcategory);

    for (var i = 0; i < data[IDcategory].length; i++) {
			var obj = data[IDcategory][i];

			var card       = document.createElement('div').classList.add('card');
			var imgDiv     = document.createElement('div').classList.add('card-image','bg-semi-dark');
			var img        = document.createElement('img')
			var contentDiv = document.createElement('div').classList.add('card-cotent','bg-dark');
			var h2         = document.createElement('h2').classList.add('card-title');
			var p          = document.createElement('p').classList.add('card-text');
			var btn        = document.createElement('a').classList.add('btn-portfolio','card-btn');
			
			cards.appendChild(card);
			card.appendChild(imgDiv)
			card.appendChild(contentDiv);
			contentDiv.appendChild(h2)
			contentDiv.appendChild(p)
			contentDiv.appendChild(btn);
			imgDiv.appendChild(img);

			p.innerHTML   = obj.description;
			h2.innerHTML  = obj.title;
			img.src       = obj.image;
			btn.innerHTML = 'En savoir plus';
			btn.href      = obj.link;
		}
	});
}