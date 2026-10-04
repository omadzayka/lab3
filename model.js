export class Student{
    constructor(id, name, course = []) {
        // Read-only, non-delatble, non-reconfigurable id
        Object.defineProperty(this, "id" ,  {
            value: id,
            writable: false,
            configurable: false,
            enumarble: true,
        });
        this.name = name;
        this.course = courses;
    }

    addCourse(courseId, grade) {
        this.courses.push({courseId, grade});
    }

    getAverage() {
      if (this.courses.length === 0) return 0;
      const total = this.courses.reduce((sum, c ) => sum + c.grade, 0);
      return total / this.courses.length;
    }
} 

export default Student;
