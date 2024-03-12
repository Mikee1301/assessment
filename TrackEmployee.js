// Importing readline module to take user input
const readline = require('readline');

// Creating interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to prompt the user and validate input
// Function to prompt the user and validate input
function askQuestion(question) {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            // Validating user input
            if (!isNaN(answer)) {
                if (parseInt(answer) >= 0) {
                    resolve(parseInt(answer));
                } else {
                    console.log("\x1b[31mInvalid input. Please enter a non-negative number.\x1b[0m");
                    askQuestion(question);
                }
            } else {
                console.log("\x1b[31mInvalid input. Please enter a number.\x1b[0m");
                askQuestion(question);
            }
        });
    });
}


// Function to calculate percentage
function calculatePercentage(value, total) {
    return ((value / total) * 100).toFixed(2);
}

// Main function to run the program
async function main() {

    // Asking for user input for various categories
    let newlyHiredMale = await askQuestion("Enter the number of newly hired male employees: ");
    let newlyHiredFemale = await askQuestion("Enter the number of newly hired female employees: ");
    let permanentMale = await askQuestion("Enter the number of male employees in permanent position: ");
    let permanentFemale = await askQuestion("Enter the number of female employees in permanent position: ");
    let resignedMale = await askQuestion("Enter the number of male employees resigned: ");
    let resignedFemale = await askQuestion("Enter the number of female employees resigned: ");

    // Calculating total numbers
    let totalNewlyHired = newlyHiredMale + newlyHiredFemale;
    let totalPermanent = permanentMale + permanentFemale;
    let totalResigned = resignedMale + resignedFemale;

    // Calculating percentages
    let percentageNewlyHiredMale = calculatePercentage(newlyHiredMale, totalNewlyHired);
    let percentageNewlyHiredFemale = calculatePercentage(newlyHiredFemale, totalNewlyHired);
    let percentagePermanentMale = calculatePercentage(permanentMale, totalPermanent);
    let percentagePermanentFemale = calculatePercentage(permanentFemale, totalPermanent);
    let percentageResignedMale = calculatePercentage(resignedMale, totalResigned);
    let percentageResignedFemale = calculatePercentage(resignedFemale, totalResigned);

    console.log("===\nThank you for the Information\n===\nHere is the Summary !!!\n");
    // Displaying the results
    console.log("\x1b[32mNumber of hired employee =", totalNewlyHired);
    console.log("\x1b[32mMale =", percentageNewlyHiredMale + "%");
    console.log("\x1b[32mFemale =", percentageNewlyHiredFemale + "%");

    console.log("\x1b[32m\nNumber of Permanent Employee =", totalPermanent);
    console.log("\x1b[32mMale =", percentagePermanentMale + "%");
    console.log("\x1b[32mFemale =", percentagePermanentFemale + "%");

    console.log("\x1b[32m\nNumber of Resigned Employee =", totalResigned);
    console.log("\x1b[32mMale =", percentageResignedMale + "%");
    console.log("\x1b[32mFemale =", percentageResignedFemale + "%\x1b[0m"); 

    // Asking the user if they want to track employee information again
    let trackAgain = await askQuestion("\nDo you want to track employee information again? (Enter 1 for Yes, 0 for No): ");
    if (trackAgain === 1) {
        main(); // Restart the program
    } else {
        console.log("Thank you for using the simple employee tracking. Goodbye!");
        rl.close(); // Close the readline interface
    }
}

// Calling the main function to start the program
main();
