// const phone_number = "01033334444";
// const phone_number = "027778888";

function solution(phone_number) {
    return '*'.repeat(phone_number.length-4) + phone_number.slice(-4)
};

solution(phone_number);

