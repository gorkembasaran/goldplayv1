var data = JSON.parse(window.localStorage.getItem("kullanicilar"))

document.querySelector(".kayitbtn").addEventListener("click",function(){
    let mailInput = document.querySelector(".mailtxt")
    let usernameInput = document.querySelector(".usernametxt")
    let passwordInput = document.querySelector(".passwordtxt")
    let noInput = document.querySelector(".notxt")
    var anlam = 0;
    for(i=0; i<data.length; i++){
        if(mailInput.value === data[i].email || noInput.value === data[i].hesapkodu || usernameInput.value === data[i].username){
            anlam+=1
        }
    }
    console.log(anlam)
    if( mailInput.value== "" || noInput.value== "" || passwordInput.value== "" || usernameInput.value== ""){
        alert("Boş alan bırakmamalısınız.");
    }else if(anlam>0){
        let tag31 = "Girdiğiniz bilgilere ait bir hesap bulunuyor lütfen kontrol edip tekrar deneyiniz!"
        document.querySelector(".alert").innerHTML = tag31;
    }else if(mailInput.value.indexOf("@") === -1){
        let tag32 = "Lütfen gerçek bir mail adresi giriniz!"
        document.querySelector(".alert").innerHTML = tag32;
    }
    else{
        kullanicilar.push({"email":mailInput.value,"username": usernameInput.value , "password" : passwordInput.value , "hesapkodu": noInput.value, "bakiye": 0})
        window.localStorage.setItem("kullanicilar",JSON.stringify(kullanicilar))
        data = JSON.parse(window.localStorage.getItem("kullanicilar"))
    }
})