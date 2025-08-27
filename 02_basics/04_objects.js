//const tineruser = new Object() // singleton object 

const tinderuser = {}//non singleton user

tinderuser.id = "1234"     //assigning this ingo in object
tinderuser.name = "prem"
tinderuser.isloggedin = false

//console.log(tinderuser);

const regularuser ={
   email:"prem@123",
   fullname:{            // here we created multiple objects in object just like nested
    userfullname:{
        firstname:"prem",
        lastname:"mali"
    }
   }
}

//console.log(regularuser);

//console.log(regularuser.fullname);

//console.log(regularuser.fullname.userfullname);//u can acces it

const obj1 = {1:"a" , 2:"b"}

const obj2 = {2:"a" , 4:"b"}

const obj3 = {5:"a" , 6:"b"}   // we create multiple objects now we eant to merge it all

const obj4 = {...obj1,...obj2,...obj3}//combined all objects in obj 4


console.log(obj4);


// creating objects in arrays
const users =[
    {

    },
    {
        id:1,
        email:"prem@123"
    },// these are the objects 
    {

    
    },
    {

    },
]

users[1].email
console.log(users[1]);// u ca access the array and objects 

console.log(tinderuser);
  console.log(Object.keys(tinderuser));// u can extract the keys of certain object in arrray form

  console.log(Object.values(tinderuser));// same for values also

  console.log(Object.entries(tinderuser));


  