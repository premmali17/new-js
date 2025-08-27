// create object 
const jsuser = {
    "full name":"prem mali",
    name: "prem",
    age:19,
    location:"pune",
    email:" prem@gmail.com",
    lastlogindays : ["monday", "saturday"]

}

console.log(jsuser.email);//u can acces it by dot but this is not appropriate method
console.log(jsuser["email"]);// correct

//console.log(jsuser.full name );// u cant call it by this method so always use []method 
console.log(jsuser);// u can call object 

jsuser.email = "prem@1703"// changed the value 
console.log(jsuser);


jsuser.greeting = function () {
    console.log("hello js user");
}    // here we pas function with some parameter or mesg like whenever we will call the greeting it will return the hello mesg 

jsuser.greetingtwo = function () {
    console.log('hello js user,$(this.name)');
}

console.log(jsuser.greeting());//calling function
console.log(jsuser.greetingtwo());

