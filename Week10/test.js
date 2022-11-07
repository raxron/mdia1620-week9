5-1-1
var number=3;
var i=0;

while (i<number) {
    console.log(i);
    i++;
}
/*
0
1
2
*/

5-1-2
var number=5;
var i=0;

while (i<=number) {
    console.log(i);
    i++;
}
/*
0
1
2
3
4
5
*/

5-1-3
var number=5;
var i=0;

while (i<=number) {
    console.log(i);
    i+=2;
}
/*
0
2
4
*/

5-1-4
var number=6;
var i=0;

while (i<=number) {
    console.log(i);
    i+=2;
}
/*
0
2
4
6
*/

5-1-5
var number=6;
var i=0;

while (i<=number) {
    if(i%2==0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
    i++;
}
/*
Even
Odd
Even
Odd
Even
Odd
Even
*/

5-1-6
var i=0;
var proceed=true;

console.log(`Start. The value is ${proceed}.`);

while (proceed) {
    if(i==3){
        proceed=false;
    }
    i++;
}
console.log(`Done. The valus is ${proceed} and the number ended at ${i}.`);
//Start. The value is true.
//Done. The valus is false and the number ended at 4.


5-1-7
var i=0;
var proceed=true;

console.log(`Start. The value is ${proceed}.`);

while (proceed) {
    if(i==3){
        proceed=false;
    }
    i++;
}
console.log(`Done. The valus is ${proceed} and the number ended at ${i}.`);
//Start. The value is true.
//Done. The valus is false and the number ended at 4.

5-1-8
var i=0;
var proceed=true;

console.log(`Start. The value is ${proceed}.`);

while (proceed) {
    if(i==4){
        proceed=false;
        break;
    }
    i++;
}
console.log(`Done. The valus is ${proceed} and the number ended at ${i}.`);
//Start. The value is true.
//Done. The valus is false and the number ended at 4.

5-1-9

5-2-1
var i=0;
var number=5;
do {
    console.log(i);
    i++;
} while (i<number);
/*
0
1
2
3
4
*/

5-2-2
var i=0;
do {
    console.log(i);
    i+=2;
} while (i<5);
/*
0
2
4
*/

5-2-3
var i=1;
do {
    console.log(i);
    i+=2;
} while (i<5);
/*
1
3
*/

5-2-4
var i=1;
var proceed=true;

do {
    console.log(i);
    if(i==3){
        break;
    }
    i++;
} while (proceed);
/*
1
2
3
*/

5-2-5
var i=1;
var j=0;
do {
    console.log("The value of i is "+i+".");
    console.log("The value of j is "+j+".");
    if(i==j){
        break;
    }
    i++;
    j+=2;
} while (i<5&&j<5);
//The value of i is 1.
//The value of j is 0.
//The value of i is 2.
//The value of j is 2.

7-1-1
var name="George";
var beverage=name==="Fred"?"True":"Flase";
console.log(beverage);
//False

7-1-2
var name="Fred"
var beverage=name==="Fred"?"True":"Flase";
console.log(beverage);
//True

7-1-3
var age=20;
var beverage=age===21?"beer":"juice";
console.log(beverage);

7-1-4
function hello(){
    console.log("Hello person");
}
function goodbye(){
    console.log("Goodbye person");
}
var authenticated=true;
authenticated?hello():goodbye();
//Hello person

7-1-5
function getFee(isMember){
    return (isMember?"$3.00":"$15.00" );
}
console.log(getFee(true));
//$3.00
console.log(getFee(false));
//$15.00
console.log(getFee(null));
//$15.00