// CODE here for your Lambda Classes


class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
}

speak() {
    return `Hello my name is ${this.name} , I am from ${this.location}`
}
} 

class Instructor extends Person {
    constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
}
demo(subject) {
   return `Today we are learning about ${subject}`
    
 }   
    


grades(student,subject){
   return `${student.name} receives a perfect score on ${subject}`
}
}
class Student extends Instructor {
    constructor(attributes){
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
    }
    listsSubjects(){
       return this.favSubjects.forEach(function(item) {
           console.log(item);
        });

    }

    PRAssignment(){
        return `${student.name} has submitted a PR for {subject}`
    }
    sprintChallenge(){
        return `${student.name} has begun sprint challenge on {subject} `
    }
}

    class Project_Mananger extends Student {
        constructor(attributes){
         super(attributes);
         this.gradClassName = attributes.gradClassName;
         this.favInstructor = attributes.favInstructor;  
        }
        standUp(){
            return `${this.name} announces to {channel}, @channel standy times!​​​​​`;
        }
        debugsCode(){
            return `${this.name} debugs {student.name}'s code on {subject}`;
        }


    }
    const adam = new Instructor({
        name: 'Adam',
        location: 'New York',
        age: 50,
        gender: 'male',
        favLanguage: 'JavaScript',
        specialty: 'Front-end',
        catchPhrase: "Ask the Big Boss"
      });

      const bob = new Instructor({
        name: 'Bob',
        location: 'France',
        age: 42,
        gender: 'male',
        favLanguage: 'CSS',
        specialty: 'Front-end',
        catchPhrase: "Get the practice in"
      });

      const cathy = new Student({
        name: 'cathy',
        location: 'Clemons',
        age: 21,
        gender: 'female',
        previousBackground: "fastfood",
        className: "CS1",
        favSubjects: ['Html', 'CSS', 'JavaScript']
      });

        const don = new Student({
        name: 'Don',
        location: 'Oxford',
        age: 24,
        gender: 'male',
        favLanguage: 'JavaScript',
        previousBackground: "none",
        className: "CS12",
        favSubjects: ['Html', 'CSS', 'JavaScript']
      });

      const edd = new Project_Mananger({
        name: 'Edd',
        location: 'rocky mount',
        age: 29,
        gender: 'male',
        gradClassName: 'CS12',
        favInstructor: 'Adam',
        
      });

      const frank = new Project_Mananger({
        name: 'Frank',
        location: 'Durham',
        age: 62,
        gender: 'male',
        gradClassName: 'CS1',
        favInstructor: 'Bob',
        
      });


    console.log(don.speak());
    console.log(adam.grades(don,"CSS"));
    console.log(adam.demo("CSS"));
    don.listsSubjects();
    // console.log();
      