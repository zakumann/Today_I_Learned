		var numbers = [2, 4, 6, 8, 10];

		var sum = 0;  //합계를 저장할 변수 선언 
		for (var i=0; i < numbers.length; i++){
			sum = sum + numbers[i];  // sum += numbers[i]
		}
		numbers.push(sum);

		showArray(numbers);

		function showArray(arr) {
			var str = "<table><tr>";
			for (var i=0; i<arr.length; i++) {
				str += "<td>" + arr[i] + "</td>";
			}
			str += "</tr></table>";
			document.write(str);
		}