let num = prompt('Введите число')
let degree = prompt('Введите степень')
function degreeNumber (a , b = 1) {
    if (isNaN(a) && isNaN(b) ){
        return 'вы ввели не число' ;
    }else {
        return a**b;
    }
}
const result  = degreeNumber(num , degree)
alert(result)