const phone_number = "01033334444";
// const phone_number = "027778888";

function solution(phone_number) {
    var temp1 = '*'.repeat(phone_number.length-4) + phone_number.slice(-4);
    var temp2 = '*'.repeat(phone_number.length-4) + phone_number.substr(-4,4)
    console.log(temp1);
    console.log(temp2);
    return temp1;
};

solution(phone_number);

