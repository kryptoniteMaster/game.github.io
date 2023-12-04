let start = confirm("Apakah anda ingin bermain game ?");

if(start == true){
    do{
        let main = prompt("Pilih antara : gajah, manusia, semut");

        if(main == "gajah" || main == "manusia" || main == "semut"){
            let comp = Math.random();

            if(comp < 0.33){
                comp = "gajah";
            }else if(comp < 0.55){
                comp = "manusia";
            }else{
                comp = "semut";
            }

            if(main == "gajah" && comp == "semut"){
                alert("Kamu  : " + main + "\nLawan  : " + comp + "\nkamu kalah!");
            }else if(main == "gajah" && comp == "manusia"){
                alert("Kamu  : " + main + "\nLawan  : " + comp + "\nkamu menang!");
            }else if(main == "manusia" && comp == "gajah"){
                alert("Kamu memilih : " + main + "\nLawan  : " + comp + "\nkamu kalah!");
            }else if(main == "manusia" && comp == "semut"){
                alert("Kamu  : " + main + "\nLawan  : " + comp + "\nkamu menang!");
            }else if(main == "semut" && comp == "manusia"){
                alert("Kamu  : " + main + "\nLawan  : " + comp + "\nkamu kalah!");
            }else if(main == "semut" && comp == "gajah"){
                alert("Kamu  : " + main + "\nLawan  : " + comp + "\nkamu menang!");
            }else{
                alert("Kamu  : " + main + "\nLawan  : " + comp + "\nseri!");
            }
            var repeat = confirm("Mau main lagi?");
            if(repeat == false){
                alert("Sayonara ;(");
            }
        }else{
            alert("re-load :)");
        }
    }while(repeat == true);
}
else{
 alert("Sayonara ;(");
}

