function match_string(password) {
    const regex = /[a-z0-9A-Z]/gi;
    var password_check = password.match(regex);
    var to_string = password_check.toString();
    var replace_string = to_string.replaceAll(",", "");

    //password = "Angad1905";
    //replace_string = "Angad1905"
    if(password == replace_string) {
        return true;
    } else {
        return false;
    }
    // return replace_string;

}
console.log(match_string("ayushisdukra"));