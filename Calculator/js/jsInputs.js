const element_num_input = document.getElementById("calculatur-input-num");
const element_btn_num = document.querySelectorAll(".key-box-num");
const element_btn_del =document.getElementById("key-del");
const element_btn_math = document.querySelectorAll("#key-math");
const element_btn_reset = document.getElementById("key-reset");
const element_btn_result = document.getElementById("key-result");

let input_num = 0;
let value;
let nextValue;
let sign;
let resutls = 0; 
let num_key_Queue = [];
let count = 0;

// addEventListener-function
for (var i = 0 ; i < element_btn_num.length; i++) {
    element_btn_num[i].addEventListener('click' , addNumber , false ) ; 
 }
 for (var i = 0 ; i < element_btn_math.length; i++) {
    element_btn_math[i].addEventListener('click' , button_math , false ) ; 
 }
 element_btn_del.addEventListener("click", button_delete);
 element_btn_reset.addEventListener("click",button_reset);
 element_btn_result.addEventListener("click",button_result);
// function
function addNumber(e) {
    e.preventDefault();
    let numInput = this.innerHTML;
    element_num_input.textContent += numInput ;
}
function button_delete(e){
    e.preventDefault();
    element_num_input.textContent= element_num_input.textContent.slice(0,element_num_input.textContent.length-1)
}
function button_math(e) {
    e.preventDefault();
    if (element_num_input.innerHTML===""){
        if (num_key_Queue.length===0){
            console.log(num_key_Queue);
            return
        }
        else{
            num_key_Queue.pop();
            num_key_Queue.push(this.innerHTML)
            console.log(num_key_Queue);
        }
    } 
    else{ 
        input_num = Number(element_num_input.innerHTML);
        num_key_Queue.push(input_num);
        num_key_Queue.push(this.innerHTML)
        element_num_input.textContent="" ;
        console.log(num_key_Queue);
        return
    }
}
function button_reset(e){
    e.preventDefault();
    element_num_input.textContent="" ;
    num_key_Queue = []
    console.log(num_key_Queue);
}
function calculatur(str){
    if(str==="+") {
        resutls+=nextValue;
    }
    else if  (str==="-") {
        resutls-=nextValue;
    }
    else if  (str==="/") {
        resutls/=nextValue;
    }
    else if  (str==="x") {
        resutls*=nextValue;
    }    
}
function button_result(e){
    e.preventDefault();
    input_num = Number(element_num_input.innerHTML);
    num_key_Queue.push(input_num);
    resutls =  num_key_Queue.shift()
    element_num_input.textContent="" ;

    while (num_key_Queue.length!==0) {
        sign = num_key_Queue.shift()
        nextValue=num_key_Queue.shift()
        calculatur(sign); 
       }
    element_num_input.textContent=resutls;
    return 
}