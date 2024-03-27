function extractDateParts(regexPattern, inputString) {
    const regex = new RegExp(regexPattern);
    const match = regex.exec(inputString);

    if (!match) {
        console.log("No match found.");
        return;
    }

    // Assuming the regex pattern has groups for day, month, and year
    const [_, day, month, year] = match;
    console.log("Day:", day);
    console.log("Month:", month);
    console.log("Year:", year);
}

// Test the function with different patterns
const testString = "Today is 27th March 2024.";
const pattern1 = /(\d{1,2})\s+(\w+)\s+(\d{4})/; // Matches day, month, and year
const pattern2 = /(\d{1,2})\w{2}\s+(\w+)\s+(\d{4})/; // Matches day (without suffix), month, and year

console.log("Testing with pattern 1:");
extractDateParts(pattern1, testString);

console.log("\nTesting with pattern 2:");
extractDateParts(pattern2, testString);
