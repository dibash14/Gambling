// const win_condition = [
//     [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]
// ]
// let user_input = [3, 5, 7]
// for(let condition of win_condition){
//     if(condition.every(num => user_input.includes(num))){
//         console.log("The player is the winner")
//     }
// }


// let names = "dibash"
// let addition = names + 22
// console.log(addition)
// console.log(typeof (addition))

// const student = {
//     name: "dibash",
//     age: 24,
//     sex: "male",
//     developer: true,
// }
// student.location = "machapokhari"
// student.name = "Anshu"
// console.log(student)

// const dictionary = {
//     apple: "fruit",
//     carrot: "vegetable",
//     jameson: "whiskey",
//     dairymilk: "chocolate",
//     bike: "automobile"
// }
// // console.log(dictionary.apple)
// for (let keys in dictionary) {
//     console.log(dictionary[keys])
// }


// let age = 22
// if (age > 10 && age < 20) {
//     console.log("The age lies between ")
// } else {
//     console.log("The age doesnot lies between ")

// }
// console.log(age > 18 ? "you can drive" : "you cannot drive")

// const grade = "F"
// switch (grade) {
//     case "A":
//         console.log("excellent");
//         break;
//     case "B":
//         console.log("Good");
//         break;
//     case "C":
//         console.log("Average");
//         break;
//     case "D":
//         console.log("Poor");
//         break;
//     default:
//         console.log("Need Improvement")
// }


// let num = 17;
// if (num % 2 == 0 || num % 3 == 0) {
//     console.log("it is divisible by either 2 or 3")
// }

// let obj = {
//     harry: 90,
//     shubam: 45,
//     achal: 66,
//     anshu: 91
// }
// for (let students in obj) {
//     console.log(students, obj[students])
// }

// let correct_num = 10

// let re_call = () => {
//     let number = prompt("Enter a number");

//     if (number == correct_num) {
//         console.log("correct number")
//     }
//     else {
//         re_call()
//     }
// }
// re_call()

// let arr_num = []
// let total = 0
// const take_num = () => {
//     for (let i = 1; i <= 5; i++) {
//         let num = Number(prompt("enter the number"));
//         arr_num.push(num)
//     }
//     for (let num of arr_num) {
//         total += num
//     }
//     console.log("The mean is ", total / arr_num.length)
// }
// take_num()

// let totall = 0;
// let digits = [1, 2, 3, 4, 5]
// for (let num of digits) {
//     totall += num
// }
// console.log("the mean is", totall / digits.length)


// let numb = [1, 2, 3, 4, 5]
// let user_input = Number(prompt("Enter a number you want to  add "))
// numb.push(user_input)
// console.log(numb)

// let numbb = [1, 2, 3, 4, 5]

// const insert_number = () => {
//     let n = Number(prompt("enter the number you want to insert"))
//     numbb.push(n)
//     if(numbb.includes(0)){
//         console.log("you cannot add further numbers")
//         console.log(numbb)
//     }
//      else{
//         insert_number()
//     }
// }

// insert_number()

let boy1="Ayush"
let boy2="pramod"
console.log(`${boy1} is friend of ${boy2}`)
let fruit= "apples\rbanana"
console.log(fruit)

console.log("har\"".length)

const friends= ["hey","say","toy,","joy"]
if(friends.includes("pay")){
    console.log("yes")
}else{
    console.log("no")
}

let email=["dibashpoudel@gmail.com","https://yopmail.com/wm"]
for(let data of email){
if(data.startsWith("https://")){
    console.log(data,"its an link")
}else if(data.endsWith("@gmail.com")){
    console.log(data,"its an email")
}
}

const vegetable= "carrot"
console.log(vegetable.slice(0,2)+vegetable.slice(2).toLocaleUpperCase())

let sen = "please give me Rs 1000"
console.log(sen.slice(0,6))

let fourth= sen[3]="r"
console.log(sen)

let use_for= [1,2,3,4,5,6,7]

let first =use_for[0]=10
console.log(use_for)

let toString=  use_for.toString()
console.log(toString, typeof toString)

let usingJoin=  use_for.join(" and ")
console.log(usingJoin, typeof usingJoin)

use_for.pop()
console.log(use_for)

use_for.push(7)
console.log(use_for)

let new_arr = [100,300,200,400,500,10001]
let new_arr1=[600,700,800,900,1000]

// new_arr.shift()
// console.log(new_arr)

// new_arr.unshift(1000)
// console.log(new_arr)

// delete new_arr[0]
// console.log(new_arr)

// let new_arr3=new_arr.concat(new_arr1)
// console.log(new_arr3)

// new_arr.sort()
// console.log(new_arr)

new_arr.splice(5,1,600)
console.log(new_arr)

let bal = 10
bal +=10
console.log(bal)


let fil = [10,11,12,13,20,25,30]
let nee_arr = fil.filter(num=> num %10 ==0)
console.log(nee_arr)

let nup= [11,22,33,44,55,66,78,88,99]
nup.splice(6,1,77)
console.log(nup)

let bun=[10,20,30,1,2,40,50]
// let remo =bun.splice(3,2)
// console.log(remo)
let remov=bun.slice(3,5)
console.log( remov)

// let rev =bun.reverse()
// console.log(rev)
let gig=[]
let fig=[1,2,3,4,5]
fig.forEach(num=>{
    let a= num*num
    gig.push(a)
})
console.log(gig)

let namer = "dibash"
for(let char in namer){
console.log(namer[char])
}
let aaa = []
let a = [1,2,3,4,5]
let square = a.map((value)=>{
    return value * value
})
console.log(square)

a.forEach((value)=>{
    let aa =  value +1
aaa.push(aa)
})
console.log(aaa)

let new_arrr = a.filter((value)=>{
    return value%2 ==0
}) 
console.log(new_arrr)

let red =  a.reduce((value1 , val2)=>{
    return value1 +val2
})
console.log(red)

let leg = [1,2,3,4,5]
let beg  = leg.map((value)=>{
    return value * value
})
console.log(beg)

let peg = [5,7,10,15,100,20,91,90]
let ten = peg.filter((num)=>{
    return num %10 == 0
})
console.log(ten)

let sl = [1,2,3,4,5,6,7,8,9,10]
let pp=sl.slice(5)
console.log(pp)

let halt = [1,1,2,3,4,4,5]
let new_halt= []
for(let num of halt){
    if(!new_halt.includes(num)){
        new_halt.push(num)
    }
}
console.log(new_halt)

console.log(new_halt)
