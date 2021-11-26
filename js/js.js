$(function () {
  const termekek = [];

  const ajaxHivas = new AjaxHivas();
  let eleresiut = "http://localhost:3000/termekek";
  let szoK = "?q=";
  ajaxHivas.getAjax(eleresiut, kiir);

  $("#szo").on("keyup",function(){
    let szo=($("#szo").val());
    ajaxHivas.getAjax(eleresiut+szoK+szo, kiir);
  });
  /* $("#ok").on("click", () => {
    console.log("➺");
  }); */

  const ujKosar = new Kosar();
  function kiir(termekek) {
    const szulo = $(".t");
    const sablon = $(".sablon .termek");
    szulo.empty();
    sablon.show();
    termekek.forEach((elem) => {
      const ujElem = sablon.clone().appendTo(szulo);
      const ujKartya = new TermekGaleria(ujElem, elem);
    });
    sablon.hide();
  }

  $(window).on("kosarbaRak", (event) => {
    ujKosar.setMegjelenit(event.detail);
  });
});
