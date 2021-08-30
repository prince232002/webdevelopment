console.log("this is tutorial 53");

function greet (name , greettext){
    console.log(greettext+""+ name);
    console.log(name+" is a good boy");
}
function sum (a,b,c){
    let d = a + b + c;
    return d;
    // this line never execute (unreachable code as used after return)
    // console.log("this line never execute ")
}
 let name="harry";
 let name1="garg"
 let name2= "shubhangi";
 let name3="rohi";
 let greettext="good morning "
greet(name, greettext);
greet(name1, greettext);
greet(name2, greettext);
greet(name3, greettext);
// let returnval=greet(name3);
// console.log(returnval);

let returnval=sum(1,2,3);
console.log(returnval);

//  console.log(name +" is a good boy ");
//  console.log(name1 +" is a good boy ");
//  console.log(name2 +" is a good boy ");
//  console.log(name3 +" is a good boy ");