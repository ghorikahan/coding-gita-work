let units = 1000;

if (units <= 100) {
    let bill = units * 5;
    console.log(+bill);
}
else if (units <= 300 && units > 100) {
    let bill = (100 * 5) + ((units - 100) * 7);
    console.log(+bill);
}
else if (units > 300) {
    let bill = (100 * 5) + (200 * 7) + ((units - 300) * 10);
    console.log(+bill);
}