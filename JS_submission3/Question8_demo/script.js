class Student {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.enrolledCourses = [];
    }

    enroll(course) {
        this.enrolledCourses.push(course);
        course.addStudent(this);
    }

    getGrades() {
        // Logic to get grades
    }
}

class Teacher {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.coursesTaught = [];
    }

    assignCourse(course) {
        this.coursesTaught.push(course);
        course.setTeacher(this);
    }

    gradeStudent(student, course, grade) {
        // Logic to grade a student
    }
}

class Course {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.teacher = null;
        this.studentsEnrolled = [];
    }

    setTeacher(teacher) {
        this.teacher = teacher;
    }

    addStudent(student) {
        this.studentsEnrolled.push(student);
    }

    listStudents() {
        console.log(`Students enrolled in ${this.title}:`);
        this.studentsEnrolled.forEach(student => {
            console.log(`${student.name}`);
        });
    }
}

// Sample data and interactions
const student1 = new Student(1, 'Alice', 'alice@example.com');
const student2 = new Student(2, 'Bob', 'bob@example.com');

const teacher1 = new Teacher(1, 'Mr. Smith', 'smith@example.com');

const course1 = new Course(1, 'Math 101', 'Basic Mathematics');
const course2 = new Course(2, 'Physics 101', 'Basic Physics');

teacher1.assignCourse(course1);
teacher1.assignCourse(course2);

student1.enroll(course1);
student2.enroll(course1);
student1.enroll(course2);
