// Array of student objects
let students = [
    {
        name: "Dhanush",
        marks: [80, 85, 90]
    },
    {
        name: "Rahul",
        marks: [70, 75, 78]
    },
    {
        name: "Anjali",
        marks: [88, 92, 95]
    }
];

// Function to calculate average
function calculateAverage(marks) {
    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum = sum + marks[i];
    }

    return sum / marks.length;
}

// Loop through students
for (let i = 0; i < students.length; i++) {
    let student = students[i];

    let avg = calculateAverage(student.marks);

    console.log("Name:", student.name);
    console.log("Marks:", student.marks);
    console.log("Average:", avg);
    console.log("----------------------");
}