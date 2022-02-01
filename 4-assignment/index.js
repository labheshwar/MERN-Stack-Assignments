const express = require ('express');
const student = require('./models/student');
const app = express();
require("./config/mongodb");
const Student = require("./models/student");

const studentNames = ['Labesh', 'Neeraj', 'Sunny', 'Gulshan', 'Umair', 'Uzair', 'Zohaib', 'Taimoor', 'Nirmal', 'Shafiq'];
const studentClasses = ['MERN', 'NodeJS', 'ReactJS', 'AngularJS', 'VueJS', 'React Native', 'Flutter', 'Ionic', 'Android', 'iOS'];
const studentAges = [20, 21, 22, 21, 19, 18, 20, 22, 23, 21];
const teacherNames = ['Vivek', 'Khushal', 'Bharat', 'Raj', 'Imtiaz', 'Yasir', 'Shahid', 'Wasim', 'Shahmurad', 'Shahzad'];

// For adding records

// for (let i=0;i<10;i++){
//     const student = new Student({
//         name: studentNames[i],
//         class: studentClasses[i],
//         age: studentAges[i],
//         teacher: teacherNames[i]
//     });
//     student.save();
// }

// For delete single record

// Student.deleteOne({name: 'Neeraj'}, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Deleted successfully');
//     }
// });

// To delete all records that follow the same condition

// Student.deleteMany({age: 22}, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Deleted successfully');
//     }
// });

// To delete entire collection

// Student.remove((err) => {
//     if (err){
//         console.log(err);
//     } else {
//         console.log('Collection dropped successfully');
//     }
// });