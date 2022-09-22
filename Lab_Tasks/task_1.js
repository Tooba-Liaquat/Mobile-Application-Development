
function Student(name,classs,gpa){
    this.name=name;
    this.classs=classs;
    this.gpa=gpa;
    
}
function Create(){
   let std1=new Student("Tooba",10,3.3);
   let std2=new Student("Irsa",9,3.2);
   let std3=new Student("Azka",7,3.9);
   
   console.log("Student 1 Name ")
   console.log(std1.name)
   console.log("Student 2 Name ")
   console.log(std2.name)
   console.log("Student 3 Name ")
   console.log(std3.name)
   console.log("Student 1 Data ")
   console.log(std1)
   console.log("Student 2 Data ")
   console.log(std2)
   console.log("Student 3 Data ")
   console.log(std3)
   return [std1,std2,std3];
}

let Students= Create();

var array =Students.filter(function (f1){
    return f1.gpa>3
});
console.log("Students with GPA above 3 are ");
console.log(array)



