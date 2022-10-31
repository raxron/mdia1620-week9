var text = "";
var total = 0;

for(var i=0; i<6; i++){
    if (i=3) {
        text = "finished";
        break;
    }else if(i == 5){
        i++
    }
    total += i;
}

console.log(i);
console.log(total);