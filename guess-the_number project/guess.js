let user=document.querySelector(".user_input") // read the user input tag
let submit=document.querySelector(".submit")
let newgame=document.querySelector(".new_game")
let guess=document.querySelector(".my_guess")
let output=document.querySelector(".output")
let form=document.querySelector("form")

let randomnumber=Math.round(Math.random() *10);
let allGuessArray=[];
form.addEventListener("submit",(e) => {
     e.preventDefault();
    console.log("check");
    let userinputvalue =parseInt(user.value);
    console.log("check the value");
    console.log(userinputvalue);//where user types their guess getting the  user input value from input tag
   if (userinputvalue < randomnumber){
     output.innerText="too low"
    }
    else if(userinputvalue > randomnumber){
        output.innerText="too high"
    }
    else  {
        output.innerText="congtrats you got correct answer"
         newgame.disabled=false;
         submit.disabled=true;
    }
   

    allGuessArray.push(userinputvalue);
    guess.innerText=`your guesses number was ${allGuessArray}`;
     form.reset();
    })

    newgame.addEventListener("click",(e) =>{
    console.log("empty");
    output.innerText="";
    guess.innerText="";
    newgame.disabled=true;
    submit.disabled=false; 
    randomnumber=Math.round(Math.random()*10);
})


        

    
    


