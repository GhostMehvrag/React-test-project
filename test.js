// const user = {
//     name: 'John',
//     email: 'a@mail.ru',
//     password: 'qwerty1234'
// }
// user['password'] = 'qwerty4321'
// user.isAdmin = true
// delete user.email
// let a = 29
// let b = a
// a = 59
// console.log(a)
// console.log(b)
// const user2 = {...user}
// user['name'] = 'Ivan'
// console.log(user)
// console.log(user2)

// const list = [1, 2, -5, 3, -10]
// const newarr = list.map(
//     (item) => 
// )



//1 function multiply(a, b){
//     return a * b
// }

// console.log(multiply(2, 5))



//2 function evenOrOdd(a){
//     return a % 2
// }

// console.log(evenOrOdd(5))


//3 function boolean(bool){
//     if (bool){
//         return 'yes'
//     } else {
//         return 'no'
//     }
// }

// console.log(evenOrOdd(true))




//4 function reversed(string){
//     return string.split('').reverse().join('')
// }

// console.log(reversed('Hello'))



//5 function remove(str){
//     return str.slice(1, -1)
// }

// console.log(remove('Hello'))



//6 function sum(numbers){
//     let sum = 0;
//     for (let char of numbers){
//         if (char >= 0) sum += char
//     }
//     return sum
// }

// console.log(sum([1, 5, 2, 7]))


// ---------------------------Д/З------------------------

//7 function opposite(number) {
//   return -number;
// }

// console.log(opposite(5)); 


//8 function negative(num) {
//   if (num < 0){
//     return num
//   } else {
//     return -num
//   }
// }

// console.log(negative(-11));


//9 function string(name, father){
//     return (name + '.' + father).toUpperCase()
// }

// console.log(string('David', 'Alexandrovich'));


//10 function stringN(string, n){
//     return string.repeat(n)
// }

// console.log(stringN('Hello', 5));

// Начальный уровень------------------------------
//1 function square(num){
//     if (Math.sqrt(num) % 1 === 0){
//         return true
//     } else {
//         return false
//     }
// }

// console.log(square(4));


//2 function vowelCount(str) {
//     let a = new Set('aeiouAEIOU')
//     let count = 0
//     for (let char of str){
//         if (a.has(char)) count++
//     }
//     return count
// }

// console.log(vowelCount('aeiou'));



//3 function mumbling(str){
//     return str.split('').map((char, index) => 
//         char.toUpperCase() +
//         char.toLowerCase().repeat(index)).join('-')
// }

// console.log(mumbling('abcd'));



//4 function descendingOrder(num){
//     return num.split('').sort((a, b) => a - b).reverse().join('')
// }

// console.log(descendingOrder('42145'));


//5 function shortestWord(str){
//     return str.split(' ').map((char) => char.length).sort((a, b) => a - b)[0]
// }

// console.log(shortestWord('Утки прыгают по лужам'));


//6 function twoLowest(arr){
//     const first = arr.sort((a, b) => a - b).filter((item) => item > 0)[0]
//     const second = arr.sort((a, b) => a - b).filter((item) => item > 0)[1]
//     return first + second
// }

// console.log(twoLowest([1, 2, -5, -3, 17, 3]));


//7 function isograms(str){
//     const charArr = str.toLowerCase().split('')
//     for (let char of charArr){
//         if (charArr[char]){
//             return false
//         }
//         charArr[char] = true
//     }
//     return true
// }

// console.log(isograms('Helo'));


//8 function exesAndOhs(str, x, o){
//     let count1 = str.toLowerCase().split('').filter((char) => x === char).length
//     let count2 = str.toLowerCase().split('').filter((char) => o === char).length
//     return count1 === count2
// }

// console.log(exesAndOhs('Hello', 'l', 'о'));


// 9 function disemvowelTrolls(str){
//     const a = new Set('aeiouAEIOU')
//     let result = ''
//     for (const char of str){
//         if (!a.has(char)){
//             result += char
//         }
//     }
//     return result
// }

// console.log(disemvowelTrolls('Hello'));



//10 function middleCharacter(str){
//     let a = str.length
//     if (a % 2 === 0){
//         return str[a/2-1] + str[a/2]
//     } else {
//         return str[Math.floor(a/2)]
//     }
// }

// console.log(middleCharacter('Helxoo'));

// Средний уровень сложности------------------------------

//1 function whoLikesIt(names){
//     let count = names.length

