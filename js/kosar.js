class Kosar {
  constructor() {
    this.kosarTomb=[];
   this.kosarElem=$(".termekek");
   if(localStorage.getItem('kosarTermekek')==null){

   }else{
    this.kosarTomb=JSON.parse(localStorage.getItem('kosarTermekek'));
    console.log(this.kosarTomb);
    this.kiir(this.kosarTomb);
   }   
  }

  setMegjelenit(elem) {
    this.kosarTomb.push(elem);
    this.kiir(this.kosarTomb);
    this.localStorageMent(this.kosarTomb);
  }

  kiir(tomb){
    $(".termekek").empty();
    console.log(tomb);
    var i=0;
    tomb.forEach(elem => {
        $(".termekek").append("<div class='kosarTermek' id='elem"+i+"'><p class='neve'>"+elem.nev+"</p><p class='ara'>"+elem.ar+"</p><button class='x' id='x"+i+"'>X</button></div>");
        i++;
    });

    for (let i = 0; i < 8; i++) {
        $('#x' + i).click(function() {
            console.log('helobello' + i);
            $("#elem"+i).empty();
            tomb.splice(i,1);
            localStorage.setItem('kosarTermekek', JSON.stringify(tomb));
        });
    }
  }

  localStorageMent(tomb){
    localStorage.setItem('kosarTermekek', JSON.stringify(tomb));
  }
}
