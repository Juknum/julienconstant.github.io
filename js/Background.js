function LoadBackground(value) {
	var cookieBackground = localStorage.getItem('BackgroundCookieSelectorJC-Juknum');

	// If cookie doesn't exist :
	if (cookieBackground === undefined) {

		localStorage.setItem('BackgroundCookieSelectorJC-Juknum',0);
		LoadBackground(0);

		// If cookie already exist :
	} else {

		var mp4    = document.getElementById('video-mp4');
		var webm   = document.getElementById('video-webm');
		var poster = document.getElementById('poster');

		cookieBackground = parseInt(cookieBackground, 10);

		console.log(cookieBackground);
		cookieBackground += value;
		console.log(cookieBackground);

		// Default background :
		if (cookieBackground === 0) {
			poster.style.display = 'block'

			mp4.setAttribute('src', 'https://www.w3schools.com/howto/rain.mp4');
		}

		// New one : 
		if (cookieBackground === 1) {
			poster.style.display = 'block';

			mp4.setAttribute('src', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/1263950/248954cba9bc08b6e16c676f5c1814ff823af907.mp4');
			webm.setAttribute('src', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/1263950/4d466f77edf3265a253fba79d47bc91a37e34920.webm');
			poster.setAttribute('poster', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/1263950/da538bac62ee5e233cd82bb75b0d3c47ba0cdc03.jpg');
		}

		if (cookieBackground === 2) {
			poster.style.display = 'none';
			var background = document.getElementById('background');
			background.style.backgroundColor = 'pink';

		}

		if (cookieBackground > 1) cookieBackground = -1;

		poster.play();
		localStorage.setItem('BackgroundCookieSelectorJC-Juknum',cookieBackground)

	}

}