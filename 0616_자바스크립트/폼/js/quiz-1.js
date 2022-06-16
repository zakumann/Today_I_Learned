var price =24000;

var sideMenu = document.querySelectorAll(".checkbx");
var totla = document.querySelector("#total");
totla.value = price + "원";

for(var i=0; i < sideMenu.length; i++){
    sideMenu[i].onclick = function(){
        if(this.checked == true){
            price += parseInt(this.value);
        }else{
            price -= parseInt(this.value);
        }
        totla.value = price + "원";
    }
}