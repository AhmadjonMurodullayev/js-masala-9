// 1.djsta'limldjaiorwgmNAJOTasoijmomisoijdsaoidjthemoisasdoonionbest
// "Najot ta'lim is the best" yozuvini hosil qiling
  

//    ishlolmadim ......



// 2.var searchMatrix = function(matrix, target) {};
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false
const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
let target = 3;
let resaut = false;
matrix.forEach((item) => {
  if (item.includes(target)) {
    resaut = true;
  }
});
// console.log(resaut);

// 3.Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

let matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let maps = []
for(let i = 0; i < matrix1.length;i++){
    let ap = []
    for(let g = 0; g < matrix1[i].length;g++){
    ap.push(matrix1[g][i])
    // console.log(ap);
    }
    maps.push(ap.reverse())
    // console.log(maps);
}
// console.log(maps);



// 4.sizda qandaydir string bor va shundagi
//  oxirgi so’zning length ni toping
let str = "Men dunyoni nima qildim";
let str2 = str.split(" ")
let str3 = str2.length -1
// console.log(str2[str3].length);

// 5.Objectning kalit va qiymatlarining string
// ko'rinishidagi yig'indisidan iborat array
//  qaytaring. (Object.entries, map, join)
// Input: {a: 2, b: 5, c: 7}
// Output: ['a2', 'b5', 'c7']
let obj = { a: 2, b: 5, c: 7 };
let arr = [];
for (let key in obj) {
  arr.push(`${key}${obj[key]}`);
}
// console.log(arr);

// 6.var findMedianSortedArrays = function(nums1, nums2) {};
// nums1 = [1,2], nums2 = [3,4]
// result: 2.5
// arraylar qushilib va sort lanib urtasidagi son topilsin
let nums1 = [1, 2];
let nums2 = [3, 4];
let arr1 = [...nums1, ...nums2];
const numberArixmetik = (arr1) =>
  arr1.reduce((acc, item) => acc + item, 0) / arr1.length;
// console.log(numberArixmetik(arr1));

// 7.Ixtiyoriy array yarating va unda 1 martadan ko’p
// ishtirok etgan item larni boshqa array ga
//  ko’chiradigan function yarating
let arr2 = [1, 2, 3, 4, 5, 5, 7, 8, 8, 9];

function arrFunction(arr) {
  let son = [];
  let num = [];
  for (let i = 0; i < arr.length; i++) {
    if (!son.includes(arr[i])) {
      son.push(arr[i]);
    } else {
      num.push(arr[i]);
    }
  }
  console.log(son);
  console.log(num);
}
//  arrFunction(arr2)

// 8.Id si 4 bo'lgan productni o'chiruvchi dastur yozing. (filter)
// let products = [
// {id: 6,name: "Smarthpone", price: 12000, rating: 4.5, discount: 20},
// {id: 2,name: "Acer", price: 12000, rating: 4.3, discount: 10},
// {id: 1,name: "Mac book", price: 17000, rating: 4.7, discount: 40},
// {id: 4,name: "HP", price: 21000, rating: 4.1, discount: 16},
// ];

let products = [
  { id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20 },
  { id: 2, name: "Acer", price: 12000, rating: 4.3, discount: 10 },
  { id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40 },
  { id: 4, name: "HP", price: 21000, rating: 4.1, discount: 16 },
];
let delit = products.filter((item) => item.id !== 4);
// console.log(delit);

// 9.Arraydagi eng yosh va eng qarilarni topib, ularni
//  yoshlarini farqini toping. (sort).
// Input: [
// {name: 'John', age: 13},
// {name: 'Mark', age: 56},
// {name: 'Rachel', age: 45},
// {name: 'Nate', age: 67},
// {name: 'Jeniffer', age: 65}
// ];
// Output: 54
let num = [
  { name: "John", age: 13 },
  { name: "Mark", age: 56 },
  { name: "Rachel", age: 45 },
  { name: "Nate", age: 67 },
  { name: "Jeniffer", age: 65 },
];

let delit1 = num.sort((a, b) => a.age - b.age);
let nums = num.length - 1;
// console.log(delit1[nums].age - delit1[0].age);



                    // qo'shimcha
// 1.filter() masalasi: Berilgan massivdan faqat
//  tub sonlarni ajratib olib, yangi massiv chiqaring
let number = [1,2,3,4,5]
let number1 = number.filter(item => item % 2)
// console.log(number1);


// 2.map() masalasi: Berilgan ismlar massivining
//  har bir elementini bosh harflari katta bo'lgan yangi 
//  ismlar massivini hosil qiling.
let strss = "Man O'sha Balo"
let names = strss.split(" ")
let str22 = names.map((index)=> index[0]).join("")
// console.log(str22);

// 3. map() va filter() funksiyalarini birlashib 
// ishlatib, berilgan sonlardan faqat toq va 10 dan 
// kichik bo'lganlarini ikki martagacha ko'paytirib olish.
const numbers = [5, 12, 3, 8, 9, 10, 15];
const filteredNumbers = numbers.filter(num => num % 2 !== 0 && num <= 10);
const doubledNumbers = filteredNumbers.map(num => num * 2);
console.log(filteredNumbers);
console.log(doubledNumbers);