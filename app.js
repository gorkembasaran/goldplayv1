let hesapAktif = false;
if(localStorage.getItem("hesapAktif")){
    document.querySelector(".card-signed").classList.add("positive");
}
let hesapNumarasi;
let secenekler = []
document.querySelector(".girisbtn").addEventListener("click", function() {
    for(let i=0; i<kullanicilar.length; i++) {
        if((document.querySelector("#email").value == JSON.parse(window.localStorage.getItem("kullanicilar"))[i].email && document.querySelector("#pass").value == JSON.parse(window.localStorage.getItem("kullanicilar"))[i].password ) ){
            let hesapNumarasi = i;
            hesapAktif = true;
            localStorage.setItem("hesapAktif", true);
            document.querySelector(".card-sign").classList.add("negative");
            document.querySelector(".skec").classList.add("negative");
            let kapasitesi = (Math.floor(JSON.parse(window.localStorage.getItem("kullanicilar"))[hesapNumarasi].bakiye/80))
            let tag = `Hoş geldiniz ${JSON.parse(window.localStorage.getItem("kullanicilar"))[hesapNumarasi].username}`;
            let tag2 = `Bakiye : ${JSON.parse(window.localStorage.getItem("kullanicilar"))[hesapNumarasi].bakiye}₺`;
            let tag3 = `Alınabilecek Max. Gold Miktarı : ${depoMillion} M`;
            let tag4 = `Sizin Alabileceğiniz Max. Gold Miktarı : ${kapasitesi} M`;
            let tag5 = `Sizin Alabileceğiniz Max. Gold Miktarı : ${depoMillion} M`;
            document.querySelector(".goldalbtn").addEventListener("click", function(){
                document.querySelector(".card-goldal").classList.add("positive");
                document.querySelector(".istekbtn").addEventListener("click", function(){
                    let basilacakYazi = `Ücret : ${fiyat} , İşlem sonucu kalacak bakiyeniz : ${kalanBakiye}`;
                    document.querySelector(".bordericin").classList.add("positive");
                    document.querySelector(".fiyat").innerHTML = basilacakYazi;
                    document.querySelector(".istekbtn").classList.add("negative");
                    document.querySelector(".onaybtn").classList.add("positive");
                });
                document.querySelector(".onaybtn").addEventListener("click", function(){
                    islemSonrasi(i)
                    tag2 = `Bakiye : ${JSON.parse(window.localStorage.getItem("kullanicilar"))[i].bakiye}₺`;
                    document.querySelector(".gosterla").innerHTML = tag2;
                    document.querySelector(".onaybtn").classList.remove("positive");
                    function gizle(){
                        document.querySelector(".card-goldal").classList.remove("positive");
                        document.querySelector(".bordericin").classList.remove("positive");
                        document.querySelector(".istekbtn").classList.remove("negative");
                        document.querySelector(".down_line").classList.add("negative");
                        document.querySelector(".million").value = 0;
                        clearTimeout(gizle);
                    }
                    startTimerLine();
                    setTimeout(gizle,10000);
                });
            });
            document.querySelector(".gosterla").innerHTML = tag2;
            document.querySelector(".goldsiniri").innerHTML = tag3;
            if(kapasitesi*1000000 < goldDeposu){
                document.querySelector(".kapasite").innerHTML = tag4;
                for(j=1;j<=kapasitesi; j++){
                    let yazdir = `<option class="secenekler" value="${j}">${j}m</option>`;
                    secenekler.push(yazdir);
                }
                document.querySelector(".million").innerHTML = secenekler;
            }else{
                document.querySelector(".kapasite").innerHTML = tag5;
                for(j=1;j<=depoMillion; j++){
                    let yazdir = `<option class="secenekler" value="${j}">${j}m</option>`;
                    secenekler.push(yazdir);
                }
                document.querySelector(".million").innerHTML = secenekler;
            }
            document.querySelector(".hosgeldin").innerHTML = tag;
            document.querySelector(".hosgeldin").classList.add("positive");
            document.querySelector(".card-signed").classList.add("positive");
            function gosterBunu(){
                document.querySelector(".hosgeldin").classList.remove("positive");
            };
            setInterval(gosterBunu,10000);
            document.querySelector(".bakiyegoster").classList.add("positive");
        }else if(document.querySelector("#email").value == "" && document.querySelector("#pass").value == ""){
            document.querySelector(".uyari3").classList.add("positive");
        }else{
            document.querySelector(".uyari").classList.add("positive");
            document.querySelector(".uyari2").classList.add("positive");
            document.querySelector(".uyari3").classList.remove("positive");
        }
    }
});
if(hesapAktif = true){
    
}
function startTimerLine() {
    let down_line = 0;

    let counterLine = setInterval(timer,50);

    function timer(){
        down_line += 0.50;
        document.querySelector(".down_line").style.width = down_line + "%";
        if(down_line > 100) {
            clearInterval(counterLine);
        }
    }
    
}