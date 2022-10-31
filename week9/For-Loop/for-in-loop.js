var computer = {
    brand:"Microsoft",
    laptp:"Surface Laptop4",
    screen:"13.5\"",
};
var sentence = "I have the: ";

for(var item in computer) {
    if(item == "brand"){
        sentence += computer.brand;
    }else if(item == "laptop"){
        sentence += computer.latop + ".";
        break;
    }
    if(item == "brand" || item == "laptop"){
        sentence += "";
    }
}

console.log(sentence);