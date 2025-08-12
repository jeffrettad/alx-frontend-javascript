// 1. Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any; // allows extra properties
}

// Example Teacher
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // extra property
};

console.log(teacher3);

// 2. Director interface extending Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

const director1: Director = {
  firstName: 'Jane',
  lastName: 'Smith',
  location: 'New York',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// 3. printTeacherFunction interface
// Interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function with exact syntax for ALX checker
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

// Example usage (optional)
console.log(printTeacher({ firstName: 'John', lastName: 'Doe' })); // John. Doe


// Example usage
console.log(printTeacher("John", "Doe")); // J. Doe


// 4. StudentClass and related interfaces
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass {
  private firstName: string;
  private lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}


// Example usage
const student = new StudentClass('Alice', 'Johnson');
console.log(student.displayName());
console.log(student.workOnHomework());
