//forEach, map, filter, reduce

//forEach

// function forEach(predicate, thisArg){
//     for(let  i=0; i<a.length; i++){
//         predicate(a[i],i);   
//     }
// }


// a=[10,11,12,13,14,15];
// a.forEach(function(v,i){
//     console.log(v,i,this);
// }, [1,2]);

//map

// function map(predicate, thisArg){
//     let list=[];
//     for(let i=0; i<a.length; i++){
//         list.push(predicate(a[i], i));
//     }
//     return list;
// }

// a=[10,11,12,13,14,15];
// let answer=a.map(function(v){
//     if(v%2===0){
//         return v;
//     } 
// });
// console.log(answer);

//filter

// function filter(predicate, thisArg){
//     let list=[];
//     for(let i=0;i<a.length;i++){
//         if(predicate(a[i],i)) list.push(a[i]);
//     }
//     return list;
// }


// a=[10,11,12,13,14,15];
// answer=a.filter(function(v){
//     return v%2===0;
// });
// console.log(answer);

//reduce


// function reduce(predicate,val){
//     let result=[];
//     for(let i=0;i<a.length; i++){
//         result = predicate(result, a[i]);

//     }
//     return result;
// }


a=[1,2,3,4,5];
answer=a.reduce(function(acc,v){
    return acc+v;
}, 0);
console.log(answer);