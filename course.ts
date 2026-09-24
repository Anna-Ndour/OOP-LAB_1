class Course {
  capacity = 30;
  enrolledStudents: string[] = [];
  registrationOpen = true;

  enroll(student: string): boolean {
    if (!this.registrationOpen) {
      return false;
    }

    if (this.enrolledStudents.length >= this.capacity) {
      return false;
    }

    if (this.enrolledStudents.includes(student)) {
      return false;
    }

    this.enrolledStudents.push(student);
    return true;
  }

  closeRegistration(): void {
    this.registrationOpen = false;
  }

  withdraw(student: string): boolean {
    const pos = this.enrolledStudents.indexOf(student);

    if (pos === -1) {
      return false;
    }

    this.enrolledStudents.splice(pos, 1);
    return true;
  }
}

const oop = new Course();
const databases = new Course();

oop.enroll("Awa");
oop.enroll("Mamadou");
databases.enroll("Fatou");

console.log(oop.enrolledStudents);
console.log(databases.enrolledStudents);

console.log(oop.enroll("Awa")); // false — already enrolled

oop.closeRegistration();

console.log(oop.enroll("Ousmane")); // false — registration closed

console.log(oop.withdraw("Mamadou")); // true
console.log(oop.withdraw("Mamadou")); // false — already withdrawn

console.log(oop.enrolledStudents);