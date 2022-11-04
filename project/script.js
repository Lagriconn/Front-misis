function guess() {
    alert("Приветствую тебя бедолага");
    var guessnumber = "def";
    var numberofusers = prompt("Как ввести рекурсию в Pithon");
    console.log(numberofusers);
    if (numberofusers != guessnumber) {
        alert("из тебе не выйдет змея");
        return guess();
    } else if (numberofusers != guessnumber) {
        alert("из тебе не выйдет змея");
        return guess();
    } else {
        return alert("Вы угадали");
    }
}   
//guess();
function timer(){
   
}
//setTimeout(timer, 1000);
function validform(){
    var namefrominput = document.getElementById("name").value;
    console.log(namefrominput);
    var reg_name = /^[a-zа-яё]+$/i;
    if(reg_name.test(namefrominput)==false){
       console.log("Ошибка ФИО буквы без цифр")
       }
}
document.querySelector(".button").addEventListener("click", validform);


}