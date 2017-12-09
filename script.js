function login() {
var username = document.getElementById('username').value;
var password =  document.getElementById('password').value;
if ((username == 'Ellabc23' && password == 'unicorn') ||
    (username == 'TheNovelEnchantress' && password == 'dragon') ||
    (username == 'Katelyn' && password == 'alicorn') ||
    (username == 'Madison' && password == 'phoenix')) {
    
    window.location.href = 'home.html';
}
}
