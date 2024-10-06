class Employee{
    employeeName : string;
    private salary : number;
    dept : string;
    isEligible : boolean;
    salaryHike : number;

    constructor(name : string,sal : number,deptmnt : string,eligible  : boolean,hike : number){
        this.employeeName = name;
        this.salary = sal;
        this .dept = deptmnt;
        this.isEligible = eligible;
        this.salaryHike = hike;
        }
    getSalary(){
        if(this.isEligible){
           this.salary = this.getnewSalary();
        }
       return this.salary;
    }
    private getnewSalary(){
        return this.salary + this.salary * this.salaryHike/100;
    }
}
const employee1 = new Employee('murshi',50000,'dev',true,20);
console.log(employee1.getSalary());

  