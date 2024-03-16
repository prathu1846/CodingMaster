// for a given array with marks of student [85,97,44,37,60,76],Find the average of entire class

let marks = [85,97,44,37,60,76];
let sum = 0;

for(let val of marks) {
    sum += val;
}

let avg = sum/marks.length;
console.log(`avg marks of the class = ${avg}`);