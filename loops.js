function reverseWord (str){
    let rvstr= str.split("").reverse().join("");
    return rvstr;

}

const result = reverseWord("feela");
console.log(result);

// function lrgNum(arr){
//     let lg = arr[0];

//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] > lg){
//             lg = arr[i]
//         }
//     }
//     return lg
// }

function lrgNum(arr){
    let currentLarge = arr[0];

    for(let i = 0; i<arr.length; i++){
        if(arr[i] > currentLarge){
            currentLarge = arr[i];
        }
    }
    return currentLarge;
}
const res = lrgNum([1,2000,33,4,555])
console.log(res)

let ar = [1,2,3,4,5]

let resArr = ar.push(26,[4]);

console.log(resArr)

const obj = {
    name:"sgr"
}

obj.age = 24;

console.log(obj);

delete obj.age;

console.log(obj);

function sumArr(arr){
    let sum = 0 ;
    for(let i = 0; i<arr.length;i++){
        sum += arr[i]
    }
    return sum;
}

const sum = sumArr([1,0,0,9]);
console.log("sum of the array is " + sum)

console.log();

let fullName = {
    first:"sagar"
}

console.log(fullName);

fullName.lastName = "biradar";

console.log(fullName)

delete fullName.lastName;

console.log(fullName)

function isEven(num){
    return num % 2 === 0 ;
}

console.log(isEven(10))

function findMin(arr){
    let currentMin = arr[0];

    for(let i =0; i<arr.length; i++){
        if(currentMin > arr[i]){
            currentMin = arr[i]
        }
    }
    return currentMin
}

console.log(findMin([1,0]));

let sentance = "Greek for geeks";
let wordsArry = sentance.split(" ");
console.log(wordsArry)

function removeDuplicate(arr){
    const uniqueArry = [];

    for(let i = 0; i<arr.length;i++){
        if(!uniqueArry.includes(arr[i])){
            uniqueArry.push(arr[i])
        }
    }
    return uniqueArry;
}

console.log(removeDuplicate([2,2,4,5,6,6,4,5]));


function removeExtraSpace(txt){
    let t = txt.replace(/\s+/g," ");
    return t;
};

const r = removeExtraSpace("hello    jee  sagar");
console.log(r);

function demoPromise(data){
    return new Promise ((resolve,reject) => {
        if(data){
            resolve("data is loaded!");
        }else{
            reject("data is not loaded!")
        }
    })
} 

console.log(demoPromise(false));
