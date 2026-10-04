export function calculateClassAverage(students, courseId){
    const grades = students
    .flatMap((s) => s.course)
    .filter((c) => c.courseId === courseId)
    .map((c) => c.grade)
if (grades.length === 0) return 0;
return grades.reduce((sum, g) => sum + g, 0) / grades.length;


}