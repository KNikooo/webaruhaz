$(function () {
  const termekek = [];

  const ajaxHivas = new AjaxHivas();
  let eleresiut = "http://localhost:3000/termekek";

    let rendezes = eleresiut + "?_sort=nev&_order=asc";
    
    let kisebbnagyobb1 = eleresiut + `?ar_gte=0&ar_lte=3000`;
    let kisebbnagyobb2 = eleresiut + `?ar_gte=3000&ar_lte=6000`;
    let kisebbnagyobb3 = eleresiut + `?ar_gte=6000&ar_lte=300000`;


    let leptetes = eleresiut + `?_page=2&_limit=2`;
    let rekord3 = eleresiut + `?id=3`;
    let nevSzerintForditva = eleresiut + `?_sort=nev&_order=desc`;
    let regenyek = eleresiut + `?kategoria=regény`;

  let szoK = "?q=";
  ajaxHivas.getAjax(eleresiut, kiir);

  $("#rendezes").on("change", () => {
    console.log("rendez");
    switch ($("#rendezes").val()) {
      case "rendez":
        ajaxHivas.getAjax(rendezes, kiir);
        break;
      case "ar1":
        ajaxHivas.getAjax(kisebbnagyobb1, kiir);
        break;
      case "ar2":
        ajaxHivas.getAjax(kisebbnagyobb2, kiir);
        break;
      case "ar3":
        ajaxHivas.getAjax(kisebbnagyobb3, kiir);
        break;

      default:
        break;
    } 
  });

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