//     if (count === 0) {
//         return "no one likes this"
//     } else if (count === 1) {
//         return `${names[0]} likes this`;
//     } else if (count === 2) {
//         return `${names[0]} and ${names[1]} like this`;
//     } else {
//         return `${names[0]}, ${names[1]} and ${count - 2} likes this`;
//     }
    
// }

// console.log(whoLikesIt(['Alex', 'Jacob', 'Anna', 'John']));


// function countingDuplicates(str){
    
// }

// console.log(countingDuplicates('Hello'));


//3 function findTheOddInt(arr){

// }

// console.log(findTheOddInt([1, 1, 3, 3, 3]));


//4 function duplicateEncoder(){

// }

// console.log(duplicateEncoder('Helxoo'));


//5 function takeATenMinuteWalk(){

// }

// console.log(takeATenMinuteWalk(['n', 's', 'e', 'w']));


//6 function persistentBugger(){

// }

// console.log(persistentBugger('Helxoo'));


//7 function yourOrderPlease(str){
    
// }

// console.log(yourOrderPlease('is2 Thi1s T4est 3a'));


//8 function stopGninnipSMySdroW(){

// }

// console.log(stopGninnipSMySdroW('Helxoo'));


//9 function buildTower(){

// }

// console.log(buildTower('Helxoo'));


//10 function arrayDiff(){

// }

// console.log(arrayDiff('Helxoo'));








//1 function reverseWords(str){
//     return str.split(' ').reverse().join(' ')
// }

// console.log(reverseWords("Hello world!"));

//2 function unique(arr){
//     const newarr = new Set(arr)
//     return newarr
// }

// console.log(unique([1, 2, 2, 3, 4, 4]));


//3 function countVowels(str){
//     let a = new Set('aeiouAEIOU')
//     let count = 0
//     for (let char of str){
//         if (a.has(char)){
//             count++
//         }
//     }
//     return count
// }

// console.log(countVowels("Hello World"));


//4 function invertCase(str){
//     return str.split('').map((char) => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('')
// }

// console.log(invertCase("AbC"));


//5 function cleanArray(arr){
//     return arr.filter((word) => word)
// }

// console.log(cleanArray([0, "hello", false, 42, "", null]));


//6 function longest(arr){
//     return arr.sort((a, b) => a.length - b.length).reverse()[0]
// }

// console.log(longest(["cat", "giraffe", "dog"]));


//7 function capitalize(str){
//     return str.split('').map((char, index) => {
//         if (index === 0) {
//             return char.toUpperCase()
//         } else {
//             return char.toLowerCase()
//         }
//     }).join('')

// }

// console.log(capitalize("hELLO"));


//8 function isPalindrome(str){
//     let symbols = [",", ":", "!", "?", ".", " "]
//     return str.toLowerCase().split('').filter((char) => !symbols.includes(char)).join('') === str.toLowerCase().split('').reverse().filter((char) => !symbols.includes(char)).join('')
// }

// console.log(isPalindrome("A man, a plan, a canal: Panama"));




//=============================================================================

//9 function sortByLength(arr) {
//   return arr.sort((a, b) => a.length - b.length);
// }


// console.log(sortByLength(["banana", "kiwi", "apple"]));


//10 function sum(arr) {
//   let total = 0;
//   for (const num of arr) {
//     total += num;
//   }
//   return total;
// }

// console.log(sum([1, 2, 3, 4]));











//12 function removeDuplicates(str) {
//   return str.split('').filter((char, index, arr) => arr.indexOf(char) === index).join('');
// }

// console.log(removeDuplicates("aabbcc"));


//13 function joinArray(arr) {
//   return arr.join('');
// }

// console.log(joinArray(['a', 'b', 'c']));


//14 function wordCount(str){
//     return str.split(' ').length
// }

// console.log(wordCount("This is a test"));


//15 function secondLongest(arr){
//     return arr.split(' ').sort((a, b) => a.length - b.length)[1]
// }

// console.log(secondLongest("one three four five"));


//16 function reverseString(str){
//     return str.split('').reverse().join('')
// }

// console.log(reverseString("hello"));


// function removeValue(arr, nothing){
//     for (let char of arr){
//         if (nothing.has(char)){
//             return char
//         }
//     }
// }

// console.log(removeValue([1, 2, 3, 2], 2));


const props = {
    postData: []
}

const {postData, ...otherProps} = props

console.log({...user})