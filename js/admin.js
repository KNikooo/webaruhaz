$(function() {
	const termekek = [];
	const toroltTermekek = [];
	const szulo = $('#tablazat1');
	const sablon = $('.termek');
	let eleresiut = 'http://localhost:3000/termekek';
	/* adatBeolvasas('../termekek.json', termekek, kiir); */
	var i = 0;
	function kiir() {
		termekek.forEach((elem, index) => {
			const ujElem = sablon.clone().appendTo(szulo);
			new TermekAdmin(ujElem, elem);
			//console.log(index);
		});
		sablon.remove();
	}

	myAjax(eleresiut, termekek, kiir);
	function myAjax(eleresiut, tomb, myCallback) {
		tomb.splice(0, tomb.length);
		$.ajax({
			url: eleresiut,
			type: 'GET',
			success: function(result) {
				result.forEach((elem) => {
					tomb.push(elem);
				});
				myCallback(tomb);
			}
		});
	}

	let modosit={
		"id": 1,
		"nev": "Mandarin szappan",
		"leiras": "Móka és kacagás vár a fürdőkárdban",
		"ar": 1479,
		"kep": "../szappan/0.jpg"
	};

	$(window).on('termekTorol', (event) => {
		console.log(':D');
		console.log(event.detail);
		toroltTermekek.push(event.detail);
		//myAjaxDelete(eleresiut, event.detail.id);
		console.log(eleresiut + `/` + event.detail.id);
		console.log(toroltTermekek);
	});

	function toroltElemekKiir() {
		$('#tolroltElemek').empty();
		$('#tolroltElemek').append('<h3>Törölt elemek:</h3>');
		$('#tolroltElemek').append('<table>');
		toroltTermekek.forEach((elem) => {
			$('#tolroltElemek table').append(
				'<tr><td class="nev">' +
					elem.nev +
					'</td><td class="leiras">' +
					elem.leiras +
					'</td><td class="ar">' +
					elem.ar +
					'</td><td class="hGomb"><button>Helyreállít</button></td></tr>'
			);
		});
	}

	function myAjaxDelete(eleresiut, id) {
		$.ajax({
			url: eleresiut + `/` + id,
			type: 'DELETE',
			success: function(result) {
				myAjax(eleresiut, termekek, kiir);
			}
		});
	}
});
