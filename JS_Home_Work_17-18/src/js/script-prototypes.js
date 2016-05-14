// PROTOTYPES
function Human() {
    this.name = 'Adam';
    this.age = 30;
    this.gender = 'male';
    this.height = 160;
    this.weight = 70;
};

function Worker() {
    this.workPlace = 'EPAM';
    this.salary = 1000;
    this.skills = function () {
        return 'hard working';
    }
};

function Student() {
    this.studyPlace = 'GoIT';
    this.grants = 100;
    this.skills = function () {
        return 'watching TV Series';
    }
}

Worker.prototype = new Human();
Student.prototype = new Human();

var frontEndDeveloper = new Worker();
frontEndDeveloper.name = 'Jessica';
frontEndDeveloper.gender = 'female';
console.log(
    'Worker name: ' + frontEndDeveloper.name + '\n' +
    'Gender: ' + frontEndDeveloper.gender + '\n' +
    'Age: ' + frontEndDeveloper.age + '\n' +
    'Skills: ' + frontEndDeveloper.skills()
);

var studentFirstCourse = new Student();
studentFirstCourse.age = 20;
console.log(
    'Student name: ' + studentFirstCourse.name + '\n' +
    'Gender: ' + studentFirstCourse.gender + '\n' +
    'Age: ' + studentFirstCourse.age + '\n' +
    'Skills: ' + studentFirstCourse.skills()
);