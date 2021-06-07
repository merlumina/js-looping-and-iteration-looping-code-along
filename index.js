// Code your solutions in this file

function writeCards(array, event) {
    let messageArray = [];
    for (let i = 0; i < array.length; i++) {
        messageArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return messageArray;
}

function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}