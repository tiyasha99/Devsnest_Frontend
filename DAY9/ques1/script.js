const me = {
  fullname: function(){
    return this.firstName + " " + this.lastName;
  }
}

const me1 = {
  fullname: function(city, state){
    return this.firstName + " " + this.lastName+ "," + city+ "," + state;
  }
}

const student1 = {
  firstName: "Tiyasha",
  lastName: "Das"
}

const student2 = {
  firstName: "Nihal",
  lastName: "Prakash"
}

console.log(me.fullname.call(student1));
console.log(me.fullname.call(student2));


console.log(me1.fullname.call(student1, 'Alipurduar', 'West Bengal'));

//apply

let a=['Kolkata', 'WB'];
console.log(me1.fullname.apply(student1,a));


const emp = {
  age: 26,
  getAge: function() {
    return this.age;
  }
};

const Age = emp.getAge;
console.log(Age());

const bindAge = Age.bind(emp);
console.log(bindAge());

