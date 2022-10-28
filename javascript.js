const a=+prompt("Please enter the number A");
console.log(a);
for(let i=1 ;i<1000;i++){
    if(i%a==0){
        console.log(i);
    }
}