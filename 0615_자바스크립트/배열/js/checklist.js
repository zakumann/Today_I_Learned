var itemList = [];

var addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addList); //addBtn.onclick = addList

function addList(){
    // 텍스트 필드 내용을 가져오기 
    var item = document.querySelector("#item").value;
    if (item != null){
        itemList.push(item);  //itemList  끝에 item 내용 추가 
        document.querySelector("#item").value = "";
        document.querySelector("#item").focus();
    }
    showList();
}

function showList(){
    var list = "<ul>";
    for (var i =0; i < itemList.length ; i++){
        list += "<li>"+  itemList[i]  + "<span class='close' id=" + i + ">X</span></li>";
    }
    list += "</ul>";
    document.querySelector('#itemList').innerHTML = list;  //list 내용 표시 

    // 삭제버튼을 변수로 저장 
    var remove = document.querySelectorAll(".close");

    for (var i=0; i < remove.length; i++){
        remove[i].addEventListener("click", removeList); //요소를 클릭하면 removeList()실행
    }
}

function removeList(){
    var id = this.getAttribute("id"); //클릭한 삭제 버튼의 id값을 가져온다 .
    itemList.splice(id, 1);
    showList();
}