import * as readlineSync from 'readline-sync';

function calculateGrade() {
    // Accept scores from the user
    const writtenTest: number = parseFloat(readlineSync.question('Enter the marks scored in Written Test: '));
    const labExams: number = parseFloat(readlineSync.question('Enter the marks scored in Lab Exams: '));
    const assignments: number = parseFloat(readlineSync.question('Enter the marks scored in Assignments: '));

    // Define weights for each component
    const writtenTestWeight: number = 0.7; // 70%
    const labExamsWeight: number = 0.2; // 20%
    const assignmentsWeight: number = 0.1; // 10%

    // Calculate weighted average
    const weightedAverage: number = (writtenTest * writtenTestWeight) +
                                    (labExams * labExamsWeight) +
                                    (assignments * assignmentsWeight);

    // Display the grade
    console.log(`Grade of the student is: ${weightedAverage.toFixed(2)}`);
}

// Call the function to execute the program
calculateGrade();
