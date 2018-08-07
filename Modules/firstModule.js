
/*module.exports={
    sum:function(num1,num2){
        return num1+num2;
    },
    sub:function(num1,num2){
        return num1-num2;
    },
    div:function(num1,num2){
        return num1/num2;
    },
    mul:function(num1,num2){
        return Number(num1)*Number(num2);
    }
}*/

const sum = (num1,num2) => {
    return num1+num2;
}
const sub = (num1,num2) => {
    return num1-num2;
}
const div = (num1,num2) => {
    return num1/num2;
}
const mul = (num1,num2) => {
    return num1*num2;
}

module.exports = {
    "test1":sum,
    "test2":sub,
    "test3":div,
    "test4":mul
 };
 
 /*module.exports = {
    sum,
    sub,
    div,
    mul
 };*/

/*module.exports.sum=function(num1,num2){
    return num1+num2;
};
exports.sub=function(num1,num2){
    return num1-num2;
},
exports.div=function(num1,num2){
    return num1/num2;
},
module.exports.mul=function(num1,num2){
    return Number(num1)*Number(num2);
}*/


/*var niyaz1=123;
var niyaz2=123;



exports.niyaz1=niyaz1;
module.exports.niyaz2=niyaz2;*/