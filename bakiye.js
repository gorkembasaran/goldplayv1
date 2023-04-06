let goldDeposu = 50000000;
let depoMillion = goldDeposu/1000000;
var fiyat;
var bakiye;
var kalanBakiye;
let islemSonrasi = (hesapNumarasi) => {
    bakiye = JSON.parse(window.localStorage.getItem("kullanicilar"))[hesapNumarasi].bakiye;
    fiyat = ((document.querySelector(".million").value)*80);
    kalanBakiye = ((JSON.parse(window.localStorage.getItem("kullanicilar"))[hesapNumarasi].bakiye)-fiyat);
    JSON.parse(window.localStorage.getItem("kullanicilar"))[hesapNumarasi].splice(hesapNumarasi,1,{
        email : JSON.parse(window.localStorage.getItem("kullanicilar"))[hesapNumarasi].email,
        username : JSON.parse(window.localStorage.getItem("kullanicilar"))[hesapNumarasi].username,
        password : JSON.parse(window.localStorage.getItem("kullanicilar"))[hesapNumarasi].password,
        hesapkodu : JSON.parse(window.localStorage.getItem("kullanicilar"))[hesapNumarasi].hesapkodu,
        bakiye : kalanBakiye
    })
}

JSON.parse(window.localStorage.getItem("kullanicilar"))[0].bakiye
