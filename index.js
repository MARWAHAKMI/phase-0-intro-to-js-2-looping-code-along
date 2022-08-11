// Code your solutions in this file
const writeCards = list => {
    let newList = []
    for (let i = 0; i < list.length; i++) {
        newList.push(`Thank you, ${list[i]}, for the wonderful surprise gift!`)
    }
    return newList
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"))
////////////////////////////////////////////////////////////////////

const countDown = (counter) => {
    do {
        console.log(counter);
        counter--;
    } while (counter >= 0);
}
console.log(countDown(4))