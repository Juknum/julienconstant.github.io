function LoadCards(IDcategory){

	$.getJSON('https://raw.githubusercontent.com/Juknum/julienconstant.github.io/master/data/portfolio.json', function(data) {

		console.log(data);

    for (var i = 0; i < data[IDcategory].length; i++) {
			var obj = data[IDcategory][i];

			var card   = document.createElement('div').classList.add('card');
			var imgDiv = document.createElement('div').classList.add('card-image','bg-semi-dark');
			var img    = document.createElement('img')
			img.src = obj.image;

			imgDiv.appendChild(img);
			card.appendChild(imgDiv);

			var contentDiv = document.createElement('div').classList.add('card-cotent','bg-dark');

			var h2 = document.createElement('h2').classList.add('card-title');
			h2.innerHTML = obj.title;

			var p = document.createElement('p').classList.add('card-text');
			p.innerHTML = obj.description;

			var btn = document.createElement('a').classList.add('btn-portfolio','card-btn');
			btn.innerHTML = 'En savoir plus';
			btn.href = obj.link;

			contentDiv.appendChild(h2).appendChild(p).appendChild(btn);
			card.appendChild(imgDiv).appendChild(contentDiv);

			cards.appendChild(card);
		}
	});
}