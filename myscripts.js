// // // Q1. Takes two numbers:- sizeOfArray and numberOfZeroes.
// // Using loop to create array of size given with each array having number of zeroes provided.
// // Example:- sizeOfArray is 3 and numberOfZeroes is 4
// // Return Value is:-   [[0,0,0,0],[0,0,0,0],[0,0,0,0]]  


function createPattern(){
	let parentArray = [];
  for(let i = 0; i < 3; i++ ){
  	let childArray = [];
      for(let j = 0; j < 4; j++){
				
        childArray.push(0);
      }
    parentArray.push(childArray);
  }
	return parentArray
}
document.write(createPattern());

// // // // output:Array(3)
// // // // 0: (3) [0, 0, 0, 0]

// // // // 1: (3) [0, 0, 0, 0]

// // // // 2: (3) [0, 0, 0, 0]

// // // Q2.  Takes an array of numbers and returns the sum of all the numbers in the array.

// const numbers = [12,13,14,18];
// function sumArrayOfNumbers(numbersArray) {
//     let total = 0; 
//     for (let i = 0; i < numbersArray.length; i++) {
//       total += numbersArray[i]; 
//     }
//     return total; 
//   }

//   console.log(sumArrayOfNumbers(numbers)); 
//   // Output: 57

// // // Q3. Takes an array of numbers and find the second largest number in it and returns that number.

//   const arr=[10,20,30,40,80];
//   function secondLargestNum(arr){
//     let largestNumber=arr[0];
//     let secondLargestNumber=arr[0];
//     for(let i =0;i <arr.length;i++){
//       if(arr[i]>largestNumber){
//         secondLargestNumber=largestNumber;
//         largestNumber=arr[i];
//        } else if (arr[i]>secondLargestNumber){
//          secondLargestNumber=arr[i];
//       }
//     }

//     return secondLargestNumber

//   }

//    console.log(secondLargestNum(arr));

// // //    output:40


// // // Q4. Write a function that takes an array of names eg - 
// // // ['Harry', 'Manny', 'bobby', 'Jacob','Harris','laura'] 
// // // and returns the array with the names, the length of which is more than 5. eg - ['Harris']

// function filterNamesByLength(names) {
//   const arr = [];
//   for (let i = 0; i < names.length; i++) {
//     if (names[i].length > 5) {
//       arr.push(names[i]);
//     }
//   }
//   return arr;
// }
// const names = ['sally', 'hailey', 'selena', 'kendal', 'Kelly', 'kyile'];
// const filteredNames = filterNamesByLength(names);
// console.log(filteredNames);
// // output:
// // 0: "hailey"
// // 1: "selena"
// // 2: "kendal"


// // // Q5  write a function that creates an array of all even number from 1 - 100

// function createEvenNumArr() {
//   const evenArray = [];
//   for (let i = 2; i <= 100; i += 2) {
//     evenArray.push(i);
//   }
//   return evenArray;
// }
// const evenArray = createEvenNumArr();
// console.log(evenArray); 
 
// // // Output: [2, 4, 6,7,8,10,12,14,16,18,20........ 98, 100]

// // // Q6. write a function that creates an array. eg - [[2,4,6,8],[1,3,5,7,9]]

// function createPattern(){
//   const parentArray=[];
//   for(let i = 0; i<1;i++){
//   let childArrayEven=[];
//   let childArrayOdd=[];
//   for(let j =1;j<9;j++){
//   if(j%2==0){
//     childArrayEven.push(j);
//   }
// }
// for(let k =0;k<10;k++){
//   if(k%2!=0){
//     childArrayOdd.push(k);
//   }
// }
// parentArray.push(childArrayEven,childArrayOdd)
//   }
//   return parentArray;
// }
// console.log (createPattern());


// // output: [2, 4, 6, 8, 10]
// // 
// //  [1, 3, 5, 7, 9]

// // // Q7. write a function that creates an array of all the even numbers from 1 - 10. eg - [[2,4,6,8]]

// function createArray() {
//  const parentArray=[];
//  for(let i = 0; i<1;i++){
//  let childevenArray =[];
//   for (let j = 1; j <= 10; j++){
//   if(j%2==0){
//     childevenArray.push(j);
//   }
//   }
//   parentArray.push(childevenArray);
    
//  }
  
//   return parentArray;
// }

// // console.log(createArray()); 
// // // 0 (5) [2, 4, 6, 8, 10]


// // // Q8. write a function that creates an array from 1-5. eg - [[2,4],[3,9],[4,16],[5,25]], here on index 0 i.e.[2,4], 4 is the square of 2. 
// // // likewise 9 is the square of 3 on index 1 i.e. [3,9], and so on...
// function createArraySquares(){
//   let arr =[1,2,3,4,5,6,7,8,9];
//   let result=[];
//   for(i=1;i<arr.length;i++){
//     let square = arr[i] ** 2;
//     result.push([arr[i], square]);
//   }
//   return result;
// }
// console.log(createArraySquares()); 

// // // output: 

// // // [[1,1][2, 4] [3, 9] [4, 16] [5, 25] [6, 36] [7, 49][8, 64] [9, 81]]

// // // Q9: write a function that creates an array eg - [[0],[0,0],[0,0,0],[0,0,0,0],[0,0,0,0,0]]

// function createArr(n) {
//   const result = [];
//   for (let i = 0; i < n; i++) {
//     const arr = new Array(i + 1).fill(0);
//     result.push(arr);
//   }
//   return result;
// }
// myarray=createArr(5);
// console.log (myarray);


// // //  output: [[0] [0, 0] [0, 0, 0][0, 0, 0, 0] [0, 0, 0, 0, 0]]

// // Q10.Write a function to output the alphabets from the 3rd index of this array - 
// // [['a','b','c'],['d','e','f','g'],['h','i','j','k','l','m'],['o','p','q','r','s','t','u','v','w'],['x','y','z']]
// function filterArray(){
// let nestedArray= [['a','b','c'],['d','e','f','g'],['h','i','j','k','l','m'],['o','p','q','r','s','t','u','v','w'],['x','y','z']];

// return nestedArray[3];

// }

// console.log(filterArray());

// // output:
// //  "o" "p" "q" "r" "s" "t" "u" "v" "w" 

