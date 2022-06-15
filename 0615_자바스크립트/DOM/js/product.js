		var isOpen = false;
		var bigPic = document.querySelector("#cup");  
		var smallPics = document.querySelectorAll(".small");  

		for(i=0; i<smallPics.length; i++) {
			smallPics[i].addEventListener("click", function() {
				newPic = this.src;
				bigPic.setAttribute("src", newPic);
			});
		}

		var view = document.querySelector("#view");
		view.addEventListener("click", function(){
			if (isOpen == false){  //상세정보가 안 보임 -> 보이게 처리
				document.querySelector("#detail").style.display = "block";
				view.innerHTML = "상세 설명 닫기";
				isOpen = true;
			}
			else{	//상세정보가 보임 -> 안 보이게 처리 
				document.querySelector("#detail").style.display = "none";
				view.innerHTML = "상세 설명 보기";
				isOpen = false;
			}
		});