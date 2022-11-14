6-1-1
var cars=["BMW","Toyota","Buick","Ford"];
cars.sort();
console.log(cars);
//['BMW', 'Buick', 'Ford', 'Toyota']

6-1-2
var electronics=["mouse","monitor","cables","laptop"];
electronics.sort();
console.log(electronics);
//['cables', 'laptop', 'monitor', 'mouse']

6-1-3
var departments=["Finance","Marketing","Graphic Design","IT"];
departments.sort();
console.log(departments);
//['Finance', 'Graphic Design', 'IT', 'Marketing']

6-2-1
var cars=["BMW","Toyota","Buick","Ford"];
cars.reverse();
console.log(cars);
//['Ford', 'Buick', 'Toyota', 'BMW']

6-2-2
var electronics=["mouse","monitor","cables","laptop"];
electronics.reverse();
console.log(electronics);
//['laptop', 'cables', 'monitor', 'mouse']

6-2-3
var departments=["Finance","Marketing","Graphic Design","IT"];
departments.reverse();
console.log(departments);
//['IT', 'Graphic Design', 'Marketing', 'Finance']

6-3-1
var school=["BCIT","UBC","SFU"];
var element;
school.forEach(element=>console.log(element));
//BCIT
//UBC
//SFU

6-3-2
var electronics=["mouse","keyboard","monitor"];
electronics.forEach(e=>console.log(e));
//mouse
//keyboard
//monitor

6-3-3
var summerActivities=["hiking","biking","swimming"];
summerActivities.forEach(activity=>console.log(activity));
//hiking
//biking
//swimming

6-3-4
var items=[1,3,/*empty*/,7];
var runs=0;
items.forEach(element=>{
    console.log(element);
    runs++;}
    );
//1
//3
//7

6-4-1
var arr=[1,4,9,16];
arr.map(x=>console.log(x));
//1
//4
//9
//16

6-4-2
var arr=[1,4,9,16];
arr.map(x=>console.log(x*2));
//2
//8
//18
//32

6-4-3
var electronics=["keyboard","mouse","monitor"];
electronics.map(x=>console.log(x));
//keyboard
//mouse
//monitor

6-4-4
var array1=[1,4,9,16];
array1.map((x,index)=>console.log(`The number is ${x}. The index is ${index}.` ));
//The number is 1. The index is 0.
//The number is 4. The index is 1.
//The number is 9. The index is 2.
//The number is 16. The index is 3.

6-4-5
var electronics=["keyboard","mouse","monitor"];
electronics.map((x,index)=>console.log(`The number is ${x}. The index is ${index}.` ));
//The number is keyboard. The index is 0.
//The number is mouse. The index is 1.
//The number is monitor. The index is 2.

6-4-6
var bankAccount=[
    {key:1,value:100},
    {key:2,value:200},
    {key:3,value:300},
]
bankAccount.map(({key,value})=>console.log(key+":"+value));
//1:100
//2:200
//3:300

6-4-7
var number=[1,2,3,4];
var filteredNumbers=number.map((num,index)=>{
    if(index<3){
        return num;
    }
 })
 console.log(filteredNumbers);
 //[1, 2, 3, undefined]

 6-4-8
var electronics=new Map();
electronics.set('laptop',1000);
electronics.set('mouse',5);
electronics.set('keyboard',10);
console.log({electronics});
//333electronics: Map(3) { 'laptop' => 1000, 'mouse' => 5, 'keyboard' => 10 }

6-4-9
var electronics=new Map();
electronics.set('laptop',1000);
electronics.set('mouse',5);
electronics.set('keyboard',10);
electronics.delete("keyboard");
console.log({electronics});
//{ electronics: Map(2) { 'laptop' => 1000, 'mouse' => 5 } }

6-4-10
var electronics=new Map();
electronics.set('laptop',1000);
electronics.set('mouse',5);
electronics.set('keyboard',10);
console.log(electronics.size);
//3