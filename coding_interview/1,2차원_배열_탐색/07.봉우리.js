function solution(arr){
    let answer =0;
    let n=arr.length;//n은 arr배열의 길이로 정의한다.
    let dx=[-1,0,1,0];//dx는 좌우를 맡는다.
    let dy=[0,1,0,-1];//dy는 상하를 맡는다.
    for(let i=0;i<n;i++){//i를 n값 만큼 반복해서 i씩 증가시킨다.
        for(let j=0;j<n;j++){//j를 n만큼 반복해서 j씩 증가시킨다.
            let flag=1;
            for(let k=0; k<4;k++){
                let nx=i+dx[k];
                let ny=j+dy[k];
                if(nx>=0 && nx<n && ny>=0 && ny<n && arr[nx][ny]>=arr[i][j]){
                    flag=0;
                    break;
                }
            }
            if(flag){
                answer++; //만약에 flag가 성립된다면, answer를 추가시킨다.
            }
        }
    }

    return answer;
}
let arr = [[5,3,7,2,3],
           [3,7,1,6,1],
           [7,2,5,3,4],
           [4,3,6,4,1],
           [8,7,3,5,2]];
console.log(solution(arr));