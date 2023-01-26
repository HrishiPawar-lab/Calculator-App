const userInput=document.getElementById('userInput');
var expression="";
function press(num){
    expression+=num;
    userInput.value=expression;
}
function erase(){
    userInput.value=""
}
function btnEqual(){
    userInput.value=eval(expression);
    expression=" " ;  
}
document.addEventListener("keydown",function(event){
    if(event.key=="Enter"){
        btnEqual()
    }
})