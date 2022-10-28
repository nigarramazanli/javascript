let number=+prompt("Please enter the positive number ");
console.log(number);
let reminder;
let mirror_number=0;
while(number=!0){   
 reminder=number%10; 
  mirror_number=mirror_number*10+reminder;
 number=(number-reminder)/10;    
}
console.log(mirror_number);