const profile={
    abc: {
        xyz: {
            asd :{
                name:"karthik",
                age:"27",
                college:"raghu engineering college"
            }
        }
    }
}
console.log(profile.abc.xyz.asd.name);
console.log(profile.abc.xyz.asd.college);
//old method for accessing variable we use dot notations
 let { name , college}= profile.abc.xyz.asd;
 

