var check = document.querySelector("#shippingInfo");    //체크 상자의 id
check.addEventListener("click", function(){     //체크가 클릭되었다면 실행
    if(check.checked == true){  //체크 표시가 나온다면
        document.querySelector("#shippingName").value = document.querySelector("#billingName").value;
        document.querySelector("#shippingTel").value = document.querySelector("#billingTel").value;
        document.querySelector("#shippingAddr").value = document.querySelector("#billingAddr").value;
    }else{
        document.querySelector("#shippingName").value = "";
        document.querySelector("#shippingTel").value = "";
        document.querySelector("#shippingAddr").value = "";
    }
});