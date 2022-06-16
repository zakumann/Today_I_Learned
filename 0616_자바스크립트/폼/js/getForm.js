// 학과 선택시 알림창 띄워 알려주기
var selectMenu = document.testForm.major;   //셀렉트 메뉴 가져오기
function displaySelect(){
    var selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;
    alert("<" + selectedText + ">를 선택했습니다.");
}