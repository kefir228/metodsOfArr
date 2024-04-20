// 1.
// const getRandomArray = (length, min, max) => {
//     const newArr = new Array(length).fill(1)
//     const randomNum = newArr.map((el) => {
//         return Math.floor(Math.random() * (max - min) + min)
//     })
//     return randomNum
// }
// console.log(getRandomArray(5,1,10)); 

// 2.
// const getModa = (...numbers) => {
//     const moda = {}
//     for(let i of numbers){
//         if(moda[i]){
//             moda[i]++
//         }else{
//             moda[i] = 1
//         }
//     }
//     return moda
// }
// console.log(getModa(55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2,3,3,44,4,4,4,4,4,4,4,4));

// 3.
// const getAverage = (...numbers) => {
//     const wholeNum = numbers.filter((num) => Number.isInteger(num))
//     if(wholeNum.length === 0){
//         return 0
//     }
//     let sum = 0
//     wholeNum.forEach((num) => {
//         sum += num
//     })
//     return sum / wholeNum.length
// }
// console.log(getAverage(1.5,2,3,4,5));

// 4.
// const getMedian = (...numbers) => {
//     const wholeNum = numbers.filter((num) => Number.isInteger(num))
//     const sortedArr = wholeNum.sort((a, b) => a - b);
//     const length = sortedArr.length;
//     if (length % 2 === 0) {
//         const midIndex = length / 2;
//         return (sortedArr[midIndex - 1] + sortedArr[midIndex]) / 2;
//     } else {
//         const midIndex = Math.floor(length / 2);
//         return sortedArr[midIndex];
//     }
// }
// console.log(getMedian(1,2,3,4,5,6));

// 5.
// const filterEvenNumbers = (...numbers) => {
//     const evenNum = numbers.filter((num)=>{
//         if(num % 2 == 0){
//             return true
//         }
//     })
//     return evenNum
// }
// console.log(filterEvenNumbers(1,2,3,4,5));

// 6.
// const countPositiveNumbers = (...numbers) => {
//     let count = 0
//     numbers.filter((num)=>{
//         if(num >= 0){
//             count++
//         }
//     })
//     return count
// }
// console.log(countPositiveNumbers(-1,0,2,-4,3,6));

// 7.
// const  getDividedByFive = (...numbers) => {
//     const divByFive = numbers.filter((num) => {
//         if(num % 5 == 0){
//             return true
//         }
//     })
//     return divByFive
// }
// console.log(getDividedByFive(2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// 8.
// const  replaceBadWords = (string) => {
//     const badWordArr = ['shit', 'fuck', 'whore', 'slut', 'bitch', 'fool', 'bullshit', 'munter']
//     const regex = new RegExp(badWordArr.join('|'), 'gi');
//     return string.replace(regex, '****')
//     }
// console.log(replaceBadWords("Are you fUcking kidding?"));

// 9.
// const divideByThree = (word) => {
//     const toLvrCs = word.replace(/\s/g,'').toLowerCase()
//     const syllables = toLvrCs.match(/.{1,3}/g);
//     return syllables
// }
// console.log(divideByThree('GHHFD UHYVY TGGY'));



