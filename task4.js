const d=+prompt("Please enter the number D");
const e=+prompt("Please enter the number E");
console.log(d);
console.log(e);
let sum=0;
for(let i4=d+1;i4<e;i4++){
    if(i4%7==0){
        sum=sum+i4;
    }
}
console.log(sum);
