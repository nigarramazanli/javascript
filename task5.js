const f=+prompt("Please enter the positive number F");
console.log(f);
let n1=1;
let n2=1;
let sum3=0;
if(f==1){
    console.log(1);
} else if(f==2){
   console.log(2);
} else{
for(i=3;i<=f;i++){  
    sum3=n1+n2;
    n1=n2;
    n2=sum3;
}
console.log(sum3);
}

