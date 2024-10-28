// Let's say we have a list of people, and one of them is the thief
let people = ["Citizen", "Citizen", "Citizen", "Thief", "Citizen", "Citizen"];

// Linear Search Function
function linearSearch(people) {
    for (let i = 0; i < people.length; i++) {
        if (people[i] === "Thief") { // The police finds the thief
            console.log(`Thief found at position ${i}`);
            return i; // Return the position of the thief
        }
    }
    console.log("Thief not found");
    return -1; // If no thief is found
}

linearSearch(people); // Should output "Thief found at position 3"
