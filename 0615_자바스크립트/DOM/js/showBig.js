var bigPic = document.querySelector("#cup");
var smallPics = document.querySelectorAll(".small"); //작은 이미지를 노드리스트로 가져옴 

for (var i= 0; i< smallPics.length; i++){
    smallPics[i].addEventListener("click", changePic);
}

function changePic(){
    var newPic = this.src; //click이벤트가 발생한 대상의  src 속성
    bigPic.setAttribute("src", newPic);
}