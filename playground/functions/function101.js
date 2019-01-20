let square = function (num=2) {
    return num*num;
}
let result = square(3);
// result = square();//4  using 2 as default value

let frToCel = function toCel(fr) {//to celsius
    return {
        celsius: (fr -32)*(5/9),
        fharenit: fr,
        kelvin: (fr+ 459.67)*(5/9)
    };
}
let frToKel = function frToKel(fr) {
    return ((fr+ 459.67)*(5/9))
}

result = frToCel(68);

let tipCal = function tipCal(total=0, tip=0) {
    return total+((total*tip)/100);
}
// result = tipCal(null,2 );

let whatGrade = function whatGrade(nr,dr) {
    let percent = (nr/dr)*100;
    let grade = '';
    if (percent >=90 ) {
        grade = 'A'
    }else if (percent >=80) {
        grade = 'B'
    }else if (percent >=70){
        grade = 'C'
    }else if (percent >=60){
        grade = 'D'
    }else {
        grade = 'F'
    }
    return `You got ${grade} (${percent}%)`
}
// console.log(whatGrade(50,100));

console.log(result);
