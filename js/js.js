$(function () {
  const termekek = [];
  const szulo = $("article");
  const sablon = $(".termek");
  const szulo2 = $("section");
  const sablon2 = $(".termekek");
  let aktIndex = 0;

  let eleresiut = "http://localhost:3000/termekek";
  $("#ok").on("click",()=>{
    console.log("➺");
  });

  const ujKosar = new Kosar();
  adatBeolvasas("../termekek.json", termekek, kiir); 
  var i = 0;
  function kiir() {
    termekek.forEach((elem, index) => {
      //sablon.append('<div class="termek"><h3>'+elem.nev+'</h3><img src="'+elem.kep+'" alt="'+elem.nev+'"><p>'+elem.leiras+'</p><span>'+elem.ar+' Ft</span><input type="button" id="gomb'+i+'" value="Kosárba">');
      //i++;
      const ujElem = sablon.clone().appendTo(szulo);
      const ujKartya = new TermekGaleria(ujElem, elem, index);
      console.log(index);
    });
    sablon.remove();
  }

  function adatBeolvasas(fajlNev, tomb, myCallback) {
    $.ajax({
      url: fajlNev,
      success: function (result) {
        result.termekek.forEach((elem) => {
          tomb.push(elem);
        });
        console.log(tomb);
        myCallback();
      },
    });
  }

  $(window).on("kosarbaRak", (event) => {
    ujKosar.setMegjelenit(event.detail);
  });
  
});
