function estimated_delivery(type) {
    var result = "";
    switch (type) {
        case  "standard":
            result = "3-5 days";
            break; 
        case "express":
            result = "1-2 days";
            break; 
        case "overnight":
            result = "next day";
            break; 
        default:
            break;

    }
    return result;
}
console.log(estimated_delivery("standard"));

