function solution(m, product){
    let answer=0;
    n=product.length;
    product.sort((a,b)=> (a[0]+a[1])-(b[0]+b[1]));
    for(let i=0; i<n;i++){
        let money=m-(product[i][0]/2+product[i][1]);
        // console.log(money)
        let cnt=1;
        for(let j =0; j<n; j++){
            if(j!==i && (product[j][0]+product[j][1])>money) break;
            if(j!==i && (product[j][0]+product[j][1])<=money){
                money-=(product[j][0]+product[j][1]);
                cnt++;
            }
        }
        answer=Math.max(answer, cnt);
    }
    return answer;
}
let arr=[[6,6],[2,2],[4,3],[4,5],[10,3]];
console.log(solution(28, arr));

// 1. 모든 상품이 한번씩은 다 할인받았다는 가정으로 계산해봐야 한다 ( 이 생각을 해내는게 관건 )

// 2. answer는 최대 갯수이므로 0으로 세팅한다

// 3. ` let money=m-(product[i][0]/2+product[i][1]);` => 할인받은 금액을 전체금액에서 뺀 금액 = 남은금액

// 상품의 가격(product[i][0])과 상품의 배송료(product[i][1])는 [0]과 [1]에 들어있다

// 4. cnt 변수를 만들고 몇개를 살 수 있는지 카운트해준다

// 5. j!==i i는 구매하면 안됨 (이미 할인을 받았기 때문에). 그래서 index가 필요하기 떄문에 for도 index for가 필요함

// 6. (product[j][0]+product[j][1])<=money => 남은 금액보다 상품가격과 배송료의 합이 작아야 구매할 수 있다.

// 7. money-=(product[j][0]+product[j][1]); => 남은 예산에서 상품가격+배송료를 빼주고 cnt를 ++해준다

// 8. if(j!==i && (product[j][0]+product[j][1])>money) break; => 남은금액이 부족하면 break해준다 (상품갯수가 많으면 헛바퀴 도는것이기 떄문에 중간에 끊어주어야 함)

// 9. answer=Math.max(answer, cnt); 둘중에 더 큰 값으로 answer를 바꿔준다
//출처 : https://soraji.github.io/code/2021/04/19/JS33/