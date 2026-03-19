document.getElementById('red').addEventListener('click', () => {
    localStorage.setItem('color', 'red');
    sessionStorage.setItem('color', 'red');
    console.log('color saved:', localStorage.getItem('color'));
});
document.getElementById('green').addEventListener('click', () => {
    localStorage.setItem('color', 'green');
    sessionStorage.setItem('color', 'green');
    console.log('color saved:', localStorage.getItem('color'));
});
document.getElementById('blue').addEventListener('click', () => {
    localStorage.setItem('color', 'blue');
    sessionStorage.setItem('color', 'blue');
    console.log('color saved:', localStorage.getItem('color'));
});