let employees = []; // empty array to push employees to

function employee(name, jobTitle, salary, employmentType){  // constructor function for building employee files
    this.name = name;    
    this.jobTitle = jobTitle;
    this.salary = salary
    this.employmentType = employmentType || 'Full Time';
    employees.push(this);
    
    
}

employee.printemployeeform = function(){  //method for printing employees forms to console.
    console.log(this)
};


        //employees information//
let steven = new employee('steven', 'CEO', 10000, "Part time"); 
let john = new employee('John', 'Manager', 8000, 'Contract');
let david = new employee('john', 'developer', 50000, 'Contract');
console.log(employees);
