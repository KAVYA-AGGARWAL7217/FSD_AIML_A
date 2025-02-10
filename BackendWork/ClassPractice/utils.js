const average=(num1,num2,num3)=>{
    return (num1+num2+num3)/3;
}
const avgSqrt=()=>{
    return Math.sqrt(average(10,20,30));
}
const obj={
    avgSqrt:avgSqrt
}
module.exports=obj;
