function OuterFunction(num) {
    
    function innerfunction(num) {
        let square = num * num;
        return square;
    }
    return innerfunction;
}
let result = OuterFunction(3)(3);
console.log(result);
