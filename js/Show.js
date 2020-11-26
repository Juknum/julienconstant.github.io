const nav    = document.getElementById('nav');
const result = document.getElementById('result');
const endbtn = `<button class="btn-close" onclick="Hide()"><i class="fas fa-times"></i></button>`

function ColorsUV(letter){
	var html;

	if (letter == 'A' || letter == 'B' || letter == 'B-' || letter == 'B+') {
		html = `<span class="badge badge-green">` + letter + `</span>`;
	} else if (letter == 'C' || letter == 'C-' || letter == 'C+' || letter == 'D' || letter == 'D-' || letter == 'D+') {
		html = `<span class="badge badge-light-green">` + letter + `</span>`;
	} else if (letter == 'E' || letter == 'E-' || letter == 'E+' ) {
		html = `<span class="badge badge-orange">` + letter + `</span>`;
	} else if (letter == 'F' || letter == 'F-' || letter == 'F+' || letter == 'Fx' ) {
		html = `<span class="badge badge-red">` + letter + `</span>`;
	} else {
		html = letter;
	}

	return html;
}

function Show(type, lang){
	var html;

	result.style.display = 'block';

	$.getJSON('data/' + lang + '/' + type + '.json', function(json){
		console.log(json);

		if (type === 'cv') {

			// INFORMATION
			result.innerHTML =
			`
				<h2>` + json.information.title + `</h2>
				<div class="row">
					<div class="card col">
						<div class="row">
							<div class="col"><strong class="text-uppercase">` + json.information.age[0] + `</strong></div>
							<div class="col">` + json.information.age[1] + `</div>
						</div>
						<div class="row">
							<div class="col"><strong class="text-uppercase">` + json.information.mail[0] + `</strong></div>
							<div class="col">` + json.information.mail[1] + `</div>
						</div>
						<div class="row">
							<div class="col"><strong class="text-uppercase">` + json.information.phone[0] + `</strong></div>
							<div class="col">` + json.information.phone[1] + `</div>
						</div>
						<div class="row">
							<div class="col"><strong class="text-uppercase">` + json.information.adress[0] + `</strong></div>
							<div class="col">` + json.information.adress[1] + `</div>
						</div>
						<div class="row">
							<div class="col"><strong class="text-uppercase">` + json.information.lang[0] + `</strong></div>
							<div class="col">` + json.information.lang[1] + `</div>
						</div>
					</div>
					<div class="card col">
						<p align="justify" class="card-text">` + json.information.shortText + `</p>
					</div>
				</div>

				<hr>
			`

			html =	`<h2>` + json.progress.title + `</h2> <div class="row"><div class="col">`

			for (var i in json.progress.list1) {
				html +=
					`
						<h6>` + i + `</h6>
						<div class="progress">
							<div class="progress-bar bg-dark" style="width:` + json.progress.list1[i] + `">` + json.progress.list1[i] + `</div>
						</div>
						<br>
					`
			}

			html += 
				`
					</div>
					<div class="col">
				`

			for (var i in json.progress.list2) {
				html +=
					`
						<h6>` + i + `</h6>
						<div class="progress">
							<div class="progress-bar bg-dark" style="width:` + json.progress.list2[i] + `">` + json.progress.list2[i] + `</div>
						</div>
						<br>
					`
			}

			result.innerHTML += html + `</div></div><hr>`

			// SCHOOL 

			html = `<h2>` + json.school.title + `</h2>`

			for (var i in json.school.list) {
				html +=
				`
					<div class="card">
						<div class="row">
							<div class="col">
								<div class="card-body">
									<h4>` + json.school.list[i].title + `</h4>
									<h6>` + json.school.list[i].school + `, ` + json.school.list[i].year + `</h6>
									<p>` + json.school.list[i].mention + `</p>
									<p>` + json.school.list[i].description;

				if (i == 0){
					html += `<div class="row">`;
					for (var j in json.school.list[i].uvs){
						html += `<br><div class="col"><table><thead><tr><th colspan="4" class="semester">` + j + `</th></tr></thead><tbody>`;
						for (var w in json.school.list[i].uvs[j]){
							html += `
							<tr>
								<td class="uv"><a data-toggle="tooltip" title="` + json.school.list[i].uvs[j][w][4] + `">` + w + `</a></td>
								<td class="letter"><a data-toggle="tooltip" title="` + json.school.list[i].uvs[j][w][3] + `">` + ColorsUV(json.school.list[i].uvs[j][w][0]) + `</a></td>
								<td class="type">` + json.school.list[i].uvs[j][w][2] + `</td>
								<td class="credits">` + json.school.list[i].uvs[j][w][1] + `</td>
							</tr>`;
						}
						html += `</table></div>`;
					}
				}

				html += `</div></p></div></div></div></div>`;
			}

			result.innerHTML += html;

		}

		nav.style.display = 'none';
		result.innerHTML += endbtn;

	});

}