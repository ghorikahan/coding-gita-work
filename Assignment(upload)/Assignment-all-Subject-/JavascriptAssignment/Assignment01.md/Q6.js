let temprature = 15;

if (temprature < 0) {
    console.log("freezing Cold");
}
else if (temprature >= 0 && temprature <= 15) {
    console.log("Very Cold");
}

else if (temprature >= 16 && temprature <= 25) {
    console.log("Cold");
}

else if (temprature >= 26 && temprature <= 35) {
    console.log("Warm");
}

else if (temprature >= 36) {
    console.log("Hot");
}
