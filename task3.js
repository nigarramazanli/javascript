const c=+prompt("Please enter the number C");
console.log(c);
let largest_number=1;
for(let counter3=1;counter3<c;counter3++){
   if(c%counter3==0){
    largest_number=counter3;
   }
}
console.log(largest_number);