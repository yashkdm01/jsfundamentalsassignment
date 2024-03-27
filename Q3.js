function matches(password) {
    var regex = /[a-z8-9A-Z]/gi;
    var match_password = password.match((regex));
    var to_string = match_password.toString();
    var replace_match = to_string.replaceAll(",","");
    return replace_match;

}
console.log(matches("AayushisDukra@01"));