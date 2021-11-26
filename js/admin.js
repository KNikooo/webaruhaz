$(function() {
	const ajaxHivas = new AjaxHivas();
	let eleresiut = 'http://localhost:3000/termekek';
	let toroltT = 'http://localhost:3000/torolT';

	ajaxHivas.getAjax(eleresiut, kiir);
	ajaxHivas.getAjax(toroltT, kiir2);

	function kiir(termekek) {
		const szulo = $('#tablazat1');
		const sablon = $('.termek');

		termekek.forEach((elem) => {
			const ujElem = sablon.clone().appendTo(szulo);
			new TermekAdmin(ujElem, elem);
		});
		sablon.remove();
		$('.modosit').hide();
	}

	function kiir2(torolT) {
		const szulo = $('#tablazat2');
		const sablon = $('.termek2');

		torolT.forEach((elem) => {
			const ujElem = sablon.clone().appendTo(szulo);
			new TermekAdmin(ujElem, elem);
		});
		sablon.remove();
		$('.modosit').hide();
	}

	$(window).on('termekTorol', (event) => {
		console.log(':D');
		console.log(event.detail);
		ajaxHivas.postAjax(toroltT, event.detail);
		ajaxHivas.deleteAjax(eleresiut, event.detail.id);
		//console.log(eleresiut + `/` + event.detail.id);
	});

	$(window).on('termekModosit', (event) => {
		$('#i').hide();
		$('#k').hide();
		$('#id').attr('value', event.detail.id);
		$('#termeknev').attr('value', event.detail.nev);
		$('#kep').attr('value', event.detail.kep);
		$('#leiras').attr('value', event.detail.leiras);
		$('#ar').attr('value', event.detail.ar);
	});

	$(window).on('termekHelyreallit', (event) => {
		console.log(event.detail);
		ajaxHivas.postAjax(eleresiut, event.detail);
		ajaxHivas.deleteAjax(toroltT, event.detail.id);
	});

	$('#ok').on('click', () => {
		//$('.modosit').hide();
		let id = $('#id').val();
		let kep = $('#kep').val();
		let nev = $('#termeknev').val();
		let leiras = $('#leiras').val();
		let ar = $('#ar').val();

    let adat={
      "id":id,
      "nev":nev,
	  "kep":kep,
      "leiras":leiras,
      "ar":ar
    }
		console.log(id);
		ajaxHivas.putAjax(eleresiut, adat, id);
	});
});
