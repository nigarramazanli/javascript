const b=+prompt("Please enter the number B");
console.log(b);
let n=0;
for(let counter2=1;counter2<b;counter2++){
    if(counter2*counter2<b){
        n=n+1;
    }
}
console.log(n);