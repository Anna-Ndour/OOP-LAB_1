let courseNames: string[] = [];
let capacities: number[] = [];
let enrolledStudents: string[][] = [];

function addCourse(name: string, capacity: number): void {
  courseNames.push(name);
  capacities.push(capacity);
  enrolledStudents.push([]);
}

function enroll(courseIndex: number, student: string): void {
  if (enrolledStudents[courseIndex].length >= capacities[courseIndex]) {
    return;
  }

  enrolledStudents[courseIndex].push(student);
}

function printCourse(courseIndex: number): void {
  console.log(
    courseNames[courseIndex] + ":",
    enrolledStudents[courseIndex],
    "capacity " + capacities[courseIndex]
  );
}

addCourse("Object-Oriented Programming", 30);
addCourse("Databases", 40);

enroll(0, "Awa");
enroll(0, "Mamadou");
enroll(1, "Fatou");

printCourse(0);
printCourse(1);

courseNames.push("Computer Networks");
enroll(2, "Ibrahima");
printCourse(2);