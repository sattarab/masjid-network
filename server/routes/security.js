var md5 = require('MD5');
exports.hashPassword = function (password, algorithm) {
    for(var i = 0; i < 5; i++) {
        password = md5(password);
    }
    return password;
};