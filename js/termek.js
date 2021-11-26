class Termek {
	constructor(elem, adat) {
		this.elem = elem;
		this.adat = adat;
	}

	setAdatok(ertek) {
		this.cim.html(ertek.nev);
		this.kep.attr('src', ertek.kep);
		this.leiras.html(ertek.leiras);
		this.ar.html(ertek.ar);
	}
}

class TermekGaleria extends Termek {
	constructor(elem, adat) {
		super(elem, adat);
		this.cim = this.elem.children('h3');
		this.kep = this.elem.children('img');
		this.leiras = this.elem.children('p');
		this.ar = this.elem.children('span');
		this.gomb = this.elem.children('button');
		this.setAdatok(this.adat);
		this.gomb.on('click', () => {
			console.log(':)');
			this.KattintasTrigger();
		});
	}
	KattintasTrigger() {
		let esemeny = new CustomEvent('kosarbaRak', { detail: this.adat });
		window.dispatchEvent(esemeny);
	}
}

class TermekAdmin extends Termek {
	constructor(elem, adat) {
		super(elem, adat);
		this.cim = this.elem.children('.nev');
		this.kep = this.elem.children('.kep');
		this.leiras = this.elem.children('.leiras');
		this.ar = this.elem.children('.ar');
		this.gomb1 = this.elem.children('.mGomb');
		this.gomb2 = this.elem.children('.tGomb');
		this.gomb3 = this.elem.children('.hGomb');
		console.log(this.cim);
		this.setAdatok(this.adat);
		this.gomb1.on('click', () => {
			console.log('modosit');
			$('.modosit').show();
			this.ModositTrigger();
		});
		this.gomb2.on('click', () => {
			console.log(':(:');
			this.TorolTrigger();
		});
		this.gomb3.on('click', () => {
			console.log('hhh');
			this.HelyreallitTrigger();
		});
	}

	TorolTrigger() {
		console.log(this);
		let esemeny = new CustomEvent('termekTorol', { detail: this.adat });
		window.dispatchEvent(esemeny);
	}

	ModositTrigger() {
		let esemeny = new CustomEvent('termekModosit', { detail: this.adat });
		window.dispatchEvent(esemeny);
	}

	HelyreallitTrigger() {
		let esemeny = new CustomEvent('termekHelyreallit', { detail: this.adat });
		window.dispatchEvent(esemeny);
	}
}
