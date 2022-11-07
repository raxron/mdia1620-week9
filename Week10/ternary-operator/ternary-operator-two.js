function pass(){
    console.log("You passed.");
}
function fail(){
    console.log("You failed.");
}


var checkGrade=true;
checkGrade ? pass() : fail() ;