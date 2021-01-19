// Month functions

let ranP = document.getElementById("ranNum");

function generateRandom(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return (num);
}

let ranNum = generateRandom(1,12);



function getRanMonth(ranNum){

let Name;

switch(ranNum) {
    case 1 :
        Name = "January";
    break;
    case 2 :
        Name = "Feburary";
    break;
    case 3 :
        Name = "March";
    break;
    case 4 :
        Name = "April";
    break;
    case 5 :
        Name = "May";
    break;
    case 6 :
        Name = "June";
    break;
    case 7 :
        Name = "July";
    break;
    case 8 :
        Name = "August";
    break;
    case 9 :
        Name = "September";
    break;
    case 10 :
        Name = "October";
    break;
    case 11 :
        Name = "November";
    break;
    case 12 :
        Name = "December";
    break;
    default :
        Name = "January";
}
return Name;
}



// Day Functions

let ranDay = document.getElementById("ranDay");

function generateRandom(min, max) {
    let dayNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return (dayNum);
}

let DayRan = generateRandom(1,30);



// Year Functions

function generateRandom(min, max) {
    let yearNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return (yearNum);
}

let YearRan = generateRandom(2025,2035);



// Fortune Functions

let RanFort = document.getElementById("ranFortune");

function generateRandom(min, max) {
    let fortNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return (fortNum);
}



let FortRan = generateRandom(1,5);

function getFortune(FortRan){

let Message;

switch(FortRan) {
    case 1 :
        Message = 'You will invest in a startup company which takes off after about a month or two. You will invest about $3000 and in two months it will surpass $1,000,000'
    break;
    case 2 :
        Message = 'You and your significant other will go to Las Vegas, Nevada. There, you will play only a few rounds of Poker before you win the Jack Pot'
    break;
    case 3 :
        Message = 'You will begin treatment for cancer which ultimately leads to a full recovery.'
    break;
    case 4 :
        Message = 'You will be the first person to successfully complete a pancreas transplant, you solved how to cure type 1 Diabetes and pancreatic cancer.'
    break;
    case 5 :
        Message = 'You will visit the Avatar Mountains in China, there you will recieve spiritual revelation.'
    break;
    default :
        Message = 'You will 1'
    break;
}
return Message;
}


const monthName = getRanMonth(ranNum)

const fortName1 = getFortune(FortRan)


// Template Literals

let RanTotal = document.getElementById("ranTotal")

RanTotal.textContent = `In the year ${YearRan}, on ${monthName} ${DayRan}th, ${fortName1}.` 