$(function () {
  const ajaxHivas = new AjaxHivas();
  let eleresiut = "http://localhost:3000/termekek";
  let toroltT = "http://localhost:3000/torolT";
  /* adatBeolvasas('../termekek.json', termekek, kiir); */

  ajaxHivas.getAjax(eleresiut, kiir);
  ajaxHivas.getAjax(toroltT, tKiir);

  function kiir(termekek) {
    const szulo = $("#tablazat1");
    const sablon = $(".termek");

    termekek.forEach((elem) => {
      const ujElem = sablon.clone().appendTo(szulo);
      new TermekAdmin(ujElem, elem);
    });
    sablon.remove();
    $(".modosit").hide();
  }

  function tKiir(toroltTermekek) {
    $("#tolroltElemek").empty();
    $("#tolroltElemek").append("<h3>Törölt elemek:</h3>");
    $("#tolroltElemek").append("<table>");
    toroltTermekek.forEach((elem) => {
      $("#tolroltElemek table").append(
        '<tr><td class="nev">' +
          elem.nev +
          '</td><td class="leiras">' +
          elem.leiras +
          '</td><td class="ar">' +
          elem.ar +
          '</td><td class="hGomb"><button>Helyreállít</button></td></tr>'
      );
    });
    $(".hGomb").on("click", () => {
      console.log("helyreallit meg minden");
      console.log();
      //ajaxHivas.postAjax(eleresiut, elem);
      //ajaxHivas.deleteAjax(toroltT, elem.id);
    });
  }

  $(window).on("termekTorol", (event) => {
    console.log(":D");
    console.log(event.detail);
    //toroltTermekek.push(event.detail);
    ajaxHivas.postAjax(toroltT, event.detail);
    ajaxHivas.deleteAjax(eleresiut, event.detail.id);
    //console.log(eleresiut + `/` + event.detail.id);
    //console.log(toroltTermekek);
  });

  $(window).on("termekModosit", (event) => {
        $('#termeknev').attr('value', event.detail.nev);
				$('#kep').attr('value', "");
				$('#leiras').attr('value', event.detail.leiras);
				$('#ar').attr('value', event.detail.ar);
  });

  $("#ok").on("click", ()=>{
    $(".modosit").hide();
    /* let adat=[
      "nev"= $('#termeknev').val(),
      "kep"=$('#kep').val(),
      "leiras"=$('#leiras').val(),
      "ar"=$('#ar').val()
    ]; */
    
  });
});
