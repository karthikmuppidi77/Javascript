let counter=document.querySelector("#counter");
let minus_btn=document.querySelector(".minus");
let plus_btn=document.querySelector(".plus")
let set=document.getElementById("set")
let input_value=document.querySelector(".changeby")

minus_btn.addEventListener("click",minus)
    function minus(){
        let countvalue=parseInt(counter.innerText)//getting/reading
        let decrementBy=parseInt(input_value.value)
       //counter.innerText=countvalue-1//setting
       counter.innerText=countvalue-decrementBy//setting


    }
    plus_btn.addEventListener("click",plus)
    function plus(){
        let countvalue=parseInt(counter.innerText)
        let incrementBy=parseInt(input_value.value);
        counter.innerText=countvalue + incrementBy
        console.log(counter.innerText);
    }
    set.addEventListener("click", ()=>{
         counter.innerText=0;
    }
       
     
    )