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
demo() {

}

grades(){

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

    }

    PRAssignment(){

    }
    sprintChallenge(){

    }
}

    class Project_Mananger extends Student {
        constructor(attributes){
         this.gradClassName = attributes.gradClassName;
         this.favInstructor = attributes.favInstructor;  
        }
        standUp(){

        }
        debugsCode(){

        }


    }
    const adam = new Instructor({
        name: 'Adam',
        location: 'New York',
        age: 50,
        gender: 'male',
        favLanguage: 'JavaScript',
        specialty: 'Front-end',
        catchPhrase: `Ask the Big Boss`
      });

      const bob = new Instructor({
        name: 'Bob',
        location: 'France',
        age: 42,
        gender: 'male',
        favLanguage: 'CSS',
        specialty: 'Front-end',
        catchPhrase: `Get the practice in`
      });

      const cathy = new Student({
        name: 'cathy',
        location: 'Clemons',
        age: 21,
        gender: 'female',
        previousBackground: "fastfood",
        className: "CS1",
        favSubjects: "HTML"
      });

        const don = new Student({
        name: 'Don',
        location: 'Oxford',
        age: 24,
        gender: 'male',
        favLanguage: 'JavaScript',
        previousBackground: "none",
        className: "CS12",
        favSubjects: "CSS"
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



      