// write a code which can give grades to students according to their scores.

let score =99;
let grade;

if (score >=90 && score <=100) {
    grade = "A";
} else if (score >=70 && score <=89) {
    grade = "B";
} else if (score >=60 && score <=69) {
    grade = "C";
}else if (score >=50 && score <=59) {
    garde = "D";
} else if (score >=0 && score <=49) {
    garde = "F";
}

console.log("according to your score, your grade was:", grade);