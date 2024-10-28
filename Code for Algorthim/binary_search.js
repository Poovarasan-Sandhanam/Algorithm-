// Sorted list of people with the thief at a specific sorted position
let sortedPeople = ["Citizen", "Citizen", "Citizen", "Citizen", "Thief", "Citizen", "Citizen"];

// Binary Search Function
function binarySearch(people) {
    let start = 0;
    let end = people.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (people[mid] === "Thief") { // The police find the thief
            console.log(`Thief found at position ${mid}`);
            return mid; // Return the position of the thief
        }
        // Here we assume we can decide which half to search based on a specific ordering rule.
        // In a real numeric example, we would compare values to decide.
        else if (mid < 4) { // Hypothetically "clues" tell the police that the thief is in the right half
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    console.log("Thief not found");
    return -1; // If no thief is found
}

binarySearch(sortedPeople); // Should output "Thief found at position 4"
