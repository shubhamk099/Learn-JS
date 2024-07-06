
// Object destructuring

const Course = {
    courseName: "JavaScript",
    coursePrice: 999,
    courseInstructor: "Shubham Kumar" 
};

// Course.courseInstructor; 

const {courseInstructor} = Course;

const {courseInstructor: instructor} = Course;

console.log(courseInstructor);
console.log(instructor);

// Learn about API and JSON 
// API is a way to get data (in JSON format) from backend