let i = 4800000;

if (i <= 250000) {
    console.log("No tax");
}
else if (i >= 250001 && i <= 500000) {
    console.log("5% Tax");
}

else if (i >= 500001 && i <= 1000000) {
    console.log("20% Tax");
}
else {
    console.log("30% tax");
}