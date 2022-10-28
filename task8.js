let a8 = +prompt("Please enter the value for A:");
let b8 = +prompt("Please enter the value for B:");
let ra, rb;
let temp=0;
while(a8 != 0){
  ra = a8 % 10;
  a8 = (a8-ra)/10;
  while(b8 != 0){
    rb = b8 % 10;
    b8 = (b8-rb)/10;
  if(ra==rb){
      temp=1;
      console.log("YES");
    }
}
} 
if(temp==0){
  console.log("NO");
}
