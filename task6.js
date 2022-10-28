let g1=+prompt("Please enter the positive number g");
console.log(g1);
let g2=+prompt("Please enter the positive number g");
console.log(g2);
while(g1%g2>0){
let r=g1%g2;
g1=g2;     
g2=r;      
}
console.log(g2);
